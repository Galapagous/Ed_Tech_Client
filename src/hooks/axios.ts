import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_BACKEND_BASE_URL;

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    // 'Content-Type': 'application/json',
  },
});
