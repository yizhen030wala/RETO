import React from 'react';
import NavBar from '../NavBar/NavBar';

const HeaderHome = () => {
    return (
        <header className="bar_top">
            {/* LOGO */}
            <div className="logo">
                <a href="./index.html"><img src="./Images/LOGO.svg" alt="" /></a>
            </div>
            {/* 置頂切頁按鈕 */}
            <NavBar />
            {/* 對齊用(空div) */}
            <div></div>
        </header>
    )
}

export default HeaderHome;