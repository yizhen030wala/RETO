import React from 'react';
import { Link } from "react-router-dom";

import "./ScheduleSheet.scss"

import SpotCard from '../ScheduleCard/SpotCard/SpotCard.jsx'
import ButtonDel_NB from '../Button/ButtonDel_NB/ButtonDel_NB.jsx'
import NoteInput from './NoteInput/NoteInput.jsx'
import TimeCard from '../ScheduleCard/TimeCard/TimeCard.jsx'

const ScheduleSheet = ({ numCards, ids, dayOfWeek = "五", times , onSpotClick }) => {
    const handleClick = (data) => {
        onSpotClick(data);
        
    };

    return (
        <fieldset className="schedule">
            {/* 行程表刪除鍵 */}
            <div className="loc-icon-more_horiz">
                <ButtonDel_NB />
            </div>

            {/* 星期N 動態生成星期幾的文字*/}
            <div className="schedule_day">星期{dayOfWeek}</div>

            {/* 備註 */}
            <NoteInput defaultNote="備註:開心出遊╰(*°▽°*)╯" />

            {/* 景點列表 */}
            <div className="spotList">
                {Array.from({ length: numCards }).map((_, index) => (
                    <React.Fragment key={index}>
                        <SpotCard id={ids[index]} time={times[index]} onClick={handleClick} />
                        {index !== numCards - 1 && <TimeCard />}
                    </React.Fragment>
                ))}
            </div>

            {/* 添加景點按鈕 */}
            <div className="btn_addspot-wrap">
                <Link to="/reto/Collections">
                <div className="btn_addspot" onClick={() => onAddSpotCard(sheetID)}>
                    <div className="btnAddSpotTitle">
                        <span className="icon-love icon-set"></span>
                        <h3 className='h3_title'>從收藏加入</h3>
                    </div>
                </div>
                </Link>
                <Link to="/search">
                <div className="btn_addspot" onClick={() => onAddSpotCard(sheetID)}>
                    <div className="btnAddSpotTitle">
                        <span className="icon-search icon-set"></span>
                        <h3 className='h3_title'>從探索加入</h3>
                    </div>
                </div>
                </Link>
            </div>
        </fieldset>
    );
}


export default ScheduleSheet;

