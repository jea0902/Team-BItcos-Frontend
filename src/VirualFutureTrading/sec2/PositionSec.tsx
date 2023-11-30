import React, { useState } from 'react'
import "../../css/PositionSec.css";
import LongBtn from './LeverageBtn/LongBtn';
import ShortBtn from './LeverageBtn/ShortBtn';
import LMStaps from './ThreeTabs/ThreeTabsSec2';

const PositionSec : React.FC = () => {

    const [longLeverage, setLongLeverage] = useState(1);
    const [prevLongLeverage,setPrevLongLeverage] = useState<number>(1); 
    // 이전값 저장, 초기값 1로 저장

    const [shortLeverage, setShortLeverage] = useState(1);
    const [prevShortLeverage,setPrevShortLeverage] = useState<number>(1); 

    // range bar(롱) -> 레버리지 즉시 적용
    const handleLongRangeChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setLongLeverage(value);
    }

    // range bar(숏) -> 레버리지 즉시 적용
    const handleShortRangeChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        // 위에 event : input 엘리먼트가 target이 됨
        const value = parseInt(event.target.value, 10);
        // 이벤트가 발생한 HTML 엘리먼트가 target 속성
        // value 속성은 input 엘리먼트의 현재 값, 사용자가 입력한 레버리지 값
        setShortLeverage(value);
    }

    const handleLongCancel = () => {
        // 취소 버튼을 누르면, 이전 값으로 되돌리고 모달을 닫음.
        setLongLeverage(prevLongLeverage);
    };

    const handleShortCancel = () => {
        // 취소 버튼을 누르면, 이전 값으로 되돌리고 모달을 닫음.
        setShortLeverage(prevShortLeverage);
    };

    const handleLongConfirm = () => {
        setLongLeverage(longLeverage);
    }

    const handleShortConfirm = () => {
        setShortLeverage(shortLeverage);
    }

    const handleInputLongChange = (event : React.ChangeEvent<HTMLInputElement>)=> {
        const value = event.target.value.trim();
        const numericValue = /^\d+$/.test(value) ? parseInt(value, 10) : 1;
        
        setLongLeverage(numericValue);
      };

    const handleInputShortChange = (event : React.ChangeEvent<HTMLInputElement>)=> {
        setShortLeverage(parseInt(event.target.value));
      };
    
    const [LMS,setLMS] = useState(1); // Limit, Market, StopLimit 상태변수
    

  return (
    <div className='positionSection-Container'>
        <div className='Select_Leverage-section' style={{display:"flex", flexDirection:"row", borderBottom: "1px solid #222631", padding:"5px"}}>
            <select className="form-select" style={{width:"auto"}}>
                <option selected>담보금 제한</option>
                    <option value="1">담보금 무제한</option>
            </select>
            {/* LongBtn, ShortBtn에 필요한 속성들을 전달 */}
            <LongBtn
                longLeverage={longLeverage}
                prevLongLeverage={prevLongLeverage}
                handleLongCancel={handleLongCancel}
                handleLongConfirm={handleLongConfirm}
                handleLongRangeChange={handleLongRangeChange}
                handleInputLongChange={handleInputLongChange}
            />
            <ShortBtn
                shortLeverage={shortLeverage}
                prevShortLeverage={prevLongLeverage}
                handleShortCancel={handleShortCancel}
                handleShortConfirm={handleShortConfirm}
                handleShortRangeChange={handleShortRangeChange}
                handleInputShortChange={handleInputShortChange}
            />

        </div>
        <div className="Limit_Market_Stop-taps-section" style={{ borderBottom: "1px solid #222631"}}>
            <LMStaps />
        </div>
        <div className='asset-section'>
            
        </div>
        레버리지 선택 Long, 레버리지 선택 Short

        open 버튼, close 버튼

        탭 Limit, Market
        가용 금액
            가격
            양
                양을 정할 수 있는 %바
        Tp/SL 체크하면 아래로 드롭되는 창
        
        포지션 Long버튼, 포지션 Short 버튼
        
        현재 보유 Assets : ()KRW
            Account Assets
            Avaliable
            전체 미실현 수익 금액
            실현 수익 %
    </div>
  )
}
export default PositionSec;