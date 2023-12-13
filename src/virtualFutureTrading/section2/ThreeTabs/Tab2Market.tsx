import React, {useState,useEffect} from 'react'

const Tab2Market : React.FC = () => {

  // 전역으로 둬야 하는 변수
  const [userAssets, setUserAsseets] = useState<number>(5000000);

  const [coinName, setCoinName] = useState<String>("");
  // 전역으로 받아야 하고,

  // 시장가는 계속 바뀌잖아 이게 실시간으로 반영하려나?
  const [marketPrice, setMarketPrice] = useState<number>(50000000);

  // 주문 %량
  const [orderPercent, setOrderPercent] = useState(0);
  const handleOrderChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      setOrderPercent(Number(event.target.value));
  }

  const handleBtnOrderQuantity = (value : number) => {
      setOrderPercent(value);
  }

  // 사게 될 코인 수량(소수점 가능) = (내가 가진 돈 x 주문할 %) / 매수가격 
  // 실제 주문량
  const [orderQuantitiy, setOrderQuantity] = useState<number>(0);

  // 주문총액(총가격) = 코인 시장가격 * 주문수량
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // totalPrice를 계산하는 함수
  const calculateTotalPrice = () => {
    const calculateOQ =  (userAssets / 100 * orderPercent) / marketPrice;
    setOrderQuantity(calculateOQ);
    const calculateTP = marketPrice * calculateOQ;
    setTotalPrice(calculateTP);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [orderPercent]);


  return (
    <div>

       {/* 세번째 행 */}
       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', padding:"0 15px 0 8px"  }}>
          {/* 세 번째 행의 첫 번째 열) */}
          <p>주문총액(KRW)</p>

          {/* 세 번째 행의 두 번째 열 (Input 창) */}
          <div className="input-group" style={{width:"55%", height:"auto"}}>
              <input type="text" className="form-control text-black"
              style={{direction:"ltr", textAlign:"right"}} aria-label="Recipient's username" aria-describedby="basic-addon2"
              onChange={handleOrderChange}
              value={totalPrice.toLocaleString()}
              />
              {/* direction left - to - right 지만, 텍스트는 오른쪽 정렬 */}
          </div>
          
      </div>

      {/* 주문총액 range bar */}
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
    </div>
  )
}
export default Tab2Market;