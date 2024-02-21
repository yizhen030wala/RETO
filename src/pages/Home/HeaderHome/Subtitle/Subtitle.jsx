import React from 'react';
// import '../CSS/home.css';
import './Subtitle.scss';
// import login from '../../../../assets/img_hsc/login/login.svg';
import reto_bar from '../../../../assets/img_hsc/index/reto_bar_bare.svg';
import UnLogin from '../../../../components-common/ShowUnlogin/ShowUnlogin'
import User from '../../../../assets/img/Avatar/Mask Group.svg'
import Menu from '../../../../assets/img/icon/icon-black/menu.svg'

const Subtitle = () => {
    return (
        <div className="page_right">
            {/* 會員登入 */}
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
            {/* 垂直RETO字條 */}
            <div className="bar_col"><img src={reto_bar} alt="" /></div>
        </div>
    )
}

export default Subtitle;