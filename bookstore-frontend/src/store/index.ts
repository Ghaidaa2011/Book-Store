import { configureStore } from "@reduxjs/toolkit";
import books from "./bookSlice";

const store = configureStore({
  reducer: {
    books,
  }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export {store};