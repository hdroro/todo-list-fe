import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import authRegisterReducer from "./slices/registerSlice";
import taskReducer from "./slices/taskSlice";
import taskOverdueReducer from "./slices/taskOverdueSlice";
import taskCreateReducer from "./slices/addTaskSlice";
import taskUpdateReducer from "./slices/editTaskSlice";
import taskDeleteReducer from "./slices/deleteTaskSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    auth_register: authRegisterReducer,
    task: taskReducer,
    task_overdue: taskOverdueReducer,
    task_create: taskCreateReducer,
    task_update: taskUpdateReducer,
    task_delete: taskDeleteReducer,
  },
});

export default store;
