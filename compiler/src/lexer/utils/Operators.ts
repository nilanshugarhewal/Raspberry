// This file contains all the single, double, and triple operators of the programming language.

import { TokenType } from "../tokens/TokenType";

// single char operators that have no multi-char variants
export const singleOperators = new Map<string, TokenType>([
  ["+", TokenType.PLUS],
  ["-", TokenType.MINUS],
  ["*", TokenType.MULTIPLY],
  ["/", TokenType.DIVIDE],
  ["%", TokenType.MODULO],
  ["=", TokenType.ASSIGN],
  ["!", TokenType.NOT],
  ["&", TokenType.BITWISE_AND],
  ["|", TokenType.BITWISE_OR],
  ["~", TokenType.BITWISE_NOT],
  ["?", TokenType.TERNARY],
  ["<", TokenType.LESS_THAN],
  [">", TokenType.GREATER_THAN],
  ["~", TokenType.BITWISE_NOT],
]);

// simple double char operators — [first, second] -> TokenType
export const doubleOperators = new Map<string, TokenType>([
  ["+=", TokenType.PLUS_ASSIGN],
  ["-=", TokenType.MINUS_ASSIGN],
  ["*=", TokenType.MULTIPLY_ASSIGN],
  ["/=", TokenType.DIVIDE_ASSIGN],
  ["%=", TokenType.MODULO_ASSIGN],
  ["++", TokenType.INCREMENT],
  ["--", TokenType.DECREMENT],
  ["**", TokenType.POWER],
  ["=>", TokenType.ARROW],
  ["==", TokenType.EQUAL],
  ["!=", TokenType.NOT_EQUAL],
  ["<=", TokenType.LESS_THAN_EQUAL],
  [">=", TokenType.GREATER_THAN_EQUAL],
  ["<", TokenType.LESS_THAN],
  [">", TokenType.GREATER_THAN],
  ["&&", TokenType.AND],
  ["||", TokenType.OR],
  ["??", TokenType.NULLISH],
  ["?.", TokenType.OPTIONAL_CHAIN],
  ["&", TokenType.BITWISE_AND],
  ["|", TokenType.BITWISE_OR],
]);

// triple char operators
export const tripleOperators = new Map<string, TokenType>([
  ["===", TokenType.STRICT_EQUAL],
  ["!==", TokenType.STRICT_NOT_EQUAL],
  ["&&=", TokenType.AND_ASSIGN],
  ["||=", TokenType.OR_ASSIGN],
  ["??=", TokenType.NULLISH_ASSIGN],
]);

// Scans the current character and call the related helper function.
export const delimiters = new Map<string, TokenType>([
  ["(", TokenType.LEFT_PAREN],
  [")", TokenType.RIGHT_PAREN],
  ["{", TokenType.LEFT_BRACE],
  ["}", TokenType.RIGHT_BRACE],
  ["[", TokenType.LEFT_SQUARE_BRACE],
  ["]", TokenType.RIGHT_SQUARE_BRACE],
  [".", TokenType.DOT],
  [",", TokenType.COMMA],
  [":", TokenType.COLON],
  [";", TokenType.SEMICOLON],
]);

export const operatorChars = new Set([
  "+",
  "-",
  "*",
  "/",
  "%",
  "=",
  "<",
  ">",
  "!",
  "&",
  "|",
  "?",
  "~",
]);
