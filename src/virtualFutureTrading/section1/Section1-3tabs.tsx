import React, { useState } from 'react';
import "../../css/Sec1-3tabs.css";



const ThreeTab : React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = (index : number) => {
        setActiveIndex(index);
    };

    return (
        <div className='ThreeTabContainer' style={{ height: "30vh" }}>
    
          <ul className="flex border-b border-gray-200" id="myTab" role="tablist">
            <li className="-mb-px flex-1" role="presentation">
              <button className={`text-teal-500 border-teal-500 ${activeIndex === 0 ? 'border-b-2' : ''} py-3 focus:outline-none`} onClick={() => handleClick(0)} id="one-tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 0}>포지션들(숫자)</button>
            </li>
            <li className="-mb-px flex-1" role="presentation">
              <button className={`text-teal-500 border-teal-500 ${activeIndex === 1 ? 'border-b-2' : ''} py-3 focus:outline-none`} onClick={() => handleClick(1)} id="two-tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 1}>주문한 거래들(숫자)</button>
            </li>
            <li className="-mb-px flex-1" role="presentation">
              <button className={`text-teal-500 border-teal-500 ${activeIndex === 2 ? 'border-b-2' : ''} py-3 focus:outline-none`} onClick={() => handleClick(2)} id="three-tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 2}>주문 체결 내역</button>
            </li>
          </ul>
          <div className="p-4" id="myTabContent" style={{ marginTop: "10vh" }}>
            <div className={`tab-pane ${activeIndex === 0 ? 'block' : 'hidden'}`} id="one-tab" role="tabpanel" aria-labelledby="one-tab">1</div>
            <div className={`tab-pane ${activeIndex === 1 ? 'block' : 'hidden'}`} id="two-tab" role="tabpanel" aria-labelledby="two-tab">
              <a href="/Login" className="text-teal-500">2로그인</a>이나 <a href="/SignUp" className="text-teal-500">회원가입</a>을 하셔야 모의 선물 거래를 체험해보실 수 있습니다.
            </div>
            <div className={`tab-pane ${activeIndex === 2 ? 'block' : 'hidden'}`} id="three-tab" role="tabpanel" aria-labelledby="three-tab">
              <a href="/Login" className="text-teal-500">3로그인</a>이나 <a href="/SignUp" className="text-teal-500">회원가입</a>을 하셔야 모의 선물 거래를 체험해보실 수 있습니다.
            </div>
          </div>
        </div>
      )
    }
export default ThreeTab;