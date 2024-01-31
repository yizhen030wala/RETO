import React from 'react';
import './Search.css';
import NavBar from '../NavBar/NavBar';
import Recommends from '../Recommends/Recommends';
import magnifier from '../../../assets/img_hsc/search_bar/magnifier.svg';
import login from '../../../assets/img_hsc/login/login-yellow.svg';
import filter from '../../../assets/img_hsc/search_bar/filter.svg';
import logoGreen from '../../../assets/img_hsc/logo/logo_green.svg';

const HeaderSearch = () => {
  return (
    <header>
      <div className="bar_top">
        {/* LOGO */}
        <h1 className="logo">
          <a href="./index.html">
            <img src={logoGreen} alt="" />
          </a>
        </h1>
        {/* 置頂切頁按鈕 */}
        <NavBar />
        {/* 會員登入 */}
        <div className="login">
          <a href="#">
            <img src={login} alt="" />
          </a>
        </div>
      </div>
      {/* 搜尋列 */}
      <div className="search">
        <div className="bar_search">
          <div>
            {/* 放大鏡icon */}
            <figure>
              <img src={magnifier} alt="" />
            </figure>
            <input type="text" placeholder="想去哪裡玩" />
          </div>
          <div>
            {/* 篩選圖片 */}
            <button>
              <img src={filter} alt="" />
            </button>
            {/* 查詢按鈕 */}
            <a href="">查詢</a>
          </div>
        </div>
        {/* 建議/推薦 */}
        <Recommends />
      </div>
    </header>
  );
};
export default HeaderSearch;
