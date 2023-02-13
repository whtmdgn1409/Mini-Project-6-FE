import { ScrollRestoration, Outlet } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className='w-max m-auto'>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <MenuBar />
    </div>
  );
}

export default App;
