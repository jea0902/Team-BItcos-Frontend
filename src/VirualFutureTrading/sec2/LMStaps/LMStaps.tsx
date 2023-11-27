import React, { useEffect, useState } from 'react'
import "../../../css/LMStaps.css"


const LMStaps : React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [userAssets, setUserAsseets] = useState<number>(0);
    const [inputValue, setInputValue] = useState<number>(0);

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 숫자 이외의 문자를 입력하지 못하도록 처리
        const value = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10) || 0;
    
        setInputValue(value);
      };

      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // 숫자 이외의 입력을 막음
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight'];
        if (!allowedKeys.includes(e.key)) {
            e.preventDefault();
          }
        };

  return (
    <div className='taps-Container'>
        <ul className="nav nav-tabs" style={{borderBottom:"1px solid #222631"}}>
            <li className="nav-item">
                {/* 버튼과 탭 컨텐츠들을 전부 동적으로 변경 <- activeIndex */}
                <button className={`nav-link ${activeIndex === 0 ? 'active gold-text' : ''}`} onClick={() => handleClick(0)} id="one-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 0}>지정가</button>
                {/* aria-controls : 현재 엘리멘트와 연결된 콘텐츠의 id를 지정 */}
                {/* aria-selected : 현재 엘리먼트의 선택 여부를 나타냄 true or false */}
            </li>
            <li className="nav-item">
                <button className={`nav-link ${activeIndex === 1 ? 'active gold-text' : ''}`} onClick={() => handleClick(1)} id="two-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 1}>시장가</button>
            </li>
            <li className="nav-item">
                <button className={`nav-link ${activeIndex === 2 ? 'active gold-text' : ''}`} onClick={() => handleClick(2)} id="three-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls={`tabpanel-${activeIndex}}`} aria-selected={activeIndex === 2}>예약 지정가</button>
            </li>
        </ul>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
            {/* 첫 번째 행 */}
            <div className='Avaiilable' style={{ textAlign: 'left', display:"flex", padding:"0 8px 0 8px" }}>
                <p>주문 가능</p>
                <div style={{marginLeft:"auto"}}>
                    <p>{userAssets.toLocaleString()} KRW</p>
                </div>
            </div>

            {/* 두 번째 행 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding:"0 8px 0 8px"  }}>
                {/* 두 번째 행의 첫 번째 열 (매수가격(KRW)) */}
                <p>매수가격(KRW)</p>

                {/* 두 번째 행의 두 번째 열 (Input 창) */}
                <div className="input-group" style={{width:"55%", height:"auto"}}>
                    <input type="text" className="form-control" placeholder="매수가격(KRW)"
                    style={{direction:"ltr", textAlign:"right"}} aria-label="Recipient's username" aria-describedby="basic-addon2"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    value={inputValue.toLocaleString()}
                    />
                    {/* direction left - to - right 지만, 텍스트는 오른쪽 정렬 */}
                </div>
                
            </div>
            {/* 세번째 행 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding:"0 8px 0 8px"  }}>
                {/* 두 번째 행의 첫 번째 열 (매수가격(KRW)) */}
                <p>주문수량(각코인)</p>

                {/* 두 번째 행의 두 번째 열 (Input 창) */}
                <div className="input-group" style={{width:"55%", height:"auto"}}>
                    <input type="text" className="form-control" placeholder="매수가격(KRW)"
                    style={{direction:"ltr", textAlign:"right"}} aria-label="Recipient's username" aria-describedby="basic-addon2"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    value={inputValue.toLocaleString()}
                    />
                    {/* direction left - to - right 지만, 텍스트는 오른쪽 정렬 */}
                </div>
                
            </div>
            <div className='orderRange'>
                <input type="range" min="1" max="125" step="1" style={{width:"auto", padding:"0 8px 0 8px"}} list="leverageOptions"/> <br />
                                <datalist id="leverageOptions">
                                    <option value="1" />
                                    <option value="25" />
                                    <option value="50" />
                                    <option value="75" />
                                    <option value="100" />
                                    <option value="125" />
                                </datalist>
            </div>
            {/* 네번째 행 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding:"0 8px 0 8px"  }}>
                {/* 두 번째 행의 첫 번째 열 (매수가격(KRW)) */}
                <p>주문총액(KRW)</p>

                {/* 두 번째 행의 두 번째 열 (Input 창) */}
                <div className="input-group" style={{width:"55%", height:"auto"}}>
                    <input type="text" className="form-control" placeholder="매수가격(KRW)"
                    style={{direction:"ltr", textAlign:"right"}} aria-label="Recipient's username" aria-describedby="basic-addon2"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    value={inputValue.toLocaleString()}
                    />
                    {/* direction left - to - right 지만, 텍스트는 오른쪽 정렬 */}
                </div>
                
            </div>
        </div>
        <div className="tab-content" id="myTabContent" style={{marginTop : "3vh"}}>
            <div className={`tab-pane fade ${activeIndex === 0 ? 'show active' : ''}`} id="one-tab" role="tabpanel" aria-labelledby="one-tab">지정가 만드는중 </div>
            <div className={`tab-pane fade ${activeIndex === 1 ? 'show active' : ''}`} id="two-tab" role="tabpanel" aria-labelledby="two-tab"><a href="/Login">2로그인</a>이나 <a href="/SignUp">회원가입</a>을 하셔야 모의 선물 거래를 체험해보실 수 있습니다.</div>
            <div className={`tab-pane fade ${activeIndex === 2 ? 'show active' : ''}`} id="three-tab" role="tabpanel" aria-labelledby="three-tab"><a href="/Login">3로그인</a>이나 <a href="/SignUp">회원가입</a>을 하셔야 모의 선물 거래를 체험해보실 수 있습니다.</div>
        </div>
    </div>
  )
}
export default LMStaps;