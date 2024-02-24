import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../setup/axios";

export const editTask = createAsyncThunk(
  "task/update",
  async ({ id, title, description, duedate }) => {
    const response = await axios.put("/api/v1/task/update", {
      id,
      title,
      description,
      duedate,
    });
    return response;
  }
);

const initialState = {
  editTaskResults: [],
  isLoading: false,
  isError: false,
};

export const editTaskSlice = createSlice({
  name: "task_update",
  initialState,
  reducers: {
    clearEditTaskResults: (state) => {
      state.editTaskResults = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(editTask.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.editTaskResults = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(editTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { clearEditTaskResults } = editTaskSlice.actions;

export default editTaskSlice.reducer;
