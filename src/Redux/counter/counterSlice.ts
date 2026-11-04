import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface initialState {
  value: number;
}

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const selectValue = (state: RootState) => state.counter.value;

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
