import React, { useState } from 'react';
import "../../css/ThreeTabs.css";



const ThreeTab : React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = (index : number) => {
        setActiveIndex(index);
    };

    return (
        <div className='ThreeTabContainer' style={{height:"30vh"}}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)} id="one-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 0}>포지션들(숫자)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)} id="two-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 1}>주문한 거래들(숫자)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className={`nav-link ${activeIndex === 2 ? 'active' : ''}`} onClick={() => handleClick(2)} id="three-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 2}>주문 체결 내역</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent" style={{marginTop : "10vh"}}>
                <div className={`tab-pane fade ${activeIndex === 0 ? 'show active' : ''}`} id="one-tab" role="tabpanel" aria-labelledby="one-tab">1</div>
                <div className={`tab-pane fade ${activeIndex === 1 ? 'show active' : ''}`} id="two-tab" role="tabpanel" aria-labelledby="two-tab"><a href="/Login">2로그인</a>이나 <a href="/SignUp">회원가입</a>을 하셔야 모의 선물 거래를 체험해보실 수 있습니다.</div>
                <div className={`tab-pane fade ${activeIndex === 2 ? 'show active' : ''}`} id="three-tab" role="tabpanel" aria-labelledby="three-tab"><a href="/Login">3로그인</a>이나 <a href="/SignUp">회원가입</a>을 하셔야 모의 선물 거래를 체험해보실 수 있습니다.</div>
            </div>
        </div>
    )
}
export default ThreeTab;