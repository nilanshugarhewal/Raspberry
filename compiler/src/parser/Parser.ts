// This is the parser file for the Raspberry programming language.

import { Token } from "../lexer/tokens/Token";
import { TokenType } from "../lexer/tokens/TokenType";

// Literals
import { NumberLiteral } from "./ast/expressions/NumberLiteral";
import { StringLiteral } from "./ast/expressions/StringLiteral";

export class Parser {
  private readonly tokens: Token[];
  private currentIndex: number;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
    this.currentIndex = 0;
  }

  // ------------------------------------------->
  // NAVIGATIONS ------------------------------->
  // ------------------------------------------->

  private get currentToken(): Token | undefined {
    return this.tokens[this.currentIndex];
  }

  private advance(): void {
    this.currentIndex++;
  }

  private get isAtEnd(): boolean {
    return this.currentToken?.type === TokenType.EOF;
  }

  // ------------------------------------------->
  // LITERALS ---------------------------------->
  // ------------------------------------------->

  private consume(expected: TokenType): Token {
    const token = this.currentToken;

    if (token === undefined) {
      throw new Error("Unexpected end of file.");
    }

    if (token.type !== expected) {
      throw new Error(
        `Expected ${TokenType[expected]}, but found ${TokenType[token.type]}.`,
      );
    }

    this.advance();

    return token;
  }

  // public parseNumberLiteral(): NumberLiteral {

  // }
}
