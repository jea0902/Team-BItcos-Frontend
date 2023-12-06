//     // Coin.tsx 내용

// import express from "express";
// import Binance from 'node-binance-api';

//     const API_APP_API_KEY = process.env.REACT_APP_API_KEY;
//     const API_APP_API_SECRET = process.env.REACT_APP_API_SECRET;
//     const app = express.Router();
//     app.use(express.json());
//     app.use(express.urlencoded({ extended: true }));

//     const coins = [
//         {
//             'BTCUSDT' : 'BTCUSDT',
//         }
//     ]

//     const binance = new Binance().options(
//         {
//             API_APP_API_KEY,
//             API_APP_API_SECRET
//         }
//     )

//     app.get("/", async (req, res) => {
//         try {
//             let ticker = await binance.prices();
//             console.log("비트코인 가격 :", ticker.BTCUSDT);
//             res.json([ticker.BTCUSDT]);
//         } catch (error) {
//             console.error("에러 발생:", error);
//             res.status(500).json({ error: "Internal Server Error" });
//         }
//     });

//     // app.get("/", (req, res) => {
//     //     res.json([ticker.BTCUSDT])
//     // })

//     // let ticker = await binanace.prices();
//     // console.log("비트코인 가격 :",ticker.BTCUSDT);
    
// export default app;

// Coin.tsx

import React, { useState, useEffect } from 'react';

const Coin: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/coin'); // 서버의 /api/coin 경로에 요청
        const data = await response.json();
        setPrice(data[0]);
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // 5초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트가 언마운트되면 interval 클리어
  }, []);

  return (
    <div>
      <h1>비트코인 가격: {price}</h1>
    </div>
  );
}

export default Coin;