
import {createSlice, configureStore, PayloadAction} from "@reduxjs/toolkit";
// 리덕스 툴킷 사용할 때 2개의 함수만 잘 사용하면 됨
// 실제 리듀서가 동작하는 createSlice(), store의 구성 설정인 configureStore()

import counterSlice from "./counterSlice";

// 예제 counter

// const counterSlice = createSlice({
//     name : 'counterSlice',
//     initialState : {value : 0},
//     reducers : {
//         up : (state, action) => {
//             state.value = state.value + action.payload;
//         }
//     }
// });

// Redux store 생성
const store = configureStore({
    reducer : {
        counter : counterSlice.reducer
        // tradingView : TradingViewSlice.reducer,
    },
});

export default store;

// // 상태의 타입 정의
// interface TradingViewState {
//     realtimeClosePrice: number | null;
//     // 실시간 종가
// }

// // 초기 상태 정의
// const initialState : TradingViewState = {
//     realtimeClosePrice: null,
// }

// // Redux Slice 생성
// const TradingViewSlice = createSlice({
//     name : 'tradingView',
//     initialState : TradingViewState = {
//         realtimeClosePrice : null,
//     },
//     reducers : {
//         // 액션 생성자와 리듀서를 동시에 정의
//         setRealtimeClosePrice : (state, action : PayloadAction<number>) => {
//             state.realtimeClosePrice = action.payload;
//         },
//     },
// });

// // 액션 생성자 내보내기
// export const setRealtimeClosePrice = (state : {tradingView : TradingViewState}) => state.tradingView.realtimeClosePrice;

