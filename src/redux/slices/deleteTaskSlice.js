import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../setup/axios";

export const deleteTask = createAsyncThunk("task/update", async ({ id }) => {
  const response = await axios.delete("/api/v1/task/delete", {
    data: { id: id },
  });
  return response;
});

const initialState = {
  deleteTaskResults: [],
  isLoading: false,
  isError: false,
};

export const deleteTaskSlice = createSlice({
  name: "task_delete",
  initialState,
  reducers: {
    clearDeleteTaskResults: (state) => {
      state.deleteTaskResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteTask.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.deleteTaskResults = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearDeleteTaskResults } = deleteTaskSlice.actions;

export default deleteTaskSlice.reducer;
