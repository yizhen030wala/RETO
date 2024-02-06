import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/ShowUnlogin.css'
import User from '../../assets/img/Avatar/Mask Group.svg'
import '../../assets/fonts/iconfont/style.css'
import GreetingMessage from '../../global/GreetingMessage';

// import '../../assets/scssRule'



const ShowUnlogin = () => {
    return (
        <div className="UnLogin-box">
            <figure><img src={User} alt=""/></figure>
            <div className="hi"><GreetingMessage/></div>
            <ul className="menu">
                <li><a href="#">開始探索</a></li>
                <li><a href="#">我的景點</a></li>
                <li><a href="#">行程表</a></li>
            </ul>
            
            <Link to="/login">
                <p className="in">登入/註冊</p>
            </Link>
            

        </div>
    )
}

export default ShowUnlogin
