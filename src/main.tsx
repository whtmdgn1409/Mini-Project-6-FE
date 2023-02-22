import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './pages/LoadingPage';

const App = React.lazy(() => import('./App'));
const MainPage = React.lazy(() => import('./pages/MainPage'));
const MyPage = React.lazy(() => import('./pages/MyPage'));
const CartNLikesPage = React.lazy(() => import('./pages/CartNLikesPage'));
const UserInfoPage = React.lazy(() => import('./pages/UserInfoPage'));
const UserLoanPage = React.lazy(() => import('./pages/UserLoanPage'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const SignUpPage = React.lazy(() => import('./pages/SignUpPage'));
const SignInPage = React.lazy(() => import('./pages/SignInPage'));
const PasswordCheck = React.lazy(
  () => import('./pages/UserInfoPage/PasswordCheck'),
);
const AllProduct = React.lazy(() => import('./pages/allProduct'));
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
        element: <MyPage />,
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
        path: '/userinfo',
        element: <UserInfoPage />,
      },
      {
        path: '/userinfo/pwcheck',
        element: <PasswordCheck />,
      },
      {
        path: '/userloan/:loanId',
        element: <UserLoanPage />,
      },
      {
        path: '/product/:snq',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <CartNLikesPage />,
      },
      {
        path: '/allproduct',
        element: <AllProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <React.Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </React.Suspense>
    </PersistGate>
  </Provider>,
);
