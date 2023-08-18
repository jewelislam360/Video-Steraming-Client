import { createSlice } from "@reduxjs/toolkit";
import { createUserEmailPass, googleLog, loginEmailPass } from "./authThunk";

const initialState = {
  user: "",
  actionName: "",
  loading: true,
  error: "",
  isError: false,
  isLoginSuccess: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.error = "";
      state.isError = false;
      state.loading = false;
      state.user = action.payload;
    },
    errorEmty: (state, action) => {
      state.error = "";
      state.isError = false;
      state.loading = false;
      state.user = "";
      state.actionName = "";
    },
    setIsLoginSuccess: (state, action) => {
      state.error = "";
      state.isError = false;
      state.loading = false;
      state.user = "";
      state.isLoginSuccess = false;
      state.actionName = "";
    },
  },
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
        state.actionName = action.type;
        state.isLoginSuccess = true;
      })
      .addCase(createUserEmailPass.rejected, (state, action) => {
        state.user = "";
        state.error = action.error.message;
        state.isError = true;
        state.loading = false;
        state.actionName = action.type;
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
        state.actionName = action.type;
        state.isLoginSuccess = true;
      })
      .addCase(googleLog.rejected, (state, action) => {
        state.user = "";
        state.error = action.error.message;
        state.isError = true;
        state.loading = false;
        state.actionName = action.type;
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
        state.actionName = action.type;
        state.isLoginSuccess = true;
      })
      .addCase(loginEmailPass.rejected, (state, action) => {
        state.user = "";
        state.error = action.error.message;
        state.isError = true;
        state.loading = false;
        state.actionName = action.type;
      });
  },
});

export const { setUser, errorEmty, setIsLoginSuccess } = authSlice.actions;
export default authSlice;