// *firebase.js는 파이어베이스 api를 쓰기 위한 오브젝트를 불러오는 엔트리 파일.
// 설정 값을 github에 올리면 안되기에 .env 파일로 설정값을 따로 관리


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// firebase 설정과 관련된 개인정보 .env처리
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_API_ID,
  measurementId: process.env.REACT_APP_FB_MESUREMENT_ID
};

// firebaseConfig 정보로 firebase 시작
const firebasApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebasApp);

// fitebase의 firestore 인스턴스를 변수에 저장
const firestore = initializeApp.firestore();

// 클라우드 파이어스토어 초기화 및 서비스 참조 가져오기
const db = firebasApp.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export {firestore, firebasApp, db};
