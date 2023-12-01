import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import VirtualFutureTrading from './VirualFutureTrading/VirtualFutureTrading';
import SignUp from './users/SignUp';
import LogIn from './users/LogIn';

// App.tsx에서 사용될 라우팅을 전부 여기다

interface RoutingProps {
  // props 넣을거면 여기에
}

// Home.tsx에서 타입을 정의하고, 그걸 가져와서 import해서 사용하는 것.

const RoutingComponent: React.FC<RoutingProps> = () => {
  return (
    <div className='mainContents-Container'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Virtual-Future-Trading" element={<VirtualFutureTrading />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutingComponent;