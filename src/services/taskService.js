import axios from "../setup/axios";

const fetchAllTasks = () => {
  return axios.get("/api/v1/task/read", {});
};

const createNewTask = (title, description, duedate, idUser) => {
  return axios.post("/api/v1/task/create", {
    title,
    description,
    duedate,
    idUser,
  });
};

export { fetchAllTasks, createNewTask };
