import React from 'react'
import './Showlogin.scss'
import User from '../../assets/img/Avatar/Avatar login.svg'
// import Icon from '../../assets/fonts/iconfont/icon'

import '../../assets/fonts/iconfont/style.css'

const Showlogin = () => {
    return (
        <div className="Showlogin-box ">
            <figure><img src={User} alt="" /></figure>
            <p className="hi">哈囉，小旅!</p>
            <ul className="menu">


                <li><Link to="/search">開始探索</Link></li>
                <li><Link to="/reto/Collections">我的景點</Link></li>
                <li><Link to="/reto/mytrip"> 行程表</Link></li>
            </ul>
            <p className='in'><span className="icon-log-out"></span>登出</p>
        </div>
    )
}

export default Showlogin
