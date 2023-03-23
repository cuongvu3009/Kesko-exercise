import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://shiny-newt-tunic.cyclic.app/api/v1',

  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
