import React, { useState } from "react";
import '../CSS/Collections.scss';
import logo_black from "../../../assets/img_hsc/logo/logo_black.svg";
import LoginBtn from './LoginBtn';
import { Link } from "react-router-dom"; //物件內用到連結跳轉就需要放

const HeaderCollections = () => {
  return (
    <header className="header_collections">
      {/* LOGO */}
      <div className="logo_collections">
        <Link to="/">
          <a href="./index.html">
            <img src={logo_black} alt="" />
          </a>
        </Link>
      </div>
      {/* 置頂切頁按鈕 */}
      <NavBar />
      {/* 會員登入 */}
      <LoginBtn />
    </header>
  );
};

export default HeaderCollections;
