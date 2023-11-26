import React from 'react';
import "../../css/ThreeTabs.css";

const ThreeTab : React.FC = () => {
    return (
        <div className='ThreeTabContainer' style={{height:"30vh"}}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="one-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">포지션들(숫자)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="two-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">주문한 거래들(숫자)</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="three-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">주문 내역</button>
                </li>
            </ul>
        <div className="tab-content" id="myTabContent" style={{marginTop : "10vh"}}>
            <div className="tab-pane fade show active" id="one-tab" role="tabpanel" aria-labelledby="one-tab"><a href="/Login">로그인</a>이나 <a href="/SignUp">회원가입</a>을 하셔야 모의 선물 거래를 체험해보실 수 있습니다.</div>
            <div className="tab-pane fade" id="two-tab" role="tabpanel" aria-labelledby="two-tab"><a href="/Login">로그인</a>이나 <a href="/SignUp">회원가입</a>을 하셔야 모의 선물 거래를 체험해보실 수 있습니다.</div>
            <div className="tab-pane fade" id="three-tab" role="tabpanel" aria-labelledby="three-tab"><a href="/Login">로그인</a>이나 <a href="/SignUp">회원가입</a>을 하셔야 모의 선물 거래를 체험해보실 수 있습니다.</div>
        </div>
        </div>
    )
}
export default ThreeTab;