import axios from "axios";

const API = axios.create({
  baseURL: "https://loginsystem-pch9.onrender.com/api/auth",
});

export const register = (data) => API.post("/register", data);

export const login = (data) => API.post("/login", data);

export const verifyOTP = (data) => API.post("/verify-otp", data);

export default API;