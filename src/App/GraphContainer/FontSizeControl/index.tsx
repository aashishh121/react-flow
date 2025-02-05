import { debouncing } from "../../Utils/HelperFunctions";

interface IFontSize {
  fontSize: number;
  onFontSizeChange: (newFontSize: number, isStop: boolean) => void;
}

type fontType = "incr" | "decr";

function FontSizeControl({ fontSize, onFontSizeChange }: IFontSize) {
  const handleOnChange = (type: fontType) => {
    if (type == "incr" && fontSize < 24) {
      onFontSizeChange(fontSize + 1, false);

      const debounce = debouncing(onFontSizeChange, 300);
      debounce(fontSize + 1, true); // debouncing is used for the last update in history stack
    } else if (type == "decr" && fontSize > 12) {
      onFontSizeChange(fontSize - 1, false);

      const debounce = debouncing(onFontSizeChange, 300);
      debounce(fontSize - 1, true);
    }
  };
  return (
    <>
      {/* input was not working here
      <input
        type="number"
        // defaultValue={size}
        // value={fontSize}
        // onChange={(e) => onChange(e)}
        className="w-12 border-2 outline-none rounded"
        max={24}
        min={12}
      /> */}
      <div className="flex border rounded  px-2">
        <div className="pr-2"> {fontSize}</div>
        <div className="flex border-l-2">
          <div
            className="hover:cursor-pointer"
            onClick={() => handleOnChange("incr")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() => handleOnChange("decr")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-minus"
            >
              <path d="M5 12h14" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default FontSizeControl;
