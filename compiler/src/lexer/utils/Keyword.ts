// This file contains all the keywords mapped with the token type.

import { TokenType } from "./TokenType";

export const keywords = new Map<string, TokenType>([
  ["write", TokenType.WRITE],
  ["init", TokenType.INIT],
  ["strict", TokenType.STRICT],
  ["if", TokenType.IF],
  ["else", TokenType.ELSE],
  ["loop", TokenType.LOOP],
  ["times", TokenType.TIMES],
  ["as", TokenType.AS],
  ["from", TokenType.FROM],
  ["to", TokenType.TO],
  ["stop", TokenType.STOP],
  ["skip", TokenType.SKIP],
  ["create", TokenType.CREATE],
  ["return", TokenType.RETURN],
  ["null", TokenType.NULL],
  ["undefined", TokenType.UNDEFINED],
  ["true", TokenType.TRUE],
  ["false", TokenType.FALSE],
]);
