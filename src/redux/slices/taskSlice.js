import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../setup/axios";

export const fetchTaskToday = createAsyncThunk(
  "task/read-today",
  async (idUser) => {
    const response = await axios.get("/api/v1/task/read-today", {
      params: { idUser },
    });
    return response.DT;
  }
);

const initialState = {
  listTasksToday: [],
  isLoading: false,
  isError: false,
};

export const taskTodaySlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskToday.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTaskToday.fulfilled, (state, action) => {
        state.listTasksToday = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchTaskToday.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default taskTodaySlice.reducer;
