// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchAllUsers = createAsyncThunk(
//   "users/fetchAllUsers",
//   async () => {
//     const response = await axios.get("http://localhost:8080/users/all");
//     return response.data;
//   }
// );

// const initialState = {
//   value: 0,
// };

// export const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder
//       .addCase(fetchAllUsers.pending, (state, action) => {
//         // Add user to the state array
//         state.entities.push(action.payload);
//       })
//       .addCase(fetchAllUsers.fulfilled, (state, action) => {
//         // Add user to the state array
//         state.entities.push(action.payload);
//       })
//       .addCase(fetchAllUsers.rejected, (state, action) => {
//         // Add user to the state array
//         state.entities.push(action.payload);
//       });
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// export default counterSlice.reducer;
