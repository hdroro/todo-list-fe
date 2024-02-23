import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../setup/axios";

export const fetchTasksOverdue = createAsyncThunk(
  "task/read-overdue",
  async (idUser) => {
    const response = await axios.get("/api/v1/task/read-overdue", {
      params: { idUser },
    });
    return response.DT;
  }
);

const initialState = {
  listTasksOverdue: [],
  isLoading: false,
  isError: false,
};

export const taskOverdueSlice = createSlice({
  name: "task_overdue",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksOverdue.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTasksOverdue.fulfilled, (state, action) => {
        state.listTasksOverdue = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchTasksOverdue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default taskOverdueSlice.reducer;
