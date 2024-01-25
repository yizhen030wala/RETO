import React from 'react'
import './CSS/Showlogin.css'
import User from '../../assets/img/Avatar/Avatar login.svg'
// import Icon from '../../assets/fonts/iconfont/icon'

import '../../assets/fonts/iconfont/style.css'

const Showlogin = () => {
    return (
        <div className="Showlogin-box ">
            <figure><img src={User} alt="" /></figure>
            <p className="hi">哈囉，小旅!</p>
            <ul className="menu">
                <li><a href="#">開始探索</a></li>
                <li><a href="#">我的景點</a></li>
                <li><a href="#">行程表</a></li>
            </ul>
            <p><span className="icon-log-out"></span>登出</p>
        </div>
    )
}

export default Showlogin
