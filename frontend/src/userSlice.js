import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      isAuthenticated: false,
      authUser: null,
    },
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.value.isAuthenticated = action.payload;
    },
    setAuthUser: (state, action) => {
      state.value.authUser = action.payload;
    },
  },
});

export const { setIsAuthenticated, setAuthUser } = userSlice.actions;
export default userSlice.reducer;
