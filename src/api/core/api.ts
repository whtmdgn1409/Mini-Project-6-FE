import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://www.meewang.store:8080',
  // baseURL: 'https://99020166-2fab-4e82-b4e8-fe3d37d48d7d.mock.pstmn.io',
  headers: {
    'content-type': 'application/json',
  },
};

export const request = axios.create(axiosConfig);

request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error.message);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error.message);
    return Promise.reject(error);
  },
);
