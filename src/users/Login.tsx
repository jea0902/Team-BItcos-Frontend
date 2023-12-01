import React from 'react'
import 로고후보 from "../image/bitcosLogo-blue.png";
import 유저아이콘 from "../image/userIcon.png";
import 비밀번호아이콘 from "../image/pwIcon.png"

const LogIn : React.FC = () => {
  return (
    <div className='LogIn-Container' style={{width:"100%"}}>
         <a className="logo" href="/"><img src={로고후보} alt="비트코스로고" style={{ width:"17vw",height:"auto"}}/></a> <br />
        방문하신 사이트의 주소가 아래와 일치하는지 확인해 주세요. <br />
        https://bitcos.com/
        <br />
        <input type="text" placeholder="아이디" style={{ borderColor : "#b1b1b1", padding:"0 40px 0 40px",width:"350px", height:"40px" ,backgroundImage : `url(${유저아이콘})`, backgroundSize:"contain", backgroundRepeat:"no-repeat"}} />
        <br />
        <input type="text"placeholder="비밀번호" style={{ borderColor : "#b1b1b1", padding:"0 40px 0 40px" ,width:"350px", height:"40px" ,backgroundImage : `url(${비밀번호아이콘})`, backgroundSize:"contain", backgroundRepeat:"no-repeat"}} />
        <br />
        <div>
          <input type="checkbox" /> 로그인 상태 유지
          IP보안 ON
        </div>

    </div>
  )
}
export default LogIn;