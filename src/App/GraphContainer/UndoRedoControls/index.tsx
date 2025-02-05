import React from "react";
import { redoHistory, undoHistory } from "../../Redux/History/historyAction";
import { useDispatch } from "react-redux";

function UndoRedoControls() {
  const dispatch = useDispatch();

  const handleUndo = () => {
    dispatch(undoHistory());
  };

  const handleRedo = () => {
    dispatch(redoHistory());
  };
  return (
    <>
      <div className="flex">
        <div className="hover:cursor-pointer" onClick={handleUndo}>
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
            className="lucide lucide-undo-2"
          >
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
          </svg>
        </div>
        <div className="hover:cursor-pointer" onClick={handleRedo}>
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
            className="lucide lucide-redo-2"
          >
            <path d="m15 14 5-5-5-5" />
            <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default UndoRedoControls;
