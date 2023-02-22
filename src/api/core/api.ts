import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://www.meewang.store:8080',
  headers: {
    'content-type': 'application/json',
  },
};

export const request = axios.create(axiosConfig);
