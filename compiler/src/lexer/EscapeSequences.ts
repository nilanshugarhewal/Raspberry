// This file contains escape sequences used in the lexer.ts file.

export const escapeSequences = new Map<string, string>([
  ["n", "\n"],
  ["t", "\t"],
  ["r", "\r"],
  ["\\", "\\"],
  ["'", "'"],
  ['"', '"'],
  ["0", "\0"],
]);
