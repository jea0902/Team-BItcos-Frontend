import React from 'react'
import "./css/App.css";
interface HomeProps {
    // Home 컴포넌트의 props 타입을 정의
}

// export default function Home() {
//   return (
//     <div>
//       홈입니다.
//     </div>
//   )
// }

const Home : React.FC<HomeProps> = () => {
    return (
    <div className='HomeContainer'>
      홈입니다.
      
    </div>
    );
};

export default Home;
