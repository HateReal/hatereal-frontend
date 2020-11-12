import {
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import {
  counterReducer,
} from "./counter";

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
