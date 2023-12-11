import React, { useEffect, useState } from 'react'
import "../../../css/Sec2-3tabs.css"
import Tab1Limit from './Tab1Limit';
import Tab2Market from './Tab2Market';


const ThreeTabsSection2 : React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    // 활성화 탭
    
    // 전역으로 두어야 하는 로그인 여부
    const [isLogined, setIsLogined] = useState(true);
    // 유저 실시간 자산
    const [userAssets, setUserAsseets] = useState<number>(0);
    // 미실현 손익
    const [UnrealizedPNL, setUnrealizedPNL] = useState<number>(0);

    // const [purchasePrice, setPurchasePrice] = useState<number>(0);

    // const [coinName, setCoinName] = useState<String>("");
    // const [coinQuantity, setCoinQuantity] = useState<number>(0);

    // const [totalPrice, setTotalPrice] = useState<number>(0);


    const handleClick = (index : number) => {
        setActiveIndex(index);
    };

    // 로그인한 유저의 자산을 가져오는 함수
    const fetchUserAssets = () => {
        const loggedInUserAssets = 5000000;
        setUserAsseets(loggedInUserAssets);
    }
    
    useEffect(() => {
        fetchUserAssets();
    }, []);


  return (
    <div className='taps-Container'>
        <ul className="nav nav-tabs" style={{borderBottom:"1px solid #222631"}}>
            <li className="nav-item">
                {/* 버튼과 탭 컨텐츠들을 전부 동적으로 변경 <- activeIndex */}
                <button className={`nav-link ${activeIndex === 0 ? 'active gold-text' : ''}`} onClick={() => handleClick(0)} id="one-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 0}>
                    지정가
                </button>
                {/* aria-controls : 현재 엘리멘트와 연결된 콘텐츠의 id를 지정 */}
                {/* aria-selected : 현재 엘리먼트의 선택 여부를 나타냄 true or false */}
            </li>
            <li className="nav-item">
                <button className={`nav-link ${activeIndex === 1 ? 'active gold-text' : ''}`} onClick={() => handleClick(1)} id="two-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 1}>
                    시장가
                </button>
            </li>
        </ul>

        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
            {/* 첫 번째 행 - 3개 탭 공통*/}
            <div className='Avaiilable' style={{ textAlign: 'left', display:"flex", padding:"0 15px 0 8px" }}>
                
                {/* 첫 열 */}
                <p>주문 가능</p>
                
                {/* 두번째 열 */}
                <div style={{marginLeft:"auto"}}>
                    <p>{userAssets.toLocaleString()} KRW</p>
                </div>
            </div>
        </div>

        <div className="tab-content" id="myTabContent" style={{marginTop : "3vh"}}>
            <div className={`tab-pane fade ${activeIndex === 0 ? 'show active' : ''}`} id="one-tab" role="tabpanel" aria-labelledby="one-tab">
                {/* 지정가 탭 */}
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                    <Tab1Limit />
                </div>
            </div>

            <div className={`tab-pane fade ${activeIndex === 1 ? 'show active' : ''}`} id="two-tab" role="tabpanel" aria-labelledby="two-tab">
                {/* 시장가 탭 */}
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                    <Tab2Market />
                </div>
            </div>
        </div>
        
        {/* 로그인 여부에 따라 로그인 버튼과 아래 롱 숏 버튼 */}
        {isLogined ? (
            <div className='Long-Short-Btns' style={{display:"flex", width:"100%", padding:"0 15px 0 15px", marginTop:"5vh", borderBottom:"1px solid #222631"}}>
                <button style={{width:"70%", height:"5vh", color : "white", border: "transparent", backgroundColor: "#089981" , fontWeight: "bold", fontSize:"16px", borderRadius:"10px", marginBottom:"10vh"}}>
                    롱 (공매수)
                </button>
                <button style={{width:"70%", height:"5vh", color : "white", border: "transparent", backgroundColor: "#f23645" , fontWeight: "bold", marginLeft:"1vw", fontSize:"16px", borderRadius:"10px"}}>
                    숏 (공매도)
                </button>
            </div>
        ) : <div className='Login-Btns' style={{marginTop:"4vh", borderBottom:"1px solid #222631"}}>
                <button style={{width:"20%", height:"5vh", color : "white", border: "transparent", backgroundColor: "#203fd2" , fontWeight: "bold", marginRight:"2vw", fontSize:"14px"}}>
                    회원가입
                </button>
                <button style={{width:"60%", height:"5vh", color : "white", border: "transparent", backgroundColor: "#203fd2" , fontWeight: "bold"}}>
                    로그인
                </button>
                <br />
            </div>
        }
        <div className='Asset-Container' style={{marginBottom:"5vh", padding:"0 20px 0 20px"}}>
            <div style={{fontWeight:"bold", marginBottom:"2vh", marginTop:"2vh"}}>
                현재 내 자산
            </div>
            <div className='Assets-UnrealizedPNL' style={{textAlign:"left"}}>
                총 자산 : {userAssets.toLocaleString()} KRW
                <br />
                미실현 손익 : {UnrealizedPNL.toLocaleString()} KRW
            </div>
        </div>
    </div>
  )
}
export default ThreeTabsSection2;