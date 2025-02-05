import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import {
  addEdge,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Node,
  type Edge,
  Background,
  Controls,
  Connection,
  Panel,
  useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { IGraph } from "../../Redux/Graph/graphReducer";
import { setGraphNodes } from "../../Redux/Graph/graphAction";
import NodeCustomizationPanel from "../NodeCustomizationPanel";
import UndoRedoControls from "../UndoRedoControls";
import { setHistory } from "../../Redux/History/historyAction";

const nodeTypes = {
  "custom-node": NodeCustomizationPanel,
};

function ReactFlowComponent() {
  const { fitView } = useReactFlow();
  const dispatch = useDispatch();
  const storeData = useSelector((store: RootState) => store);
  const graphData: IGraph = storeData.graph;
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(
    graphData?.nodesData
  );
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(
    graphData?.edgesData
  );
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [dragStartNodeId, setDragStartNodeId] = useState<{
    id: string;
    pos: { x: number; y: number };
  }>({ id: "", pos: { x: 0, y: 0 } });

  const handleResize = useCallback(() => {
    fitView({ duration: 300 });
  }, [fitView]);

  // this useEffect handling responsiveness
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // this useEffect updating nodes state in redux
  useEffect(() => {
    dispatch(setGraphNodes(nodes));
  }, [nodes]);

  // this useEffect handling render nodes from history stack
  useEffect(() => {
    const presentData = storeData.history.present;
    console.log(presentData, "data");
    if (presentData) {
      setNodes((nodes) =>
        nodes.map((obj) =>
          obj.id === presentData?.id
            ? {
                ...obj,
                position: {
                  ...obj.position,
                  x: presentData?.position.x,
                  y: presentData?.position.y,
                },
                data: {
                  ...obj.data,
                  color: presentData?.data.color,
                  fontSize: presentData?.data.fontSize,
                },
              }
            : obj
        )
      );
    }
  }, [storeData.history.present]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((e: React.MouseEvent, node: Node) => {
    setSelectedNode(node.id);
  }, []);

  const onUpdateNode = useCallback(
    (
      updates: Partial<{ color: string; fontSize: number }>,
      isStop: boolean = false
    ) => {
      let updateData;
      setNodes((nodes) =>
        nodes.map((node) => {
          if (node.id === selectedNode) {
            updateData = {
              ...node,
              data: { ...node.data, ...updates },
            };
            return updateData;
          } else {
            return node;
          }
        })
      );
      if (isStop && updateData) {
        dispatch(setHistory(updateData));
      }
    },
    [selectedNode]
  );

  const handleNodeDragStart = useCallback(
    (event: React.MouseEvent, node: Node) => {
      if (dragStartNodeId?.id !== node.id) {
        dispatch(setHistory(node));
      }

      setDragStartNodeId({
        id: node.id,
        pos: { x: node.position.x, y: node.position.y },
      });
    },
    [nodes]
  );

  const handleNodeDragStop = useCallback(
    (event: React.MouseEvent, node: Node) => {
      if (
        dragStartNodeId.id == node.id &&
        (dragStartNodeId.pos.x !== node.position.x ||
          dragStartNodeId.pos.y !== node.position.y)
      ) {
        setDragStartNodeId({
          id: node.id,
          pos: { x: node.position.x, y: node.position.y },
        });
        dispatch(setHistory(node));
      }
    },
    [nodes]
  );

  // this script is used to add onUpdateNode method in each node data
  // so that we can update node such as changing color or text through onUpdateNode method
  const updatedNodes = nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      onUpdateNode,
      isToolbarVisible: node.id === selectedNode,
    },
  }));

  return (
    <>
      <div className=" w-screen h-screen">
        <ReactFlow
          nodes={updatedNodes}
          edges={edges}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onNodeDragStart={handleNodeDragStart}
          onNodeDragStop={handleNodeDragStop}
          nodeTypes={nodeTypes}
          fitView
        >
          <Panel position={"top-right"}>
            <UndoRedoControls />
          </Panel>
          <Controls />
          <Background />
        </ReactFlow>
        {/* <div
          className="absolute z-10"
          style={{
            top: customizationPanel.y,
            left: customizationPanel.x,
          }}
        >
          {selectedNode && (
            <NodeCustomizationPanel
              color={color}
              fontSize={fontSize}
              onColorChange={onColorChange}
              onFontSizeChange={onFontSizeChange}
            />
          )}
        </div> */}
      </div>
    </>
  );
}

export default ReactFlowComponent;
