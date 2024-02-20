// 行程頁和地圖頁當中交通時間卡片組件
import React from 'react'
// import "../css/TimeCard.css"
import "./TimeCard.scss"

const TimeCard = () => {
    return (
        <>
            <div className="traffic">
                <div className="trafficInfo">
                    <span className="icon-car"></span>
                    <div className="driveTime">開車時間約 0.5 小時</div>
                </div>
            </div>
        </>
    )
}

export default TimeCard
