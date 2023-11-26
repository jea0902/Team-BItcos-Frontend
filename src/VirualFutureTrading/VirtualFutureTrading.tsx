import React from 'react';
import "../css/VirtualFutureTrading.css";
import TradingViewWidget from './sec1/TradingViewWidget';
import ThreeTab from './sec1/ThreeTabs';
import PositionSec from './sec2/PositionSec';

const VirtualFutureTrading : React.FC = () => {
    return (
        <div className='integratedSection'>
            <div className='sec1'>
                    <TradingViewWidget />
                    <ThreeTab />
            </div>
            <div className='sec2'>
                <PositionSec />
            </div>
            <div className='sec3'>
                코인검색 아래 원화탭, USDT탭, 
            </div>
        </div>
    )
}

export default VirtualFutureTrading;