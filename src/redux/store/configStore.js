import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice/authSlice";
import api from "../api/api";

const store = configureStore({
  reducer: { auth: authSlice.reducer, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export default store;
