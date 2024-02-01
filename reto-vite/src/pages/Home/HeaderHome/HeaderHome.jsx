import React from 'react';
import NavBar from '../NavBar/NavBar';
import logo from '../../../assets/img_hsc/logo/logo.svg';
import '../CSS/home.css';

const HeaderHome = () => {
    return (
        <header className="bar_top_home">
            {/* LOGO */}
            <div className="logo">
                <a href="./index.html"><img src={logo} alt="" /></a>
            </div>
            {/* 置頂切頁按鈕 */}
            <NavBar />
            {/* 對齊用(空div) */}
            <div></div>
        </header>
    )
}

export default HeaderHome;