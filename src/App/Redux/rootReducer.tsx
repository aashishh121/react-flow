import { combineReducers } from "redux";
import { graphReducer } from "../Redux/Graph/graphReducer";
import { nodeStyleReducer } from "./NodeStyling/nodestylingReducer";
import { historyReducer } from "./History/historyReducer";

const rootReducer = combineReducers({
  graph: graphReducer,
  style: nodeStyleReducer,
  history: historyReducer,
});

export default rootReducer;
