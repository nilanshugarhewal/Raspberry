// This is the parser file for the Raspberry programming language.

import { Token } from "../lexer/tokens/Token";

export class Parser {
  private readonly tokens: Token[];
  private currentIndex: number;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
    this.currentIndex = 0;
  }
}
