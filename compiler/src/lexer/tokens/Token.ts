import { TokenType } from "./TokenType";
import { TokenValue } from "./TokenValue";

// Represents a single lexical token produced by the lexer.
export class Token {
  // token information
  public readonly type: TokenType;
  public readonly value: TokenValue;

  // source location
  public readonly line: number;
  public readonly startIndex: number;
  public readonly endIndex: number;

  constructor(
    type: TokenType,
    value: TokenValue,
    line: number,
    startIndex: number,
    endIndex: number,
  ) {
    this.type = type;
    this.value = value;
    this.line = line;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }

  // Returns the length of the token in characters.
  public get length(): number {
    return this.endIndex - this.startIndex;
  }
}
