import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../setup/axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ valueLogin, password }) => {
    const response = await axios.post("/api/v1/login", {
      valueLogin,
      password,
    });
    return response;
  }
);

const initialState = {
  userInfo: {},
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default authSlice.reducer;
