import axios from "axios";

const API_URL = "http://localhost:80/api/";

const register = (name, email, password) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
  }).then((response) => {
    console.log("register response", response);
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};