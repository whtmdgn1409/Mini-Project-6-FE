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
  token: string;
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

export interface UserDetailInfoType {
  age: string;
  bank: string;
  crdtGrad: string;
  district: string;
  income: string;
  job: string;
}

// 회원가입
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

// 로그인
export const signIn: AuthFn = async (email, password) => {
  try {
    const res = await request('/login', {
      method: 'post',
      data: {
        email,
        password,
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return false;
  }
};

// 회원 정보 조회
export const getUserInfo = async () => {
  try {
    const res = await request('/mypage/info', {
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

// 회원 추가 정보 조회
export const getUserDetailInfo = async () => {
  try {
    const res = await request('/mypage/detail/info', {
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

// 관심 상품
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
