// 替換行程按鈕
import React, { useState } from 'react';
import LightboxExchange from '../LightboxExchange/LightboxExchange.jsx'; // 引入燈箱組件

import "./BtnExchange.scss"

const BtnExchange = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <>
            <span className="icon-exchange icon_point" onClick={openLightbox}></span >
            {isLightboxOpen && <LightboxExchange onClose={closeLightbox} />}
            {/* 顯示燈箱 */}
        </>
    )
}

export default BtnExchange;