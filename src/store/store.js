import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../utils/todoSlice";

export const store = configureStore({
  reducer: {
    alltodos: todoReducer,
  },
});
