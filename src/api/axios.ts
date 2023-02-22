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

// 장바구니 아이템 정보
export type CartType = {
  snq: number;
  loanName: string;
  loanDescription: string;
  loanTarget: string[];
  baseRate: string;
  rate: string;
};

// 회원 정보
export interface UserInfoType {
  userId: string;
  name: string;
  phone: string;
}

// 회원 추가 정보
export interface UserDetailInfoType {
  age: string;
  bank: string;
  crdtGrade: string;
  address: string;
  income: string;
  job: string;
}
// 상품리스트 정보
export interface getProductType {
  snq: string;
  loanName: string;
  loanDescription: string;
  loanTarget: string;
  baseRate: string;
  ratePercent: string;
}
export interface ProductList {
  content: getProductType[];
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

// 회원 추가 정보 입력
export const changeUserDetailInfo = async (
  age: string,
  address: string,
  job: string,
  bank: string,
  crdtGrade: string,
  income: string,
) => {
  try {
    const res = await request('/signup/detail', {
      method: 'POST',
      data: {
        age,
        address,
        job,
        bank,
        crdtGrade,
        income,
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

// 회원 확인
export const checkUser = async (password: string) => {
  try {
    const res = await request('/mypage/check', {
      method: 'POST',
      data: {
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

// 회원 정보 수정
export const changeUserInfo = async (phone: string, password: string) => {
  try {
    const res = await request('/mypage/member', {
      method: 'PUT',
      data: {
        phone,
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

// 관심 상품 조회
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

// 관심 상품 삭제
export const deleteFavor = async (snq: string) => {
  try {
    const res = await request('/favor', {
      method: 'DELETE',
      data: {
        snq,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return false;
  }
};
// 장바구니 추가
export const addCartList = async (snq: string) => {
  try {
    const res = await request('/cart', {
      method: 'POST',
      data: {
        snq,
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
// 장바구니 조회
export const getCartList = async (): Promise<CartType[]> => {
  const res = await request('/mypage/cart', {
    method: 'get',
  });
  return res.data;
};

// 장바구니 삭제
export const deleteCart = async (snq: number) => {
  const res = await request('/cart', {
    method: 'DELETE',
    data: {
      snq,
    },
  });
  return res.data;
};

// 상세 정보
export const getProductDetail = async () => {
  try {
    const res = await request('/finance/loan/detail?snq=1', {
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

// 상품 리스트
export const getProduct = async (): Promise<any> => {
  try {
    const res = await request('/finance/loan/', {
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

// 로그인 시 추천상품 리스트
export const memberRecommend = async (): Promise<any> => {
  try {
    const res = await request('/finance/member/recommend/loan', {
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

export const nomemberRecommend = async (): Promise<any> => {
  try {
    const res = await request('/finance/recommend/loan', {
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
