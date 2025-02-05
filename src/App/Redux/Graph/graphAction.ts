import { createAction } from "@reduxjs/toolkit";
import { Edge, Node } from "reactflow";

export const setGraphNodes = createAction<Node[]>("SET_GRAPH_NODES");

export const setGraphEdges = createAction<Edge[]>("SET_GRAPH_EDGES");
