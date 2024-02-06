import React from "react";
import NavBar from "../NavBar/NavBar";
import logo from "../../../assets/img_hsc/logo/logo.svg";
import "../CSS/home.css";
import { Link } from "react-router-dom"; //物件內用到連結跳轉就需要放

const HeaderHome = () => {
  return (
    <header className="bar_top_home">
      {/* LOGO */}
      <div className="logo_home">
        <Link to="/">
          <a href="./index.html">
            <img src={logo} alt="" />
          </a>
        </Link>
      </div>
      {/* 置頂切頁按鈕 */}
      <NavBar />
      {/* 對齊用(空div) */}
      <div className="empty_header"></div>
    </header>
  );
};

export default HeaderHome;
