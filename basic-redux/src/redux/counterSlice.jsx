import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    incrementByValue: (state, { payload }) => {
      state.value = state.value + payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
