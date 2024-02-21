// 加入時間的版本============================================================================

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Schedule.scss"
import Lightbox from '../../components-common/Lightbox/index'
import LightboxLine from '../../components-common/LightboxLine/index'
import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'
import ScheduleSheet from '../../components-common/ScheduleSheet/ScheduleSheet.jsx'
import DateSwiper from '../../components-common/DateSwiper/DateSwiper.jsx';

const Schedule = () => {
    const daysOfWeek = ["五", "六", "日", "一", "二", "三", "四"]; // 定義星期數組
    const [sheets, setSheets] = useState([
        { numCards: 5, ids: ['rec0vbwMgyWJ5IeCu', 'recvjJ772H4T94nK0', 'recqZlvW8XiL88RLw', 'recEIwQyt3o3creQ7', 'recu1EzORKvlSjM0L'], dayOfWeek: "五", times: ['10:00', '12:00', '14:00', '17:00', '19:00'] },
        { numCards: 3, ids: ['recnN4yrnY4S93bBq', 'recKs9HcwW5Onj1Ku', 'recaoATObIwNp09oU'],dayOfWeek: "六" , times:['11:00', '13:00', '14:00'] },
        { numCards: 2, ids: ['rec1crANNsC9wnnKv', 'reci4j2Nns6QDNrG5'],dayOfWeek: "日" , times: ['12:00', '14:00'] },
        { numCards: 3, ids: ['recC1ydc0AuJM8rj0', 'rec34Y8PSu4ZxjDqi', 'recKs9HcwW5Onj1Ku'],dayOfWeek: "一" , times: ['12:00', '14:00', '17:00'] },
        { numCards: 2, ids: ['rec1crANNsC9wnnKv', 'reci4j2Nns6QDNrG5'],dayOfWeek: "二" , times: ['14:00', '17:00'] }
    ]);

    const addSheet = () => {
        const nextDayIndex = (sheets.length > 0 ? daysOfWeek.indexOf(sheets[sheets.length - 1].dayOfWeek) + 1 : 0) % 7; // 計算下一個星期
        setSheets([...sheets, { numCards: 0, ids: [], dayOfWeek: daysOfWeek[nextDayIndex], times: [] }]); // 增加下一個星期的數據
    };

    return (
        <>
            <main className="Schedule_container">
                {/* bar_stick 手機板專用的部分 */}
                <div className='bar_stick'>
                    {/* 麵包屑導覽列 */}
                    <div className="wrap">
                        <BreadCrumb />
                    </div>
                    {/* 行程表表頭資訊 */}
                    <div className="tripHead">
                        {/* 行程表名稱+日期 */}
                        <div className="tripTitle">
                            {/* 行程表名稱 */}
                            <div>
                                <h3 className='h3_title'>北桃RARASO</h3>
                            </div>
                            {/* 行程表日期 */}
                            <div>
                                <h2 className='day_font day_select'>2022/2/23-2/27</h2>
                            </div>
                        </div>
                        {/* 功能按鈕 */}
                        <div className="tripFunc">
                            {/* 開始:路線整理的燈箱效果 */}
                            <div className='LB-container'>
                                <LightboxLine />
                            </div>
                            {/* 結束:路線整理的燈箱效果 */}

                            {/* 行李清單 */}
                            <div className='LB-container'>
                                <Lightbox />
                            </div>

                            <Link to='/reto/mymap'><span className="set_icon icon-map "></span></Link>
                        </div>
                    </div>
                    {/* 行程天數列 */}
                    <div className='dataSwiper_wrap'>
                        <DateSwiper />
                    </div>
                </div>
                {/* 行程表顯示外框 */}
                <div className="schedule-wrap">
                    <div className="scheduleList">
                        {sheets.map((sheet, index) => (
                            <ScheduleSheet
                                key={index}
                                numCards={sheet.numCards}
                                ids={sheet.ids}
                                dayOfWeek={sheet.dayOfWeek}
                                times={sheet.times} // 將時間屬性傳遞給 ScheduleSheet
                            />
                        ))}
                        <div className='btn-add-control' onClick={addSheet}>
                            <span className='icon-add icon-add-color'></span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Schedule;



