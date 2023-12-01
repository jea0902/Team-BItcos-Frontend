// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_c5dc0') && 'TradingView' in window) {
          const widget = new window.TradingView.widget({
            autosize: true,
            symbol: "UPBIT:BTCKRW",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "kr",
            enable_publishing: false,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            watchlist: ["UPBIT:BTCKRW","UPBIT:ETHKRW","BITHUMB:BNBKRW","UPBIT:XRPKRW","UPBIT:SOLKRW","UPBIT:ADAKRW","UPBIT:DOGEKRW","UPBIT:TRXKRW","UPBIT:LINKKRW","UPBIT:TONKRW","UPBIT:AVAXKRW","UPBIT:MATICKRW","UPBIT:DOTKRW","UPBIT:SHIBKRW","UPBIT:BCHKRW","UPBIT:ATOMKRW","UPBIT:XLMKRW","UPBIT:ETCKRW","UPBIT:CROKRW","UPBIT:HBARKRW","UPBIT:APTKRW","UPBIT:NEARKRW","BITHUMB:OPKRW","UPBIT:AAVEKRW","UPBIT:ARBKRW","UPBIT:FLOWKRW","UPBIT:STXKRW","UPBIT:SANDKRW","UPBIT:MANAKRW","UPBIT:AXSKRW","UPBIT:MINAKRW","UPBIT:NEOKRW","UPBIT:EOSKRW","UPBIT:KAVAKRW","BITHUMB:KLAYKRW","BITHUMB:GALAKRW","UPBIT:SUIKRW","UPBIT:GASKRW","UPBIT:GMTKRW"],
            details: true,
            hotlist: true,
            container_id: "tradingview_c5dc0"
          });
          
          // // 위젯의 onDataCallback 이벤트를 사용해 심볼의 가격에 액세스
          // widget.onDataCallback = function (data) {
          //   // 최신 종가를 가져옴
          //   const latestClosePrice = data.close[data.close.length - 1];
            
          //   // 이제 latestClosePrice를 추가 처리에 사용할 수 있다.
          //   console.log("최근 종가", latestClosePrice);
          // };

          // widget.onChartReadyCallback(() => {
          //   // 차트가 준비되었으며 여기서 데이터에 액세스 하거나 다른 작업을 수행할 수 있음.
          // });
        }
      }
    }, []);
    // css 인라인
  return (
    <div className='tradingview-widget-container' style={{ height: "70%", width: "100%" }}>
      <div id='tradingview_c5dc0' style={{ height: "100%", width: "100%" }} />
    </div>
  );
}
