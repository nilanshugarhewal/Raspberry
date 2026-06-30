import { readFileSync } from "fs";
import path from "path";
import { Lexer } from "./lexer/Lexer";
import { TokenType } from "./lexer/TokenType";

const filePath = path.join(__dirname, "./tests/12-edge-cases.rasp");

const source = readFileSync(filePath, "utf8");

const lexer = new Lexer(source);
const tokens = lexer.tokenize();

for (const token of tokens) {
  console.log({
    type: TokenType[token.type],
    value: token.value,
    line: token.line,
    start: token.startIndex,
    end: token.endIndex,
  });
}
