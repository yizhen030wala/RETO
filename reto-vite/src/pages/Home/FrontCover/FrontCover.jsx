import React from "react";
import "../CSS/home.scss";
import bg_land_page from "../../../assets/img_hsc/index/LandingPageBackground.svg";
import HeaderHome from "../HeaderHome/HeaderHome";
import { Link } from "react-router-dom"; //物件內用到連結跳轉就需要放

const FrontCover = () => {
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
          {/* <div className="bg_white bar1"></div>
                            <div className="bg_white bar2"></div> */}
          <Link to="/Search">
            <div className="btn">
              <a href="#">免費開始</a>
            </div>
          </Link>
          <div className="bg">
            <img src={bg_land_page} alt="" />
          </div>
          {/* 底圖暫為一張大圖包含天空 */}
        </div>
      </div>
    </div>
  );
};

export default FrontCover;
