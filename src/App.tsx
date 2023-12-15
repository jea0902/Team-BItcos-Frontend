import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Main from './Main';
import VirtualFutureTrading from './virtualFutureTrading/VirtualFutureTrading';
import Nav from './Nav';
import LogIn from './users/LogIn';
import SignUp from './users/SignUp';
import BulletinBoard from './users/BulletinBoard/BulletinBoard';
import WritePost from './users/BulletinBoard/WritePost';


function App() {

  return (
    <div className="App">
      <Nav />
      {/* BrowserRouter는 최상위 컴포넌트에서 한번 사용되어야 하고,
      아래 Main 컴포넌트보다 위에 있어야 먼저 렌더링이 되어서
      Main에서의 Link 컴포넌트가 라우팅이 된다. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Virtual-Future-Trading" element={<VirtualFutureTrading />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Board" element={<BulletinBoard />} />
          <Route path="/Write-post" element={<WritePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
