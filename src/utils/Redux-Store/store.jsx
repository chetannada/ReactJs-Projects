import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../../Redux-Counter-App/counterSlice";

export const store = configureStore({
  reducer: {
    show: showReducer,
  },
});
