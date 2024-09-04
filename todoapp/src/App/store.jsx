import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/Counter"; // Import the updated counterSlice
import authReducer from "../Features/Counter/AuthSlice";
import listReducer from "../Features/Counter/ListSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Use the correct reducer for counter
    auth: authReducer,
    lists: listReducer,
  },
});
