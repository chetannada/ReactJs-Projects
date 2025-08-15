import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/redux-counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
