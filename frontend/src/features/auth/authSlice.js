import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCredentials: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredential: (state, action) => {
      state.userCredentials = action.payload;
    },
    removeUserCredentials: (state, action) => {
      state.userCredentials = {};
    },
  },
});

export const { setUserCredential, removeUserCredentials } = authSlice.actions;
export default authSlice.reducer;
