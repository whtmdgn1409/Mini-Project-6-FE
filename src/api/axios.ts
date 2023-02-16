import { AxiosError } from 'axios';
import { request } from './core/api';

// 인증
interface AuthFn {
  (
    name?: string,
    password?: string,
    email?: string,
    phone?: string,
    accessToken?: string,
  ): Promise<ResponseValue>;
}

interface ResponseValue {
  accessToken: string;
}

// 관심 상품
export type FavorType = {
  snq: string;
  baseRate: string;
  loanDescription: string;
  loanName: string;
  loanTarget: string;
  ratePercent: string;
};

export const signUp: AuthFn = async (name, password, email, phone) => {
  try {
    const res = await request('/signup', {
      method: 'post',
      data: {
        name,
        password,
        email,
        phone,
      },
    });
    console.log('res.data', res.data);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return false;
  }
};

export const getFavor = async () => {
  try {
    const res = await request('/mypage/favor', {
      method: 'GET',
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return false;
  }
};
