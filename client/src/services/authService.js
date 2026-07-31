import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
});

export const register = (data) => API.post("/register", data);

export const login = (data) => API.post("/login", data);

export const verifyOTP = (data) => API.post("/verify-otp", data);

export default API;