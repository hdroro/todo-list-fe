import axios from "../setup/axios";

const registerNewUser = (email, phone, username, password) => {
  return axios.post("/api/v1/register", {
    email,
    phone,
    username,
    password,
  });
};

const handleUserLogin = (valueLogin, password) => {
  return axios.post("/api/v1/login", {
    valueLogin,
    password,
  });
};

const handleDeleteUser = (id) => {
  return axios.delete("/api/v1/user/delete", {
    data: { id: id },
  });
};

const handleCreateUser = (
  email,
  phone,
  username,
  password,
  address,
  gender,
  group
) => {
  return axios.post("/api/v1/user/create", {
    email,
    phone,
    username,
    password,
    address,
    gender,
    group,
  });
};

const handleUpdateUser = (id, username, address, gender, group) => {
  return axios.put("/api/v1/user/update", {
    id,
    username,
    address,
    gender,
    group,
  });
};

const getUserAccount = () => {
  return axios.get("/api/v1/account");
};
const logoutUser = () => {
  return axios.post("/api/v1/logout");
};
export {
  registerNewUser,
  handleUserLogin,
  handleDeleteUser,
  handleCreateUser,
  handleUpdateUser,
  getUserAccount,
  logoutUser,
};
