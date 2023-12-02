import { createSlice } from "@reduxjs/toolkit";
import { resetFinalProject } from "./actions";

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 5;
      if (state.count > 200) {
        state.count = 200;
      }
    },
    decrement: (state) => {
      state.count -= 1;
      if (state.count < 0) {
        state.count = 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetFinalProject, (state) => {
      state.count = 0;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
