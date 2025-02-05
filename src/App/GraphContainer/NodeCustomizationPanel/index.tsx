import { NodeToolbar, Handle, Position } from "reactflow";
import ColorPicker from "../ColorPicker";
import FontSizeControl from "../FontSizeControl";
import { useCallback, useState } from "react";

const NodeWithToolbar = ({ data }: any) => {
  const [lableVal, setLabelVal] = useState("");

  const onColorChange = useCallback(
    (color: string, isStop: boolean) => {
      data.onUpdateNode({ color }, isStop);
    },
    [data]
  );
  const onFontSizeChange = useCallback(
    (fontSize: number, isStop: boolean) => {
      data.onUpdateNode({ fontSize }, isStop);
    },
    [data]
  );

  const onLabelChange = () => {
    if (lableVal !== "") {
      data.onUpdateNode({ label: lableVal }, true);
    }
  };

  return (
    <div
      className="flex text-black p-2 bg-white border rounded shadow-md"
      style={{
        backgroundColor: data?.color || "#ffffff",
        fontSize: data?.fontSize || 12,
      }}
    >
      {data.label}

      <NodeToolbar
        className=" border p-1 gap-1 rounded border-gray-400"
        isVisible={data.isToolbarVisible}
        position={Position.Bottom}
      >
        <div className="flex justify-between mb-2">
          <ColorPicker
            color={data.color || "#ffffff"}
            onColorChange={onColorChange}
          />

          <FontSizeControl
            fontSize={data.fontSize || 12}
            onFontSizeChange={onFontSizeChange}
          />
        </div>
        <div>
          <input
            className="pl-2 w-36"
            type="text"
            placeholder="Edit label..."
            onChange={(e) => setLabelVal(e.target.value)}
          />
          <button className="border rounded p-1 ml-2" onClick={onLabelChange}>
            Save
          </button>
        </div>
      </NodeToolbar>

      {/* Connection Handles */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default NodeWithToolbar;
