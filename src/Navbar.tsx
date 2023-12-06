// Navbar.js 또는 Navbar.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./css/Navbar.css";
import 파란로고 from "./image/bitcosLogo-blue.png";
import 로고후보2 from "./image/bitcosLogo-white-blueback.png";
import 햄버거메뉴아이콘 from "./image/customHamburgerIcon.png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <div className="container-fluid">
        <button className="navbar-toggler custom-toggler order-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <img src={햄버거메뉴아이콘} alt='custom-Hamburger-Icon' style={{width:"20px"}}/>
        </button>
        <a className="navbar-brand me-auto" href="/"><img src={로고후보2} alt="비트코스로고" style={{ width:"90px",height:"auto", marginLeft:"12vw"}}/></a>

        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkLabel">Offcanvas</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="#offcanvasDarkNavbar" aria-label="Close"></button>
          </div>
          
          
          <div className="offcanvas-body text-start">
            <ul className="navbar-nav mx-auto justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Virtual-Future-Trading">모의 선물거래소</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">입출금</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">투자내역</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/CommunityBoard">커뮤니티 게시판</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  트레이딩 지표
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">실시간 뉴스</a></li>
                  <li><a className="dropdown-item" href="#">경제 지표</a></li>
                  <li><a className="dropdown-item" href="#">매매기법 분석 지표</a></li>
                  <li><a className="dropdown-item" href="#">탑 트레이더 매매법</a></li>
                  <li><a className="dropdown-item" href="#">실시간 포지션</a></li>
                  <li><a className="dropdown-item" href="#">경제 캘린더</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>

              <li className="nav-item" style={{marginLeft:"15vw"}}>
                <a className="nav-link active" href="/LogIn">로그인</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/SignUp">회원가입</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
