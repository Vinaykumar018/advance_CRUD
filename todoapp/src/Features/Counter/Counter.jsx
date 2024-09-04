import { createSlice } from "@reduxjs/toolkit";

// Define the counterSlice
const counterSlice = createSlice({
  name: "counter",
  initialState: { user: "initialUser", isLoggedIn: false }, // Initial value for user
  reducers: {
    login(state){
      state.isLoggedIn=true
    },
    logout(state){
      state.isLoggedIn=false
    }
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
