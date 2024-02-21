import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./MyMap.scss"
// import BreadCrumb_M from '../../components-common/BreadCrumb/BreadCrumb_M.jsx'
import ScheduleSheet from '../../components-common/ScheduleSheet/ScheduleSheet.jsx'
import DateSwiper from '../../components-common/DateSwiper/DateSwiper.jsx'
import MapCard from './MapCard/MapCard.jsx';
import MapPhone from '../MyMap phone/MapPhone.jsx';
import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'





const MyMap = () => {

    const daysOfWeek = ["五", "六", "日", "一", "二", "三", "四"]; // 定義星期數組
    const [sheets, setSheets] = useState([
        { numCards: 4, ids: ['recC1ydc0AuJM8rj0', 'rec34Y8PSu4ZxjDqi', 'recKs9HcwW5Onj1Ku', 'rec1crANNsC9wnnKv'], dayOfWeek: "五", times: ['10:00', '12:00', '14:00', '17:00'] },
        { numCards: 3, ids: ['rec1crANNsC9wnnKv', 'rec34Y8PSu4ZxjDqi', 'recKs9HcwW5Onj1Ku'], dayOfWeek: "六", times: ['11:00', '13:00', '14:00'] },
        { numCards: 2, ids: ['rec1crANNsC9wnnKv', 'reci4j2Nns6QDNrG5'], dayOfWeek: "日", times: ['12:00', '14:00'] },
        { numCards: 3, ids: ['recC1ydc0AuJM8rj0', 'rec34Y8PSu4ZxjDqi', 'recKs9HcwW5Onj1Ku'], dayOfWeek: "一", times: ['12:00', '14:00', '17:00'] },
        { numCards: 2, ids: ['rec1crANNsC9wnnKv', 'reci4j2Nns6QDNrG5'], dayOfWeek: "二", times: ['14:00', '17:00'] }
    ]);

    const addSheet = () => {
        const nextDayIndex = (sheets.length > 0 ? daysOfWeek.indexOf(sheets[sheets.length - 1].dayOfWeek) + 1 : 0) % 7; // 计算下一个星期的索引
        setSheets([...sheets, { numCards: 0, ids: [], dayOfWeek: daysOfWeek[nextDayIndex] }]); // 增加下一個星期的數據
    };


    // const [selectedSpot, setSelectedSpot] = useState(null);

    // const handleSpotClick = (spot) => {
    //     setSelectedSpot(spot);
    // };

    

    const [selectedSpotData, setSelectedSpotData] = useState(null);

    const handleSpotClick = (data) => {
        setSelectedSpotData(data);
        console.log(data)
    };

    return (
        <>
            <main className="SM_container">
                <div className="left_div">
                    {/* 麵包屑導覽列 */}
                    <div className="SM_wrap">
                        <BreadCrumb />
                    </div>

                    {/* 行程表表頭資訊 */}
                    <div className="tripHead">
                        {/* 行程表名稱+日期 */}
                        <div className="tripTitle">
                            {/* 行程表名稱 */}
                            <div>
                                <h3>北桃RARASO</h3>
                            </div>
                            {/* 行程表日期 */}
                            <div>
                                <h2>2022/2/23-2/27</h2>
                            </div>
                        </div>
                    </div>

                    <div className='scroll'>
                        {/* 行程天數列 */}
                        <div className='sticky'>
                            <DateSwiper />
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

                                        onSpotClick={handleSpotClick}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



                {/* 地圖欄位 */}
                < div className="right_div" >
                    <MapCard selectedSpotData={selectedSpotData} />
                </div >
            </main >
            <div className="phone_map_show">
                <MapPhone />
            </div>
        </>
    )
}

export default MyMap
