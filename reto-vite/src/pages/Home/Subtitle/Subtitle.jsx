import React from 'react';
import '../CSS/home.css';
import './LoginBtn.scss';
import login from '../../../assets/img_hsc/login/login.svg';
import reto_bar from '../../../assets/img_hsc/index/reto_bar_bare.svg';
import LoginBtn from "./LoginBtn";
import { Link } from 'react-router-dom'; //物件內用到連結跳轉就需要放


const Subtitle = () => {
    return (
        <div className="page_right">
            {/* 會員登入 */}
            <LoginBtn />
            {/* <div className="login_home"> <a href="#"><img src={login} alt="" /></a></div> */}
            {/* 垂直RETO字條 */}
            <div className="bar_col"><img src={reto_bar} alt="" /></div>
        </div>
    )
}

export default Subtitle;