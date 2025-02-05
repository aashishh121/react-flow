import { createReducer } from "@reduxjs/toolkit";
import { setBgColor, setFontSize } from "./nodestylingAction";

/// this is module is not being used in this app

export interface IStlyeNode {
  bgColor: string;
  fontSize: number;
}

const initialState: IStlyeNode = {
  bgColor: "#ffffff",
  fontSize: 12,
};

export const nodeStyleReducer = createReducer<IStlyeNode>(
  initialState,
  (builder) => {
    builder.addCase(setFontSize, (state, action) => ({
      ...state,
      fontSize: action.payload,
    }));
    builder.addCase(setBgColor, (state, action) => ({
      ...state,
      bgColor: action.payload,
    }));
  }
);
