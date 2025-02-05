import { useEffect, useState } from "react";
import { debouncing } from "../../Utils/HelperFunctions";

interface IColorPicker {
  color: string;
  onColorChange: (newColor: string, isStop: boolean) => void;
}

function ColorPicker({ color, onColorChange }: IColorPicker) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    onColorChange(newColor, false); // Updating Real Time

    const debounce = debouncing(onColorChange, 300);
    debounce(newColor, true); // debouncing is used for the last update in history stack
  };

  return (
    <input
      className="border rounded"
      type="color"
      id="colorpicker"
      value={color}
      onChange={handleChange}
    />
  );
}

export default ColorPicker;
