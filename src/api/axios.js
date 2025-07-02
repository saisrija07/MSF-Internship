import axios from "axios";

const apiClient = axios.create({
  baseURL: "/api", // Vite will proxy to backend (https://quick-deliver-lite.onrender.com)
  // baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Automatically attach token to all requests
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
