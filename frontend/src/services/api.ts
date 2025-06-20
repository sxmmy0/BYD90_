import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('accessToken');
  if (token && req.headers) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

export const fetchProfile = async () => {
  const res = await API.get('auth/profile/');
  return res.data;
};
