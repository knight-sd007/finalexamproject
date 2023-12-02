import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { decrement, increment } from "./counterSlice";

export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
  },
});

export { increment, decrement };
