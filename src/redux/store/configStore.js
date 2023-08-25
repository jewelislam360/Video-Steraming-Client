import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice/authSlice";
import userApi from "../api/userApi";

const store = configureStore({
  reducer: { auth: authSlice.reducer, [userApi.reducerPath]: userApi.reducer },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(userApi.middleware),
});

export default store;
