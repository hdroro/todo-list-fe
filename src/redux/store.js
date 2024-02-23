import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import authRegisterReducer from "./slices/registerSlice";
import taskReducer from "./slices/taskSlice";
import taskOverdueReducer from "./slices/taskOverdueSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    auth_register: authRegisterReducer,
    task: taskReducer,
    task_overdue: taskOverdueReducer,
  },
});

export default store;
