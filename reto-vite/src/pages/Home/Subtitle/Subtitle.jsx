import React from 'react';
import '../CSS/home.css';
import login from '../../../assets/img_hsc/login/login.svg';
import reto_bar from '../../../assets/img_hsc/index/reto_bar.svg';


const Subtitle = () => {
    return (
        <div className="page_right">
            {/* 會員登入 */}
            <div className="user"> <a href="#"><img src={login} alt="" /></a></div>
            {/* 垂直RETO字條 */}
            <div className="bar_col"><img src={reto_bar} alt="" /></div>
        </div>
    )
}

export default Subtitle;