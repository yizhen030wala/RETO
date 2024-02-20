import React, { useState, useEffect } from "react";
import "../CSS/home.scss";
import bg_land_page from "../../../assets/img_hsc/index/bg-noSky&Sun.svg";
// import sun from "../../../assets/img_hsc/index/Sun.svg";
// import moon from "../../../assets/img_hsc/index/Moon.svg";
import HeaderHome from "../HeaderHome/HeaderHome";
import { Link } from "react-router-dom"; //物件內用到連結跳轉就需要放

const FrontCover = () => {

  //太陽變色
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sunElement = document.querySelector('.sun');
      if (scrollPosition <= 100) {
        sunElement.classList.remove('change-bg-color-sun');
      } else {
        sunElement.classList.add('change-bg-color-sun');
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //背景變色
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const boxAttentionElement = document.querySelector('.box_attention');
      if (scrollPosition <= 100) {
        boxAttentionElement.classList.remove('change-bg-color-bg');
      } else {
        boxAttentionElement.classList.add('change-bg-color-bg');
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="page_left">
      <HeaderHome />
      <div className="area_attention">
        {/* RETO右側欄位暫時放圖片 */}
        {/* 標題及按鈕 */}
        <div className="box_attention">
          {/* 標題及按鈕使用position */}
          <p className="slogan1">可愛又輕便的行程規劃器</p>
          <p className="slogan2">讓旅藤代替苦惱的你</p>
          <Link to="/Search">
            <div className="btn_freeStart">
              <div className="btn_start">免費開始</div>
            </div>
          </Link>
          <div className="bg_home">
            <div className="sun"></div>
            <figure className="bg_clean"><img src={bg_land_page} alt="" /></figure>
          </div>
          {/* 底圖暫為一張大圖包含天空 */}
        </div>
      </div>
    </div>
  );
};

export default FrontCover;
