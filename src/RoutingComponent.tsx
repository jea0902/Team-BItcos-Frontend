import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

// App.tsx에서 사용될 라우팅을 전부 여기다

interface RoutingProps {
  // props 넣을거면 여기에
}

// Home.tsx에서 타입을 정의하고, 그걸 가져와서 import해서 사용하는 것.

const RoutingComponent: React.FC<RoutingProps> = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutingComponent;

// export default function Body() {
//   return (
//     <div>
      
//     </div>
//   )
// }
