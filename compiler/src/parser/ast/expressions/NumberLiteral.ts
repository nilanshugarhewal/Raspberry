import { NodeKind } from "../NodeKind";
import { Expression } from "./Expression";

export interface NumberLiteral extends Expression {
  kind: NodeKind.NUMBER_LITERAL;
  value: number;
}
