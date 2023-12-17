import axiosInstance from "./index";

function login(data) {
  return axiosInstance.post("/login", data);
}

function register(data) {
  return axiosInstance.post("/register", data);
}

const authApi = {
  login,
  register,
};

export default authApi;
