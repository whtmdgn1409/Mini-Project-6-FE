import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import CartNLikesPage from './pages/CartNLikesPage';
import LoanDetailPage from './pages/LoanDetailPage';
import MainPage from './pages/MainPage';
import Mypage from './pages/MyPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import UserInfoPage from './pages/UserInfoPage';
import UserLonaPage from './pages/UserLoanPage';
import './index.css';

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
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/signin',
        element: <SignInPage />,
      },
      {
        path: '/userinfo',
        element: <UserInfoPage />,
      },
      {
        path: '/userloan',
        element: <UserLonaPage />,
      },
      {
        path: '/detail/:loanId',
        element: <LoanDetailPage />,
      },
      {
        path: '/cart',
        element: <CartNLikesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
