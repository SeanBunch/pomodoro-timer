import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./components/popupModalSlice";
import circleTimerSlice from "./components/circleTimerSlice";

export const store = configureStore({
    reducer: {
        circleTimer: circleTimerSlice,
    },
});

