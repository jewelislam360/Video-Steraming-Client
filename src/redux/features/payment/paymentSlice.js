import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usd: 0,
  subsType: "",
};

const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState,
  reducers: {
    payment: (state, action) => {
      state.usd = action.payload.usd;
      state.subsType = action.payload.subsType;
    },
  },
});

export const { payment } = paymentSlice.actions;
export default paymentSlice;
