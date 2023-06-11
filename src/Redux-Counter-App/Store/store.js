import { configureStore } from "@reduxjs/toolkit";
import showReducer  from "../features/counterSlice";

export const store = configureStore({
    reducer: {
        show: showReducer,
    },
})