import axios from 'axios';
import {getValue} from '../utils/storage';
import {keys} from '../utils/storageKey';

const api = axios.create({
  baseURL: 'http://192.168.1.4:4000/api',
});

api.interceptors.request.use((request) => {
  request.headers.Authorization = `Bearer ${getValue(keys.TOKEN)}`;
  return request;
});

api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});
export default api;