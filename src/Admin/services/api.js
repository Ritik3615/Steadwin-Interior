import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Add Authorization header if token exists
api.interceptors.request.use((config) => {
  const auth = localStorage.getItem("auth");

  if (auth) {
    const token = JSON.parse(auth).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
