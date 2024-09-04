// src/features/auth/authSlice.jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Set the base URL for axios
axios.defaults.baseURL = `${window.location.origin}`;

// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Async thunk for registering a user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, username }) => {
    console.log(email,password,username)
    const response = await axios.post("/api/register", {
      email,
      password,
      username,
    });
    console.log(response)
    return response.data;
  }
);

// Async thunk for logging in a user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const response = await axios.post("/api/login", { email, password });
    const id=response.data.user._id
    if(id){
    sessionStorage.setItem("id",id)
    }

    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle registration
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Changed to use action.error.message
      })
      // Handle login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Changed to use action.error.message
      });
  },
});

// Action creators
export const { logout } = authSlice.actions;

export default authSlice.reducer;
