import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import CartNLikesPage from './pages/CartNLikesPage';
import MainPage from './pages/MainPage';
import Mypage from './pages/MyPage';

import UserInfoPage from './pages/UserInfoPage';
import UserLoanPage from './pages/UserLoanPage';
import './index.css';
import ProductDetail from './pages/ProductDetail';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import OptionalInfo from './pages/SignUpPage/OptionalInfo';
import Loading from './pages/LoadingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/mypage',
        element: <Mypage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/signup/optinfo',
        element: <OptionalInfo />,
      },
      {
        path: '/userinfo',
        element: <UserInfoPage />,
      },
      {
        path: '/userloan/:loanId',
        element: <UserLoanPage />,
      },
      {
        path: '/product/:Id',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <CartNLikesPage />,
      },
      {
        path: '/loading',
        element: <Loading />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
