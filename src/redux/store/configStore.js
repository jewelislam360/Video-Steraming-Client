import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice/authSlice";
import api from "../api/api";
import paymentSlice from "../features/payment/paymentSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer,
    payment: paymentSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});

export default store;
