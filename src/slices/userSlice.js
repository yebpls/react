import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async actions
// VD: dispatch(getUser("danndz"))
export const getUser = createAsyncThunk(
  "user/get_user", // action type
  async (username, { dispatch, getState }) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );

      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // Dùng extraReducers để bắt và xử lý các actions được dispatch từ createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      return { ...state, isLoading: true, error: null };
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      return { ...state, user: action.payload, isLoading: false };
    });

    builder.addCase(getUser.rejected, (state, action) => {
      return { ...state, error: action.error.message, isLoading: false };
    });
  },
});

export default userSlice.reducer;
