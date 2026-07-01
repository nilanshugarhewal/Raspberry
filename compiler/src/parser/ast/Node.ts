import { NodeKind } from "./NodeKind";

export interface Node {
  kind: NodeKind;
  line: number;
  startIndex: number;
  endIndex: number;
}
