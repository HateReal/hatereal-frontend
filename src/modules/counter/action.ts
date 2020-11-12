import {
  createAction,
} from "@reduxjs/toolkit";

export const INCREASE = "counter/increase";
export const DECREASE = "counter/decrease";
export const RESET = "counter/reset";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const reset = createAction<number>(RESET);
