import { createSlice } from "@reduxjs/toolkit";

const circleTimerSlice = createSlice({
    name: "circleTimer",
    initialState: {
        animate: false,
        duration: 25,
    },
    reducers: {
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
    }
});

export const { setDuration } = circleTimerSlice.actions;

export default circleTimerSlice.reducer;