import { createReducer } from "@reduxjs/toolkit";
import { redoHistory, setHistory, undoHistory } from "./historyAction";
import { Node } from "reactflow";

export interface IHistoryState {
  past: Node[];
  present: Node | null;
  future: Node[];
}

const initialState: IHistoryState = {
  past: [],
  present: null,
  future: [],
};

export const historyReducer = createReducer<IHistoryState>(
  initialState,
  (builder) => {
    builder
      .addCase(setHistory, (state, action) => {
        if (state.present) {
          state.past.push(state.present); // Save current state in past before updating
        }
        state.present = action.payload;
        state.future = []; // Clear future on new action
      })
      .addCase(undoHistory, (state) => {
        if (state.past.length > 0) {
          const previous = state.past.pop()!;
          if (state.present) {
            state.future.unshift(state.present); // adding present data into future through unshift
          }
          state.present = previous; // updating present with last data of past array
        }
      })
      .addCase(redoHistory, (state) => {
        if (state.future.length > 0) {
          const next = state.future.shift()!; // extractin first data from future array to update the present
          if (state.present) {
            state.past.push(state.present); // updating past
          }
          state.present = next; // updating present with first data of future array
        }
      });
  }
);
