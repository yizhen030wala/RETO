import React from "react";
// import NavBar from "../NavBar/NavBar";
import logo from "../../../assets/img_hsc/logo/logo.svg";
import "./HeaderHome.scss";
import { Link } from "react-router-dom"; 

const HeaderHome = () => {
  return (
    <header className="header_home">
      {/* LOGO  */}
      <div className='logo'>
        <Link to="/home">
          <img src={logo} alt="RETO logo" />
        </Link>
      </div>
      {/* 置頂導覽按鈕  */}
      <nav>
        <ul className="nav_btn">
          <li><Link to="/search">開始探索</Link></li>
          <li><Link to="/Collections">我的景點</Link></li>
          <li><Link to="/mytrip"> 行程表</Link></li>
        </ul>
      </nav>
      {/* 對齊用(空div) */}
      <div className="empty_header"></div>
    </header>
  );
};

export default HeaderHome;
