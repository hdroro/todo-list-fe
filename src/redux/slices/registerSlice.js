import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../setup/axios";

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, username, password, fullname }) => {
    const response = await axios.post("/api/v1/register", {
      email,
      username,
      password,
      fullname,
    });
    return response;
  }
);

const initialState = {
  registerInfo: {},
  isLoading: false,
  isError: false,
};

export const authRegisterSlice = createSlice({
  name: "auth_register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerInfo = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default authRegisterSlice.reducer;
