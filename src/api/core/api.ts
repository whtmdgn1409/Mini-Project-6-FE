import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://99020166-2fab-4e82-b4e8-fe3d37d48d7d.mock.pstmn.io',
  headers: {
    'content-type': 'application/json',
  },
};

export const request = axios.create(axiosConfig);
