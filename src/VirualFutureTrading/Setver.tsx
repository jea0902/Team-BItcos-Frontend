// // Server.tsx 내용

// import express from "express";
// import cors from 'cors';
// import coinRouter from './Coin';

// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use("/Coin",coinRouter);

// app.listen(PORT, () => console.log(`${PORT} 작동중`))

// Server.ts

import express from 'express';
import cors from 'cors';
import Binance from 'node-binance-api';

const API_APP_API_KEY = process.env.REACT_APP_API_KEY;
const API_APP_API_SECRET = process.env.REACT_APP_API_SECRET;
const app = express();
const binance = new Binance().options({
  API_APP_API_KEY,
  API_APP_API_SECRET
});

app.use(cors());

app.get('/api/coin', async (req, res) => {
  try {
    const ticker = await binance.prices();
    res.json([ticker.BTCUSDT]);
  } catch (error) {
    console.error("에러 발생:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`${PORT} 작동중`));