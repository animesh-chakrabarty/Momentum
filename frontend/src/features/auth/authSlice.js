import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCredentials: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredential: (state, action) => {
      state.userCredentials = action.payload;
    },
  },
});

export const { setUserCredential } = authSlice.actions;
export default authSlice.reducer;
