import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../Projects/Redux-Counter-App/counterSlice";

export const store = configureStore({
  reducer: {
    show: showReducer,
  },
});
