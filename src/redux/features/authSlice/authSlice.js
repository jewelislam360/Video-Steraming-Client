import { createSlice } from "@reduxjs/toolkit";
import { createUserEmailPass, googleLog, loginEmailPass } from "./authThunk";

const initialState = {
  user: "hallo",
  loading: true,
  error: "",
  isError: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUserEmailPass.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(googleLog.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(loginEmailPass.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice;
