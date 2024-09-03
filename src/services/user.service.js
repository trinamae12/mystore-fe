import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:80/api/";

const getUsers = () => {
    console.log("headers", authHeader());
  return axios.get(API_URL + "users", { headers: authHeader() });
};

const getUser = (id) => {
    console.log("id", id);
    return axios.get(API_URL + "user/" + id, { headers: authHeader() })
}

// const getUserBoard = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

export default {
  getUsers,
  getUser,
};