export enum TokenType {
  // Keywords
  IF,
  ELSE,
  LOOP,
  TIMES,
  AS,
  FROM,
  TO,
  STOP,
  SKIP,
  CREATE,
  RETURN,
  INIT,
  STRICT,
  WRITE,

  // Boolean & Null
  TRUE,
  FALSE,
  NULL,
  UNDEFINED,

  // Identifier
  IDENTIFIER,

  // Literals
  NUMBER,
  STRING,
  TEMPLATE_STRING,
  BOOLEAN,

  // Arithmetic
  PLUS,
  MINUS,
  MULTIPLY,
  DIVIDE,
  MODULO, // %
  POWER, // **
  INCREMENT, // ++
  DECREMENT, // ---

  // Assignment
  ASSIGN, // =
  PLUS_ASSIGN,
  MINUS_ASSIGN,
  MULTIPLY_ASSIGN,
  DIVIDE_ASSIGN,
  MODULO_ASSIGN,
  AND_ASSIGN, // &&=
  OR_ASSIGN, // ||=
  NULLISH_ASSIGN, // ??=

  // Comparison
  EQUAL, // ==
  STRICT_EQUAL,
  NOT_EQUAL,
  STRICT_NOT_EQUAL,
  GREATER_THAN,
  LESS_THAN,
  GREATER_THAN_EQUAL,
  LESS_THAN_EQUAL,

  // Logical
  AND,
  OR,
  NOT,
  NULLISH,

  // Bitwise
  BITWISE_AND,
  BITWISE_OR,
  BITWISE_NOT,

  // Special
  ARROW,
  TERNARY,
  OPTIONAL_CHAIN,

  // Delimiters
  LEFT_PAREN,
  RIGHT_PAREN,
  LEFT_BRACE,
  RIGHT_BRACE,
  LEFT_SQUARE_BRACE,
  RIGHT_SQUARE_BRACE,
  COMMA,
  COLON,
  SEMICOLON,
  DOT,

  // Misc
  COMMENT,
  EOF,
}

// ─────────────────────────────────────────────────────────────
// TokenType v2 — Raspberry Language (planned additions)
// These are NOT in v1 yet. We'll add these when building v2.
// ─────────────────────────────────────────────────────────────
export enum TokenType2 {
  // ── OOP Keywords ──────────────────────────────────────────
  CLASS, // class declaration
  NEW, // create instance
  THIS, // refers to current object
  EXTENDS, // inheritance
  SUPER, // call parent class
  STATIC, // static method/property
  PRIVATE, // private field
  PUBLIC, // public field

  // ── Module Keywords ───────────────────────────────────────
  IMPORT, // import from other files
  EXPORT, // export from current file
  DEFAULT, // export default

  // ── Async Keywords ────────────────────────────────────────
  ASYNC, // async function
  AWAIT, // await a promise
  YIELD, // yield in generator

  // ── Error Handling ────────────────────────────────────────
  TRY, // try block
  CATCH, // catch error
  FINALLY, // finally block
  THROW, // throw an error

  // ── Type System (if Raspberry gets types) ─────────────────
  TYPE, // type alias
  INTERFACE, // interface declaration
  TYPEOF, // typeof check
  INSTANCEOF, // instanceof check
  IN, // "in" operator (key in object)
  OF, // "of" in for...of loops

  // ── Extra Loop Types ──────────────────────────────────────
  WHILE, // while loop
  FOR, // for loop
  DO, // do...while loop

  // ── Bitwise Shift Operators ───────────────────────────────
  LEFT_SHIFT, //
  RIGHT_SHIFT, // >>
  UNSIGNED_RIGHT_SHIFT, // >>>

  // ── Bitwise Assignment ────────────────────────────────────
  BITWISE_AND_ASSIGN, // &=
  BITWISE_OR_ASSIGN, // |=
  BITWISE_XOR_ASSIGN, // ^=
  LEFT_SHIFT_ASSIGN, // <<=
  RIGHT_SHIFT_ASSIGN, // >>=

  // ── Extra Operators ───────────────────────────────────────
  BITWISE_XOR, // ^
  SPREAD, // ...
  VOID, // void operator
  DELETE, // delete property

  // ── Regex ─────────────────────────────────────────────────
  REGEX, // /pattern/flags
}
