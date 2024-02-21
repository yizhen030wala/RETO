import React from 'react';
import { Link } from 'react-router-dom';
import "./JourneyCard.scss"
import ButtonDel from "../../../components-common/Button/ButtonDel/ButtonDel.jsx"

const JourneyCard = ({ imageUrl, name, days }) => {
    return (
        <>
            <div className="journey_Card">

                {/* 右上角刪除按鈕 */}
                <div className="ctrl_ButtonDel">
                    <ButtonDel />
                </div>


                {/* 使用絕對路徑而不是相對路徑 */}
                <Link to="/reto/schedule">
                    {/* 圖片 */}
                    <div className="mytripcard_cover">
                        <img src={imageUrl} alt="spot" />
                    </div>

                    {/* 名稱 */}
                    <div className="mytripcard_text">
                        <div className="mytripcard_name">
                            {name}
                        </div>
                        <p className="mytripcard_day">{days}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default JourneyCard
