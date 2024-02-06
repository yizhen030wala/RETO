import React from 'react'
import { Link } from 'react-router-dom'; //物件內用到連結跳轉就需要放
import './LoginBtn.scss'
import User from '../../../assets/img/Avatar/Mask Group.svg'
import Menu from '../../../assets/img/icon/icon-black/menu.svg'
import UnLogin from '../../../components-common/ShowUnlogin/ShowUnlogin.jsx'
import Login from '../../../components-common/ShowLogin/Showlogin.jsx'


const LoginBtn = () => {
    return (
        <>
        {/* 會員登入  */}
        <div className="user">
          <div className="hover-trigger">
            <figure className="user_box">
              <a href="#">
                <img src={User} alt="user" />
              </a>
            </figure >

            <figure className="menu_box">
              <a href="" id='menu'><img src={Menu} alt="" /></a>
            </figure>
          </div>
          <div className="popup-content">
            <UnLogin/>
          </div>
        </div>
        </>
    )
}

export default LoginBtn;