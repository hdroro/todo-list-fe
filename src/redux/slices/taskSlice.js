// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "../../setup/axios";

// export const fetchAllUsers = createAsyncThunk("task/add-task", async () => {
//   const response = await axios.get("/api/v1/login");
//   return response.data;
// });

// const initialState = {
//   listUsers: [],
//   isLoading: false,
//   isError: false,
// };

// export const userSlice = createSlice({
//   name: "task",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllUsers.pending, (state, action) => {
//         state.isLoading = true;
//         state.isError = false;
//       })
//       .addCase(fetchAllUsers.fulfilled, (state, action) => {
//         state.listUsers = action.payload;
//         state.isLoading = false;
//         state.isError = false;
//       })
//       .addCase(fetchAllUsers.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//       });
//   },
// });

// export default userSlice.reducer;
