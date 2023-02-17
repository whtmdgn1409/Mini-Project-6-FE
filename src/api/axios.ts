import { AxiosError } from 'axios';
import { request } from './core/api';

//니장바구니
export const fetchCartList = async (): Promise<any> => {
  return await request('/mypage/cart', {
    method: 'get',
  });
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