import React from 'react';
import "../css/VirtualFutureTrading.css";
import TradingViewWidget from './section1/TradingViewWidget';
import ThreeTab from './section1/Section1-3tabs';
import PositionSec from './section2/PositionSection';
import SearchBar from './section3/SearchBar';
import KrwUsdtHoldTABS from './section3/KrwUsdtHoldTABS';
import SortableTable from './section3/SortableTable';

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
                <SearchBar />
                <KrwUsdtHoldTABS />
                <SortableTable />
            </div>
        </div>
    )
}

export default VirtualFutureTrading;