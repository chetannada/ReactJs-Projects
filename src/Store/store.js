import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Projects/Redux-Counter-App/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
