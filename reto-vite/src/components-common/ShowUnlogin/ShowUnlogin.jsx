import React from 'react'
import './CSS/ShowUnlogin.css'
import User from '../../assets/img/Avatar/Mask Group.svg'
// import Icon from '../../assets/fonts/iconfont/icon'

import '../../assets/fonts/iconfont/style.css'



const ShowUnlogin = () => {
    return (
        <div className="UnLogin-box">
            <figure><img src={User} alt=""/></figure>
            <p className="hi">哈囉，陌生人!</p>
            <ul className="menu">
                <li><a href="#">開始探索</a></li>
                <li><a href="#">我的景點</a></li>
                <li><a href="#">行程表</a></li>
            </ul>
            <p>
                {/* <span className="icon-log-out"></span> */}
                登入/註冊</p>
        </div>
    )
}

export default ShowUnlogin
