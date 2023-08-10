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
      .addCase(createUserEmailPass.pending, (state, action) => {
        state.user = "";
        state.error = "";
        state.isError = false;
        state.loading = true;
      })
      .addCase(createUserEmailPass.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
        state.isError = false;
        state.loading = false;
      })
      .addCase(createUserEmailPass.rejected, (state, action) => {
        state.user = "";
        state.error = action.error;
        state.isError = true;
        state.loading = false;
      })
      .addCase(googleLog.pending, (state, action) => {
        state.user = "";
        state.error = "";
        state.isError = false;
        state.loading = true;
      })
      .addCase(googleLog.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
        state.isError = false;
        state.loading = false;
      })
      .addCase(googleLog.rejected, (state, action) => {
        state.user = "";
        state.error = action.error;
        state.isError = true;
        state.loading = false;
      })
      .addCase(loginEmailPass.pending, (state, action) => {
        state.user = "";
        state.error = "";
        state.isError = false;
        state.loading = true;
      })
      .addCase(loginEmailPass.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
        state.isError = false;
        state.loading = false;
      })
      .addCase(loginEmailPass.fulfilled, (state, action) => {
        state.user = "";
        state.error = action.error;
        state.isError = true;
        state.loading = false;
      });
  },
});

export default authSlice;
