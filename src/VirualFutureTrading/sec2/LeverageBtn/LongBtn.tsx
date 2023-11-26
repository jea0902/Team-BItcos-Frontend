import React, { ChangeEvent } from 'react'

interface LongBtnProps {
    longLeverage : number;
    prevLongLeverage : number;
    handleLongCancel : () => void;
    handleLongConfirm : () => void;
    handleLongRangeChange : (event : ChangeEvent<HTMLInputElement>) => void;
    handleInputLongChange : (event : ChangeEvent<HTMLInputElement>) => void;
}

const LongBtn : React.FC<LongBtnProps> = ({
    longLeverage,
    prevLongLeverage,
    handleLongCancel,
    handleLongRangeChange,
    handleLongConfirm,
    handleInputLongChange
}) => {
  return (
    <div className='LongBtn-Container'>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">롱 {`${longLeverage}배`}</button>

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">레버리지 조정</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleLongCancel}></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="recipient-name" value={`레버리지 : ${longLeverage}`} onChange={handleInputLongChange} /> <br />
                        <input type="range" min="1" max="125" step="1" style={{width:"400px"}} onChange={handleLongRangeChange} value={longLeverage} list="leverageOptions"/> <br />
                        <datalist id="leverageOptions">
                            <option value="1" />
                            <option value="25" />
                            <option value="50" />
                            <option value="75" />
                            <option value="100" />
                            <option value="125" />
                        </datalist>
                            <ul style={{textAlign:"start", fontSize:"14px"}}>
                                <div style={{textAlign:"center"}}>참고 : 1배부터 ~ 125배까지 가능합니다.</div> <br />
                                방법 : 아래 방법들을 적용하신 뒤, 확정을 눌러주세요!
                                <li>1. 입력칸 안에 원하시는 레버리지 배수를 숫자 입력하시거나, </li>
                                <li>2. 마우스로 Bar를 레버리지만큼 오른쪽으로 당겨서 조절합니다. </li>
                            </ul>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleLongCancel}>취소</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleLongConfirm}>확정</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default LongBtn;