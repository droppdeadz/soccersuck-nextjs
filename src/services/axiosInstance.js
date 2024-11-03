// lib/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEWS_FEED || "https://example.com/api",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "pHX9SEM9IqwgC9Aplzz21JqAAPuubtlaQ5Rfu6xa",
  },
});

// Interceptors for requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Add custom config here (e.g., add authorization token)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptors for responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here (e.g., redirect to login if 401)
    if (error.response && error.response.status === 401) {
      // Handle unauthorized error
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
