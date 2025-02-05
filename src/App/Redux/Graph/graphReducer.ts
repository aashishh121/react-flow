import { createReducer } from "@reduxjs/toolkit";
import { addGraphNode, setGraphEdges, setGraphNodes } from "./graphAction";
import { initialNodes, initialEdges } from "../../Utils/NodeAndEdges";
import { type Node, type Edge } from "reactflow";

export interface IGraph {
  nodesData: Node[];
  edgesData: Edge[];
}

const initialState: IGraph = {
  nodesData: [...initialNodes],
  edgesData: [...initialEdges],
};

export const graphReducer = createReducer<IGraph>(initialState, (builder) => {
  builder.addCase(setGraphNodes, (state, action) => ({
    ...state,
    nodesData: action.payload,
  }));
  builder.addCase(setGraphEdges, (state, action) => ({
    ...state,
    edgesData: action.payload,
  }));
  builder.addCase(addGraphNode, (state, action) => {
    state.nodesData.push(action.payload);
  });
});
