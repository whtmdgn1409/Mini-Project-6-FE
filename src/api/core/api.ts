import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://fa466e8e-2ce8-447d-b2dd-517832056015.mock.pstmn.io',
  headers: {
    'content-type': 'application/json',
  },
};

export const request = axios.create(axiosConfig);
