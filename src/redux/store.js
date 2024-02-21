import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import authRegisterReducer from "./slices/registerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    auth_register: authRegisterReducer,
  },
});

export default store;
