// This file contains all the utility functions used to find if a character is a letter, a digit, or alphanumeric. 

// Check if the character is a letter.
export function isLetter(char: string): boolean {
  return /^[a-zA-Z_]$/.test(char);
}

// Check if the character is a digit.
export function isDigit(char: string): boolean {
  return /^[0-9]$/.test(char);
}

// Check if the character is alphanumeric.
export function isAlphaNumeric(char: string): boolean {
  return isLetter(char) || isDigit(char);
}
