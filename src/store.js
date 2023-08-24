import { configureStore } from "@reduxjs/toolkit";
import circleTimerSlice from "./components/circleTimerSlice";

export const store = configureStore({
    reducer: {
        circleTimer: circleTimerSlice,
    },
});

