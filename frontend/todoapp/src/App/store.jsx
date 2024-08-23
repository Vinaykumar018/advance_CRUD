import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/CounterSlice'
import authReducer from '../Features/Counter/AuthSlice'
import listReducer from "../Features/Counter/ListSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    lists: listReducer,
  },
});