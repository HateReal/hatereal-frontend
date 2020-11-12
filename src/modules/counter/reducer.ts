import {
  createReducer,
} from "@reduxjs/toolkit";
import {
  decrease,
  increase,
  reset,
} from "./action";
import {
  CouterState,
} from "./type";

const initialState: CouterState = {
  value: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(increase, (state, action) => {
      state.value += 1;
    })
    .addCase(decrease, (state, action) => {
      state.value -= 1;
    })
    .addCase(reset, (state, action) => {
      console.log(action);
      state.value = action.payload;
    });
});
