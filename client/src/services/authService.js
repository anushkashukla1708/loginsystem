import axios from "axios";

const BASE_URL = "https://loginsystem-pch9.onrender.com/api/auth";

export const register = async (data) => {
  return axios.post(`${BASE_URL}/register`, data);
};

export const login = async (data) => {
  return axios.post(`${BASE_URL}/login`, data);
};

export const verifyOTP = async (data) => {
  return axios.post(`${BASE_URL}/verify-otp`, data);
};