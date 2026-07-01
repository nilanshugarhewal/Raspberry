import { Token } from "./tokens/Token";
import { TokenType } from "./tokens/TokenType";
import { TokenValue } from "./tokens/TokenValue";

// Utility Files
import { isLetter, isDigit, isAlphaNumeric } from "./utils/CharacterUtils";
import { keywords } from "./utils/Keyword";
import {
  singleOperators,
  doubleOperators,
  tripleOperators,
  delimiters,
  operatorChars,
} from "./utils/Operators";
import { escapeSequences } from "./utils/EscapeSequences";
import { LexerError } from "./utils/LexerError";

export class Lexer {
  private readonly source: string;
  private currentIndex: number;
  private currentLine: number;
  private readonly tokens: Token[];
  private tokenStartIndex: number;

  constructor(source: string) {
    this.source = source;
    this.currentIndex = 0;
    this.currentLine = 1;
    this.tokens = [];
    this.tokenStartIndex = 0;
  }

  // ------------------------------------------->
  // NAVIGATION -------------------------------->
  // ------------------------------------------->

  // Returns the current character lexer is reading.
  private get currentCharacter(): string | undefined {
    return this.source[this.currentIndex];
  }

  // Peeks to the next element.
  private peekAt(offset: number): string {
    return this.source[this.currentIndex + offset] ?? "";
  }

  private get peek(): string | undefined {
    return this.peekAt(1);
  }

  // Moves lexer to the next character.
  private advance(): void {
    if (this.currentCharacter === "\n") this.currentLine++;
    this.currentIndex += 1;
  }

  // Checks if the file has ended or not.
  private get isAtEnd(): boolean {
    return this.currentIndex >= this.source.length;
  }

  // ------------------------------------------->
  // TOKEN HELPERS ----------------------------->
  // ------------------------------------------->

  // Adds a Token.
  private addToken(type: TokenType, value: TokenValue): void {
    const token = new Token(
      type,
      value,
      this.currentLine,
      this.tokenStartIndex,
      this.currentIndex,
    );

    this.tokens.push(token);
  }

  // Adds token for single character.
  private addSingleCharacterToken(type: TokenType, value: TokenValue): void {
    this.advance();
    this.addToken(type, value);
  }

  // ------------------------------------------->
  // READER METHODS ---------------------------->
  // ------------------------------------------->

  private readIdentifier(): void {
    while (
      this.currentCharacter !== undefined &&
      isAlphaNumeric(this.currentCharacter)
    ) {
      this.advance();
    }

    const value = this.source.slice(this.tokenStartIndex, this.currentIndex);
    const keyword = keywords.get(value);
    this.addToken(keyword ?? TokenType.IDENTIFIER, value);
  }

  // Check it's Data Type
  private readNumber(): void {
    // Read the integer part
    while (
      this.currentCharacter !== undefined &&
      isDigit(this.currentCharacter)
    ) {
      this.advance();
    }

    // Read the decimal part (if present)
    if (
      this.currentCharacter === "." &&
      this.peek !== undefined &&
      isDigit(this.peek)
    ) {
      this.advance(); // consume '.'

      while (
        this.currentCharacter !== undefined &&
        isDigit(this.currentCharacter)
      ) {
        this.advance();
      }
    }

    const value = this.source.slice(this.tokenStartIndex, this.currentIndex);

    this.addToken(TokenType.NUMBER, Number(value));
  }

  private readString(): void {
    const quote = this.currentCharacter as string;
    this.advance();

    let value = "";

    while (true) {
      const char = this.currentCharacter;

      if (char === undefined)
        throw new LexerError(`Unterminated string`, this.currentLine);

      if (char === quote) {
        this.advance();
        break;
      }

      if (char === "\\") {
        this.advance();
        const escaped = escapeSequences.get(this.currentCharacter as string);
        if (!escaped)
          throw new LexerError(
            `Unknown escape sequence '\\${this.currentCharacter}'`,
            this.currentLine,
          );
        value += escaped;
        this.advance();
        continue;
      }

      value += char;
      this.advance();
    }

    this.addToken(TokenType.STRING, value);
  }

  private readOperator(): void {
    const char = this.currentCharacter as string;
    const next = this.peek;
    const triple = char + next + this.peekAt(2);
    const double = char + next;

    // comments
    if (double === "//") {
      this.skipLineComment();
      return;
    }
    if (double === "/*") {
      this.skipBlockComment();
      return;
    }

    // try triple first, then double, then single
    if (tripleOperators.has(triple)) {
      this.addToken(tripleOperators.get(triple)!, triple);
      this.advance();
      this.advance();
      this.advance();
      return;
    }

    if (doubleOperators.has(double)) {
      this.addToken(doubleOperators.get(double)!, double);
      this.advance();
      this.advance();
      return;
    }

    if (singleOperators.has(char)) {
      this.addToken(singleOperators.get(char)!, char);
      this.advance();
      return;
    }

    throw new LexerError(`Unknown operator '${char}'`, this.currentLine);
  }

  // ------------------------------------------->
  // COMMON METHODS ---------------------------->
  // ------------------------------------------->

  private skipLineComment(): void {
    while (
      this.currentCharacter !== undefined &&
      this.currentCharacter !== "\n"
    ) {
      this.advance();
    }
  }

  private skipBlockComment(): void {
    this.advance(); // skip /
    this.advance(); // skip *

    while (this.currentCharacter !== undefined) {
      if (this.currentCharacter === "*" && this.peek === "/") {
        this.advance(); // skip *
        this.advance(); // skip /
        return;
      }
      this.advance();
    }

    throw new LexerError(`Unterminated block comment`, this.currentLine);
  }

  // Skips the whitespace.
  private skipWhitespace(): void {
    this.advance();
  }

  // ------------------------------------------->
  // WORKER METHODS ---------------------------->
  // ------------------------------------------->

  private scanToken(): void {
    const char = this.currentCharacter;
    if (char === undefined) return;

    if (" \t\r\n".includes(char)) {
      this.skipWhitespace();
      return;
    }
    if (delimiters.has(char)) {
      this.addSingleCharacterToken(delimiters.get(char)!, char);
      return;
    }
    if (operatorChars.has(char)) {
      this.readOperator();
      return;
    }
    if (char === '"' || char === "'") {
      this.readString();
      return;
    }
    if (isLetter(char)) {
      this.readIdentifier();
      return;
    }
    if (isDigit(char)) {
      this.readNumber();
      return;
    }

    throw new LexerError(`Unexpected character '${char}'`, this.currentLine);
  }

  // Tokenize the code.
  public tokenize(): Token[] {
    while (!this.isAtEnd) {
      this.tokenStartIndex = this.currentIndex;
      this.scanToken();
    }

    // Marks the end of the source code.
    this.tokenStartIndex = this.currentIndex;
    this.addToken(TokenType.EOF, null);

    return this.tokens;
  }
}
