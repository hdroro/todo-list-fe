import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../setup/axios";

export const createNewTask = createAsyncThunk(
  "task/create",
  async ({ title, description, duedate, idUser }) => {
    console.log("title", title);
    const response = await axios.post("/api/v1/task/create", {
      title,
      description,
      duedate,
      idUser,
    });
    return response;
  }
);

const initialState = {
  createTaskResults: [],
  isLoading: false,
  isError: false,
};

export const createNewTaskSlice = createSlice({
  name: "task_create",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewTask.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createNewTask.fulfilled, (state, action) => {
        state.createTaskResults = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(createNewTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default createNewTaskSlice.reducer;
