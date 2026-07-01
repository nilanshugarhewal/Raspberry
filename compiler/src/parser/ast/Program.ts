import { Node } from "./Node";
import { NodeKind } from "./NodeKind";
import { Statement } from "./statements/Statement";

export interface Program extends Node {
  kind: NodeKind.PROGRAM;
  statements: Statement[];
}
