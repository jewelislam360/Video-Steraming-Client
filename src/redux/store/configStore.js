import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";

const store = configureStore({
  reducer: { count: counterSlice.reducer },
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(),
});

export default store;
