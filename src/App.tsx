import { ScrollRestoration, Outlet } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className='w-[480px] m-auto relative'>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <MenuBar />
    </div>
  );
}

export default App;
