import { NodeToolbar, Handle, Position } from "reactflow";
import ColorPicker from "../ColorPicker";
import FontSizeControl from "../FontSizeControl";
import { useCallback } from "react";

const NodeWithToolbar = ({ data }: any) => {
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
        className="flex justify-between"
        isVisible={data.isToolbarVisible}
        position={Position.Bottom}
      >
        <ColorPicker
          color={data.color || "#ffffff"}
          onColorChange={onColorChange}
        />

        <FontSizeControl
          fontSize={data.fontSize || 12}
          onFontSizeChange={onFontSizeChange}
        />
      </NodeToolbar>

      {/* Connection Handles */}
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default NodeWithToolbar;
