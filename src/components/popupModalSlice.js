import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: "popup",
    initialState: {
        showCircle: true,
        pomoTime: 25, 
        shortBreak: 5, 
        longBreak: 15,
    },
    reducers: {
        setShowCircle: (state, action) => {
            state.showCircle = action.payload;
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
    }
});

export const { setPomoTime, setShortBreak, setLongBreak } = popupSlice.actions;

export default popupSlice.reducer;