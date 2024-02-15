// 行程頁和地圖頁當中景點卡片組件
import React from 'react';
// import "../css/SpotCard.css";
import "./SpotCard.scss"
import InfoCard from './InfoCard/InfoCard';
import BtnExchange from "./BtnExchange/BtnExchange.jsx"


const SpotCard = () => {
    return (
        <>
            <div className="spot_SpotCard">

                {/* 左側功能列 */}
                <div className="leftFunc_SpotCard">
                    {/* 拖曳 */}
                    <span className="icon-drag_indicator"></span>
                    {/* 替換 */}
                    <BtnExchange className="BtnExchange" />
                </div>

                {/* 右側景點資訊 */}
                <div className='InfoCard_wrap'>
                    {/* 序號 */}
                    <div className="num_SpotCard">1</div>
                    <InfoCard />
                </div>


                <span className="icon-delete loc-delete"></span>
            </div>
            {/* 刪除鍵 */}

        </>
    )
}

export default SpotCard
