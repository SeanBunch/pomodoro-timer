import { configureStore } from "@reduxjs/toolkit";
import popupSlice from "./components/popupModalSlice";

export const store = configureStore({
    reducer: {
        popup: popupSlice,
    },
});

