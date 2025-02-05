import { createAction } from "@reduxjs/toolkit";

export const setFontSize = createAction<number>("SET_FONT_SIZE");
export const setBgColor = createAction<string>("SET_BG_COLOR");
