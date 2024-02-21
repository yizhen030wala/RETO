import React, { useState, useEffect } from "react";
// import NavBar from "../NavBar/NavBar";
import logo from "../../../assets/img/RETO logo/logo white.svg";
import "./HeaderHome.scss";
import { Link } from "react-router-dom";
import Onlylogo from '../../../assets/img/RETO logo/logo/logo-white.svg'

const HeaderHome = () => {

  //背景變色
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHomeElement = document.querySelector('.header_home');
      if (scrollPosition <= 100) {
        headerHomeElement.classList.remove('change-bg-color-header');
      } else {
        headerHomeElement.classList.add('change-bg-color-header');
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className="header_home">
      {/* LOGO  */}
      <div className='logo'>
        <Link to="/">
          <img src={logo} alt="RETO logo" />
        </Link>
      </div>
      <div className='only_logo'>
        <Link to="/">
          <img src={Onlylogo} alt="RETO logo" />
        </Link>
      </div>
      {/* 置頂導覽按鈕  */}
      <nav>
        <ul className="nav_btn_home">
          <li><Link to="/search">開始探索</Link></li>
          <li><Link to="/reto/Collections">我的景點</Link></li>
          <li><Link to="/reto/mytrip"> 行程表</Link></li>
        </ul>
      </nav>
      {/* 對齊用(空div) */}
      <div className="empty_header"></div>
    </header>
  );
};

export default HeaderHome;
