import React, { ChangeEvent, useState } from 'react';

interface LongBtnProps {
  longLeverage: number;
  prevLongLeverage: number;
  handleLongConfirm: () => void;
  handleLongRangeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInputLongChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LongBtn: React.FC<LongBtnProps> = ({
  longLeverage,
  prevLongLeverage,
  handleLongRangeChange,
  handleLongConfirm,
  handleInputLongChange,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='LongBtn-Container'>
      <button
        type='button'
        className='bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue'
        onClick={() => setModalOpen(true)}
      >
        롱 {`${longLeverage}배`}
      </button>

      {modalOpen && (
        <div className='fixed inset-0 z-50 overflow-auto bg-smoke flex'>
          <div className='modal-dialog mx-auto max-w-md p-4'>
            <div className='modal-content bg-white shadow-md rounded'>
              <div className='modal-header'>
                <h5 className='modal-title'>레버리지 조정</h5>
              </div>
              <div className='modal-body'>
                <form>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-input block w-full leading-5 bg-gray-800 text-white'
                      id='recipient-name'
                      value={`레버리지 : ${longLeverage}`}
                      onChange={handleInputLongChange}
                    />
                    <br />
                    <input
                      type='range'
                      min='1'
                      max='125'
                      step='1'
                      className='form-range'
                      style={{ width: '400px' }}
                      onChange={handleLongRangeChange}
                      value={longLeverage}
                      list='leverageOptions'
                    />
                    <br />
                    <datalist id='leverageOptions'>
                      <option value='1' />
                      <option value='25' />
                      <option value='50' />
                      <option value='75' />
                      <option value='100' />
                      <option value='125' />
                    </datalist>
                    <ul className='text-start text-sm'>
                      <div className='text-center'>참고 : 1배부터 ~ 125배까지 가능합니다.</div> <br />
                      방법 : 아래 방법을 적용하신 뒤, 확정을 눌러주세요!
                      <li>마우스로 Bar를 레버리지만큼 오른쪽으로 당겨서 조절합니다. </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className='modal-footer'>
                <button type='button' className='bg-blue-500 text-white py-2 px-4 rounded' onClick={() => {setModalOpen(false); handleLongConfirm();}}>
                  확정
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LongBtn;
