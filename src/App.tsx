import { ScrollRestoration, Outlet } from 'react-router-dom';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <div>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <MenuBar />
      <input type='text' className='mwInput' placeholder='이름을 입력하세요' />
      <button className='mwBtn !w-[300px]'>로그인</button>
      <div className='bg-mw w-[500px] h-3'>안녕하세요</div>
    </div>
  );
}

export default App;
