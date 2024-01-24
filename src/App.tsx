import { Await, BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Main from './Main';
import VirtualFutureTrading from './virtualFutureTrading/VirtualFutureTrading';
import Nav from './Nav';
import LogIn from './users/LogIn';
import SignUp from './users/SignUp';
import BulletinBoard from './users/BulletinBoard/BulletinBoard';
import WritePost from './users/BulletinBoard/WritePost';
import FetchFromUpbit from './virtualFutureTrading/FetchFromUpbit';

// firestore의 데이터를 가져오려면
import { db, firestore, firebasApp } from './Firebase/firebase';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    // 데이터 추가
    const addUser = async () => {
      try {
        const userRef = await db.collection('Users').add({
          email : "jea0902@naver.com",
          password : "hihihi1!"
          });
          console.log("유저 추가", userRef.id);
        } catch (err) {
          console.log("Error adding User", err);
        }
      }
    
    // 데이터 조회
    const getUser = async (colId : string, docId : string) => {
      try {
        const doc = await db.collection(colId).doc(docId).get();
        if(doc.exists) {
          console.log(doc.data());
        } else {
          console.log("해당 dic 없음");
        }
        console.log("get : good");
      } catch (err) {
        alert("get : error");
        }
      }
    
    // 데이터 업데이트 - document를 완전히 덮어쓰는 것이 아니라 data에 있는 컬럼만 바뀜.
    const updateDoc = async (colId : string, docId : string, data : string) => {
      try {
        await db.collection(colId).doc(docId).update(data);
        console.log("update : good");
      } catch (err) {
        alert("update : error");
      }
    }

    // 데이터 삭제 - document
    const deleteDoc = async (colId : string, docId : string) => {
      try {
        await db.collection(colId).doc(docId).delete();
        console.log("delete document : good");
      } catch (err) {
        alert("delete document : error");
      }
    };

    // 데이터 삭제 - doc의 컬럼(필드)를 지우는 방법
    const deleteField = async (colId : string , docId : string, fieldName : string) => {
      try {
        const data : {[key : string]:any} = {};
        // data 객체의 타입을 명시적으로 지정
        data[fieldName] = firestore.FieldValue.delete();
        await db.collection(colId).doc(docId).update(data);
        console.log("delete field : good");
      } catch (err) {
        alert("delete field : err");
      }
    }
  }, [])


  return (
    <div className="App">
      {/* <Provider store =  {store}>
        <div>
          <Counter></Counter>
        </div>
      </Provider> */}
      <Nav />
      {/* BrowserRouter는 최상위 컴포넌트에서 한번 사용되어야 하고,
      아래 Main 컴포넌트보다 위에 있어야 먼저 렌더링이 되어서
      Main에서의 Link 컴포넌트가 라우팅이 된다. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Virtual-Future-Trading" element={<VirtualFutureTrading />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Board" element={<BulletinBoard />} />
          <Route path="/Write-post" element={<WritePost />} />
        </Routes>
      </BrowserRouter>
      <FetchFromUpbit />
    </div>
  );
}

export default App;
