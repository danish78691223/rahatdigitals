import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add auth token (if login system exists)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Debugging: Log all requests (helps during development)
API.interceptors.request.use((config) => {
  console.log("📤 API Request:", config.method.toUpperCase(), config.url, config.data);
  return config;
});

export default API;
