import React, { useState, useEffect } from "react";
import "../CSS/home.scss";
import bg_land_page from "../../../assets/img_hsc/index/bg-noSky&Sun.svg";
import slogan1 from "../../../assets/img/banner/banner element/ch-small/title1.svg";
import slogan2 from "../../../assets/img/banner/banner element/ch-small/title2.svg";
import mobile_slogan from "../../../assets/img/banner/banner element/ch-small/title phone.svg";
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
          <figure className="slogan1"><img src={slogan1} alt="主頁標語1" /></figure>
          <figure className="slogan2"><img src={slogan2} alt="主頁標語2" /></figure>
          <figure className="mobile_slogan"><img src={mobile_slogan} alt="行動裝置標語" /></figure>
          <Link to="/Search">
            <div className="btn_freeStart">
              <div className="btn_start">免費開始</div>
            </div>
          </Link>
          <div className="bg_home">
            <div className="sun"></div>
            <figure className="bg_clean"><img src={bg_land_page} alt="底圖" /></figure>
          </div>
          {/* 底圖暫為一張大圖包含天空 */}
        </div>
      </div>
    </div>
  );
};

export default FrontCover;
