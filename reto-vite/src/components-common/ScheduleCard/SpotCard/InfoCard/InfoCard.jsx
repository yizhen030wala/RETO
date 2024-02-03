import React from 'react';
import "../css/InfoCard.css";


const InfoCard = () => {
    return (
        <>
            {/* 右側景點資訊 */}
            <div className="info_SpotCard">
                {/* 圖片 */}
                <figure className="pic_SpotCard">
                    <img src="https://images.unsplash.com/photo-1617422725360-45b7671f980b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </figure>
                {/* 景點名稱相關資訊 */}
                <div className="spotInfo_SpotCard">
                    {/* 景點時間抬頭 */}
                    <div className="spotTitle">
                        {/* 圖標時間集合 */}
                        <div className="iconTime">
                            {/* 景點圖標 */}
                            <div className="icon">
                                <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
                            </div>
                            {/* 到達時間 */}
                            <div className="time">12:03 到達</div>
                        </div>

                    </div>

                    {/* 地點名稱 */}
                    <div className="spotName_Fuc">
                        <div className="spotName">大稻埕魯肉飯</div>
                        <div className="btn-copy">
                            <span className="icon-content_copy"></span>
                        </div>
                    </div>
                    {/* 建議停留時間 */}
                    <div className="adviseTime">建議停留時間 1 hr</div>
                </div>
            </div>

        </>
    )
}

export default InfoCard
