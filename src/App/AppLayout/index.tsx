import { ReactFlowProvider, useReactFlow } from "reactflow";
import ReactFlowComponent from "../GraphContainer/ReactFlowComponent";

function AppLayout() {
  return (
    <>
      <ReactFlowProvider>
        <ReactFlowComponent />
      </ReactFlowProvider>
    </>
  );
}

export default AppLayout;
