import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:4000"
      : "https://your-production-backend.com",
  withCredentials: true, // optional (cookies / auth send along with axios)
});
