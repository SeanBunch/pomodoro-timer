import { createSlice } from "@reduxjs/toolkit";

const circleTimerSlice = createSlice({
    name: "circleTimer",
    initialState: {
        animate: false,
        duration: 25,
        pomoTime: 25,
        shortBreak: 5,
        longBreak: 15,
        keyValue: 0,
    },
    reducers: {
        setAnimate: (state, action) => {
            state.animate = action.payload;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setPomoTime: (state, action) => {
            state.pomoTime = action.payload;
        },
        setShortBreak: (state, action) => {
            state.shortBreak = action.payload;
        },
        setLongBreak: (state, action) => {
            state.longBreak = action.payload;
        },
        setKeyValue: (state, action) => {
            state.keyValue = action.payload;
        },
    },
});

export const { setAnimate, setDuration, setPomoTime, setLongBreak, setShortBreak, setKeyValue } = circleTimerSlice.actions;

export default circleTimerSlice.reducer;