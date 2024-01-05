import React, {useEffect,useState} from 'react'
import axios, {AxiosRequestConfig} from 'axios';

    interface TickerResponse {
        market: string;
        trade_date: string;
        trade_time: string;
        trade_date_kst: string;
        trade_time_kst: string;
        trade_timestamp: number;
        opening_price: number;
        high_price: number;
        low_price: number;
        trade_price: number;
        prev_closing_price: number;
        change: 'RISE' | 'FALL' | 'EVEN'; // 예시 값에 따라 실제 가능한 값으로 수정
        change_price: number;
        change_rate: number;
        signed_change_price: number;
        signed_change_rate: number;
        trade_volume: number;
        acc_trade_price: number;
        acc_trade_price_24h: number;
        acc_trade_volume: number;
        acc_trade_volume_24h: number;
        highest_52_week_price: number;
        highest_52_week_date: string;
        lowest_52_week_price: number;
        lowest_52_week_date: string;
        timestamp: number;
    }

    const FetchFromUpbit: React.FC = () => {
        const [tickerData, setTickerData] = useState<TickerResponse | null>(null);
      
        useEffect(() => {
          const fetchData = async (): Promise<void> => {
            try {
              const response = await axios.get<TickerResponse>('http://api.upbit.com/v1/ticker');
              setTickerData(response.data);
            } catch (error) {
              console.error(error);
            }
          };
      
          fetchData();
        }, []); // 빈 배열을 전달하여 컴포넌트가 마운트되었을 때에만 useEffect가 실행되도록 함
      
        return (
          <div>
            <h1>Upbit Ticker Data</h1>
            {tickerData ? (
              <pre>{JSON.stringify(tickerData, null, 2)}</pre>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        );
      };

export default FetchFromUpbit;


//     const FetchFromUpbit: React.FC = () => {
//         console.log("useEffect is running");

//         const sdk = require('api')('@upbit/v1.4.2#1h2zv2al3jq48nm');

//         console.log("컴포넌트 렌더링");

//         useEffect(() => {
//             console.log("Before API request");
//             sdk.ticker()
//             .then(({data} : {data : TickerResponse}) => console.log(data))
//             .catch((err : Error) => console.error(err));
//         }, []);

//   return (
//     <>
//     </>
//   )
// }

// export default FetchFromUpbit;
