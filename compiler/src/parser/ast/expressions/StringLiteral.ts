import { NodeKind } from "../NodeKind";
import { Expression } from "./Expression";

export interface StringLiteral extends Expression {
  kind: NodeKind.STRING_LITERAL;
  value: string;
}
