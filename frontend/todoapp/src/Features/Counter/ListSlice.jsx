import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define initial state
const initialState = {
  items: [],
  loading: false,
  error: null,
};

// Async thunk for adding a list item
export const addListItem = createAsyncThunk(
  'lists/addListItem',
  async (listItem) => {
    const response = await axios.post('/api/v1/add', listItem);
    return response.data.listData;
  }
);

// Async thunk for updating a list item
export const updateListItem = createAsyncThunk(
  'lists/updateListItem',
  async ({ id, updatedItem }) => {
    const response = await axios.put(`/api/v1/add/${id}`, updatedItem);
    return response.data.list;
  }
);

// Async thunk for deleting a list item
export const deleteListItem = createAsyncThunk(
  'lists/deleteListItem',
  async (id) => {
    await axios.delete(`/api/v1/delete/${id}`);
    return id;
  }
);

// Async thunk for fetching list items by user ID
export const fetchListItems = createAsyncThunk(
  'lists/fetchListItems',
  async (userId) => {
    const response = await axios.get(`/api/v1/get/${userId}`);
    return response.data;
  }
);

const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addListItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addListItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addListItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateListItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateListItem.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(item => item._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(updateListItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteListItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteListItem.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item._id !== action.payload);
      })
      .addCase(deleteListItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchListItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchListItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchListItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default listSlice.reducer;
