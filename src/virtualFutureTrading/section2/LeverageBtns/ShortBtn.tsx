import React, { ChangeEvent } from 'react'
import "../../../css/LeverageBtn.css"

interface ShortBtnProps {
    shortLeverage : number;
    prevShortLeverage : number;
    handleShortCancel : () => void;
    handleShortConfirm : () => void;
    handleShortRangeChange : (event : ChangeEvent<HTMLInputElement>) => void;
    handleInputShortChange : (event : ChangeEvent<HTMLInputElement>) => void;
}

const ShortBtn : React.FC<ShortBtnProps> = ({
    shortLeverage,
    prevShortLeverage,
    handleShortCancel,
    handleShortRangeChange,
    handleShortConfirm,
    handleInputShortChange
}) => {
  return (
    <div className='ShortBtn-Container'>
        <button type="button" className="btn btn-primary custom-Short-Btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@fat">숏 {`${shortLeverage}배`}</button>

        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">레버리지 조정</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShortCancel}></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="recipient-name" value={`레버리지 : ${shortLeverage}`} onChange={handleInputShortChange} /> <br />
                            <input type="range" min="1" max="125" step="1" style={{width:"400px"}} onChange={handleShortRangeChange} value={shortLeverage} list="leverageOptions"/> <br />
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
                                    <li>마우스로 Bar를 레버리지만큼 오른쪽으로 당겨서 조절합니다.</li>
                                </ul>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleShortCancel}>취소</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleShortConfirm}>확정</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ShortBtn;