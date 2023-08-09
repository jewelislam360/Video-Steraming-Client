import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++;
    },
    deccrement: (state, action) => {
      state.count--;
    },
  },
});

export default counterSlice;
export const {increment,deccrement}=counterSlice.actions;


