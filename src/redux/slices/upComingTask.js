import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../setup/axios";

export const fetchTaskUpcoming = createAsyncThunk(
  "task/read-upcoming",
  async ({ date, idUser }) => {
    const response = await axios.get("/api/v1/task/read-upcoming", {
      params: { date, idUser },
    });
    return response.DT;
  }
);

const initialState = {
  listTasksUpcoming: [],
  isLoading: false,
  isError: false,
};

export const taskUpcomingSlice = createSlice({
  name: "task_upcoming",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskUpcoming.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTaskUpcoming.fulfilled, (state, action) => {
        console.log(action.payload);
        state.listTasksUpcoming = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchTaskUpcoming.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default taskUpcomingSlice.reducer;
