import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import authSlice from "../features/authSlice/authSlice";

const store = configureStore({
  reducer: { count: counterSlice.reducer, auth: authSlice.reducer },
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(),
});

export default store;
