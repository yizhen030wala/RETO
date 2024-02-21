import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'; //物件內用到連結跳轉就需要放
import './Header.scss'
import Logo from '../../assets/img/RETO logo//logo & text/32px.svg'
import User from '../../assets/img/Avatar/Mask Group.svg'
import Menu from '../../assets/img/icon/icon-black/menu.svg'
import UnLogin from '../ShowUnlogin/ShowUnlogin.jsx'
import Login from '../ShowLogin/Showlogin.jsx'
import Onlylogo from '../../assets/img/RETO logo/logo/48px.svg'


function Header() {
  const [position, setPosition] = useState(window.scrollY)
  // console.log(`position:${position}`);
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      // console.log(`moving:${moving}`);

      setVisible(position > moving);
      setPosition(moving)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  })

  const cls = visible ? "visible" : "hidden";


  return (
    <div className={cls}>
      <div className="header">
        {/* LOGO  */}
        <div className='logo'>
          <Link to="/">
            <img src={Logo} alt="RETO logo" />
          </Link>
        </div>
        <div className="only_logo">
          <Link to="/">
            <img src={Onlylogo} alt="RETO logo" />
          </Link>
        </div>
        {/* 置頂導覽按鈕  */}
        <nav>
          <ul className="nav_btn">
            <li><Link to="/search">開始探索</Link></li>
            <li><Link to="/reto/Collections">我的景點</Link></li>
            <li><Link to="/reto/mytrip"> 行程表</Link></li>
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

      </div>
    </div>
  )
}

export default Header
