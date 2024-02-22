import { configureStore } from "@reduxjs/toolkit";
import circleTimerSlice from "./components/circleTimerSlice";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer: {
        circleTimer: circleTimerSlice,
        user: userReducer,
    },
});

