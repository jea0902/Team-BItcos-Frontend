import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Main from './Main';
import VirtualFutureTrading from './virtualFutureTrading/VirtualFutureTrading';

function App() {
  return (
    <div className="App">
      {/* BrowserRouter는 최상위 컴포넌트에서 한번 사용되어야 하고,
      아래 Main 컴포넌트보다 위에 있어야 먼저 렌더링이 되어서
      Main에서의 Link 컴포넌트가 라우팅이 된다. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Virtual-Future-Trading" element={<VirtualFutureTrading />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
