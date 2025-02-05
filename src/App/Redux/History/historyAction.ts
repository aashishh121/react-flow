import { createAction } from "@reduxjs/toolkit";

import { Node } from "reactflow";

export const setHistory = createAction<Node>("SET_HISTORY");
export const undoHistory = createAction("UNDO_HISTORY");
export const redoHistory = createAction("REDO_HISTORY");
