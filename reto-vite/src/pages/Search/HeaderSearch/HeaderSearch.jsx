import React from 'react';
import { Link } from 'react-router-dom'; 
import '../CSS/Search.Scss';
import Recommends from '../Recommends/Recommends';
import magnifier from '../../../assets/img_hsc/search_bar/magnifier.svg';
import filter from '../../../assets/img_hsc/search_bar/filter.svg';
import logoGreen from '../../../assets/img_hsc/logo/logo_green.svg';

// import NavBar from '../NavBar/NavBar';
// import login from '../../../assets/img_hsc/login/login-yellow.svg';
// import LoginBtn from './LoginBtn_home.jsx';
// import './LoginBtn_home.scss';


// -------------Jenny
import UnLogin from '../../../components-common/ShowUnlogin/ShowUnlogin.jsx'
import './HeaderSearch.scss';
import User from '../../../assets/img/Avatar/Mask Group.svg'
import Menu from '../../../assets/img/icon/icon-black/menu.svg'

const HeaderSearch = () => {
  return (
    <>
      <header className="header_search">
        {/* LOGO  */}
        <div className='logo'>
          <Link to="/home">
            <img src={logoGreen} alt="RETO logo" />
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
        {/* 會員登入  */}
        <div className="user">
          <div className="hover-trigger">
            <figure className="user_box">
              <img src={User} alt="user" />
            </figure >

            <figure className="menu_box">
              <img src={Menu} alt="" />
            </figure>
          </div>
          <div className="popup-content">
            <UnLogin />

          </div>

        </div>

      </header>
      {/* ------------------------------------------ */}
      <div>
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
      </div>
    </>
  );
};
export default HeaderSearch;
