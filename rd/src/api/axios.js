import axios from "axios";

const API = axios.create({
  baseURL: "https://rahatdigitals-backend.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token (admin authentication)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Debug Log
API.interceptors.request.use((config) => {
  console.log("📤 API Request:", config.method.toUpperCase(), config.url, config.data);
  return config;
});

export default API;
