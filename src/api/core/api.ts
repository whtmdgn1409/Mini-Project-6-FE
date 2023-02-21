import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://13.125.92.217:8080',
  headers: {
    'content-type': 'application/json',
  },
};

export const request = axios.create(axiosConfig);
