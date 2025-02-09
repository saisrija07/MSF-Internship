import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001", // JSON server or FastAPI URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
