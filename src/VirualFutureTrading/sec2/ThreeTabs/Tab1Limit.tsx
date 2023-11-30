import React, {useState,useEffect} from 'react'

const Tab1Limit : React.FC = () => {

  // 지정가에서도 시장가 가져와서 그 가격을 매수 가격 디폴트로 둬야 함
  // 전역으로 둬야할 변수
  const [userAssets, setUserAsseets] = useState(5000000);

  // 현재 보고 있는 코인 이름
  const [coinName, setCoinName] = useState<String>("");



  // 매수 가격
  const [purchasePrice, setPurchasePrice] = useState<number>(50000000);

  // 매수 가격 input에 입력했을 때 가격 저장되게
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 숫자 이외의 문자를 입력하지 못하도록 처리
    const value = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10) || 0;

    setPurchasePrice(value);
  };

  // 매수 가격 input에 숫자 외에 필수를 제외하고는 입력할 수 없게
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 숫자 이외의 입력을 막음
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'ArrowLeft', 'ArrowRight'];
    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    };
  

  // 여기부터 네번째 행 - 주문 수량(%)과 range bar, 수량 버튼
  // (내가 가진 돈 x 주문할 %) / 매수가격 
  const [orderPercent, setOrderPercent] = useState(0);

  const handleOrderChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      setOrderPercent(Number(event.target.value));
      calculateOrderQuantity();
  }
  const handleBtnOrderQuantity = (value : number) => {
      setOrderPercent(value);
  }

  // 사게 될 코인 수량(소수점 가능) = (내가 가진 돈 x 주문할 %) / 매수가격 
  const [orderQuantity, setOrderQuantity] = useState<number>(0);

  // orderQuantity 계산 함수
  const calculateOrderQuantity = () => {
    const calculateOQ =  (userAssets / 100 * orderPercent) / purchasePrice;
    setOrderQuantity(calculateOQ);
  }

  useEffect(() => {
    // onChange를 통해 orderPercent값이 바뀌고,
    // orderPercent값에 따라 주문 수량과 총 주문 금액이 나오게끔
    calculateOrderQuantity();
    calculateTotalPrice();
  }, [orderPercent]);

  // 주문 총액(KRW) = 매수가격 * 코인 수량
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // totalPrice를 계산하는 함수
  const calculateTotalPrice = () => {
    const calculateOQ =  (userAssets / 100 * orderPercent) / purchasePrice;
    // 이 부분에 그냥 orderQuantity랑 * purchage를 해버리면 값이 틀리게 나오더라
    const calculateTP = purchasePrice * calculateOQ;
    setTotalPrice(calculateTP);
  }

  // 익절/손절라인 체크박스
  // const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  // const [stoLossTarget, setStoLossTarget] = useState("");
  
  // const handleCheckboxChange = () => {
  //   setIsCheckboxChecked(!isCheckboxChecked);
  // }

  // const [profitTarget, setProfitTarget] = useState<number | string>("");
  // // 변수 타입을 number or string으로 해줘야지 나중에 Number로 바꿀 수 있구나 - 이 지랄을 하는 이유 : placeholder가 숫자로는 안되가지고

  // const handleProfitTarget = (e : React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue : String = e.target.value;
  //   if (!isNaN(Number(newValue))) {
  //     setProfitTarget(Number(newValue));
  //   }
  // }
  // const handleStopLossTarget = () => {
    
  // }

  return (
    <div>
      {/* 두 번째 행 - 매수 가격(KRW)*/}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding:"0 15px 0 8px"  }}>
        
        {/* 두 번째 행의 첫 번째 열 */}
        <p>매수가격(KRW)</p>

        {/* 두 번째 행의 두 번째 열 (Input 창) */}
        <div className="input-group" style={{width:"55%", height:"auto"}}>
            <input type="text" className="form-control" placeholder="매수가격(KRW)"
            style={{direction:"ltr", textAlign:"right"}} aria-label="Recipient's username" aria-describedby="basic-addon2"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            value={purchasePrice.toLocaleString()}
            />
            {/* direction left - to - right 지만, 텍스트는 오른쪽 정렬 */}
        </div>
      </div>

      {/* 세번째 행 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding:"0 15px 0 8px"  }}>
          {/* 세 번째 행의 첫 번째 열) */}
          <p>주문수량(각코인)</p>

          {/* 세 번째 행의 두 번째 열 (Input 창) */}
          {/* 여기 있는 주문 수량 =  내가 가진 돈의 %로 계산한 돈 / 매수 가격 => 주문 수량 return */}
          <div className="input-group" style={{width:"55%", height:"auto"}}>
              <input type="text" className="form-control" placeholder="매수가격(KRW)"
              style={{direction:"ltr", textAlign:"right"}} aria-label="Recipient's username" aria-describedby="basic-addon2"
              onChange={handleOrderChange}
              // onChange 중요
              // onKeyDown={handleKeyDown}
              value={orderQuantity.toLocaleString()}
              />
              {/* direction left - to - right 지만, 텍스트는 오른쪽 정렬 */}
          </div>
          
      </div>

      {/* 네번째 행 - 주문 수량(각 코인 단위)*/}
      <div className='orderQuantitiy-RangeBar' style={{marginLeft:"auto", width:"57%", padding:"0 40px 0 5px", marginTop:"5px"}}>
          <input type="range" value={orderPercent} onChange={handleOrderChange} min="0" max="100" step="1" style={{width:"100%"}} list="orderOptions"/> <br />
              <datalist id="orderOptions">
                  <option value="0" />
                  <option value="25" />
                  <option value="50" />
                  <option value="75" />
                  <option value="100" />
              </datalist>
              <div className="following-percent" style={{display : "flex", marginLeft:`calc(${orderPercent}%)`, fontSize:"14px"}}>
                  {orderPercent}%
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                  <button onClick={() => handleBtnOrderQuantity(10)} style={{fontSize:"13px", border:"1px solid #222631"}}>10%</button>
                  <button onClick={() => handleBtnOrderQuantity(25)} style={{fontSize:"13px", border:"1px solid #222631"}}>25%</button>
                  <button onClick={() => handleBtnOrderQuantity(50)} style={{fontSize:"13px",  border:"1px solid #222631"}}>50%</button>
                  <button onClick={() => handleBtnOrderQuantity(100)} style={{fontSize:"13px", border:"1px solid #222631"}}>100%</button>
                  {/* <button>직접입력</button> */}
              </div>
      </div>
            
      {/* 다섯번째 행 - 주문 총액*/}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding:"0 15px 0 8px"  }}>
          {/* 다섯 번째 행의 첫 번째 열 */}
          <p>주문총액(KRW)</p>

          {/* 다섯 번째 행의 두 번째 열 (Input 창) */}
          <div className="input-group" style={{width:"55%", height:"auto"}}>
              <input type="text" className="form-control"
              style={{direction:"ltr", textAlign:"right"}} aria-label="Recipient's username" aria-describedby="basic-addon2"
              onChange={handleOrderChange}
              // onChange 중요
              // onKeyDown={handleKeyDown}
              value={totalPrice.toLocaleString()}
              />
              {/* direction left - to - right 지만, 텍스트는 오른쪽 정렬 */}
          </div>
          
      </div>
      {/* <div className='TP/SL-Container' style={{textAlign:"left", padding:"0 15px 0 8px", marginTop:"20px"}}> */}
        {/* 이렇게 또 감싸주고, textAligh 레프트로 해줘야 왼쪽 끝으로 붙더라 */}
        {/* <div className='TP/SL'>
          <label>
            <input type="checkbox"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            {' '}익절라인/손절라인 설정
          </label> */}

          {/* 체크박스가 체크되었을 때 아래에 나타날 input 창 2개 */}
          {/* {isCheckboxChecked && (
            <div style={{marginTop:"15px"}}>
              <label>
                <input type="text" 
                placeholder='익절 목표 가격'
                value={profitTarget}
                onChange={handleProfitTarget}
                style={{direction:"ltr", textAlign:"right", width:"100%"}}
                />
              </label>
              <label>
                <input type="text"
                placeholder='손절 목표 가격'
                value={stoLossTarget}
                onChange={(e) => setStoLossTarget(e.target.value)}
                style={{direction:"ltr", textAlign:"right"}}
                />
              </label>
            </div> */}
          {/* )}
        </div> */}
      {/* </div> */}
    </div>
  )
}
export default Tab1Limit;