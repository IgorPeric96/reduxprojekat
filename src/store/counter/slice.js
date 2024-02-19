import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    addAmount: (state, action) => {
      console.log({ action });

      state.value += action.payload;
    },
  },
});

console.log(counterSlice.actions);

export const { increment, reset, decrement, addAmount } = counterSlice.actions;

export default counterSlice.reducer;
