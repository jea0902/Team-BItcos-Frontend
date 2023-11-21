// Navbar.js 또는 Navbar.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <div className="container-fluid">
        <button className="navbar-toggler order-0 ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand me-auto" href="#">코인의 민족</a>
        
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">오프캔버스</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body text-center">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">모의 선물 거래소</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">입출금</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">투자내역</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">코인동향</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  트레이딩 지표
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">실시간 뉴스</a></li>
                  <li><a className="dropdown-item" href="#">경제 지표</a></li>
                  <li><a className="dropdown-item" href="#">매매기법 분석 지표</a></li>
                  <li><a className="dropdown-item" href="#">실시간 포지션</a></li>
                  <li><a className="dropdown-item" href="#">경제 캘린더</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
