import { createSlice } from "@reduxjs/toolkit";

const circleTimerSlice = createSlice({
    name: "circleTimer",
    initialState: {
        value: {
            animate: false,
            duration: 25,
            pomoTime: 25,
            shortBreak: 5,
            longBreak: 15,
            btnSelected: "pomoTime",
            keyValue: 0,
        },
    },
    reducers: {
        setAnimate: (state, action) => {
            state.value.animate = action.payload;
        },
        setDuration: (state, action) => {
            state.value.duration = action.payload;
        },
        setPomoTime: (state, action) => {
            state.value.pomoTime = action.payload;
        },
        setShortBreak: (state, action) => {
            state.value.shortBreak = action.payload;
        },
        setLongBreak: (state, action) => {
            state.value.longBreak = action.payload;
        },
        setBtnSelected: (state, action) => {
            state.value.btnSelected = action.payload;
        },
        setKeyValue: (state) => {state.value.keyValue += 1},
    },
});

export const { setAnimate, setDuration, setPomoTime, setLongBreak, setShortBreak, setBtnSelected, setKeyValue } = circleTimerSlice.actions;

export default circleTimerSlice.reducer;