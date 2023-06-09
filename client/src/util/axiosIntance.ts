import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',

  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
