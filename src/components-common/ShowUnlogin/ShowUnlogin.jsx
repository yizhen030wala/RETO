import React from 'react'
import { Link } from 'react-router-dom';
import './ShowUnlogin.scss'
import User from '../../assets/img/Avatar/Mask Group.svg'
import '../../assets/fonts/iconfont/style.css'
import GreetingMessage from '../../global/GreetingMessage';

// import '../../assets/scssRule'



const ShowUnlogin = () => {
    return (
        <div className="UnLogin-box">
            <figure><img src={User} alt="" /></figure>
            <div className="hi"><GreetingMessage /></div>
            <ul className="menu">
            <li><Link to="/search">開始探索</Link></li>
            <li><Link to="/reto/Collections">我的景點</Link></li>
            <li><Link to="/reto/mytrip"> 行程表</Link></li>
            </ul>

            <Link to="/reto/login">
                <p className="in">登入/註冊</p>
            </Link>


        </div>
    )
}

export default ShowUnlogin
