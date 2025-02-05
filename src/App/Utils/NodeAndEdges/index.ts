import { type Node, type Edge } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 50, y: 20 },

    data: {
      label: "Node 1",
      color: "",
      fontSize: 12,
    },
    type: "custom-node",
  },
  {
    id: "2",
    position: { x: 250, y: 20 },
    data: { label: "Node 2", color: "", fontSize: 12 },
    type: "custom-node",
  },
  {
    id: "3",
    position: { x: 250, y: 80 },
    data: { label: "Node 3", color: "", fontSize: 12 },
    type: "custom-node",
  },
  {
    id: "4",
    position: { x: 250, y: 200 },
    data: { label: "Node 4", color: "", fontSize: 12 },
    type: "custom-node",
  },
  {
    id: "5",
    position: { x: 350, y: 300 },
    data: { label: "Node 5", color: "", fontSize: 12 },
    type: "custom-node",
  },
  {
    id: "6",
    position: { x: 550, y: 200 },
    data: { label: "Node 6", color: "", fontSize: 12 },
    type: "custom-node",
  },
  {
    id: "7",
    position: { x: 650, y: 400 },
    data: { label: "Node 7", color: "", fontSize: 12 },
    type: "custom-node",
  },
  {
    id: "8",
    position: { x: 750, y: 500 },
    data: { label: "Node 8", color: "", fontSize: 12 },
    type: "custom-node",
  },
  {
    id: "9",
    position: { x: 850, y: 400 },
    data: { label: "Node 9", color: "", fontSize: 12 },
    type: "custom-node",
  },
  {
    id: "10",
    position: { x: 950, y: 200 },
    data: { label: "Node 10", color: "", fontSize: 12 },
    type: "custom-node",
  },
];

export const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "2", target: "3" },
  { id: "e1-4", source: "4", target: "5", animated: true },
  { id: "e1-5", source: "3", target: "6" },
  { id: "e1-6", source: "7", target: "8" },
  { id: "e1-7", source: "8", target: "9" },
  { id: "e1-8", source: "9", target: "10" },
  { id: "e1-9", source: "6", target: "7" },
];
