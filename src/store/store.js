import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/redux-counter/counterSlice";
import authSlice from "./reducers/authSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export default store;
