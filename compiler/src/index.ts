import { Lexer } from "./lexer/Lexer";

const source = `init age = 21;`;

const lexer = new Lexer(source);
const tokenize = lexer.tokenize();

console.log(tokenize);
