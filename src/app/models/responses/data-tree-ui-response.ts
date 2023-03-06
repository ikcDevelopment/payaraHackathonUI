import { DataTreeNodeUi } from "./data-tree-node-ui";
import { StandardResponse } from "./standard-response";

export interface DataTreeUiResponse extends StandardResponse {
  nodes: DataTreeNodeUi[];
}
