// import React from 'react'
// import { Link } from 'react-router-dom';
// import "./Schedule.scss"
// import Lightbox from '../../components-common/Lightbox/index'
// import LightboxLine from '../../components-common/LightboxLine/index'
// import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'
// import ScheduleSheet from '../../components-common/ScheduleSheet/ScheduleSheet.jsx'
// import DateSwiper from '../../components-common/DateSwiper/DateSwiper.jsx';

// const Schedule = () => {
//     return (
//         <>
//             <main className="Schedule_container">

//                 {/* bar_stick 手機板專用的部分 */}
//                 <div className='bar_stick'>
//                     {/* 麵包屑導覽列 */}
//                     <div className="wrap">
//                         <BreadCrumb />
//                     </div>

//                     {/* 行程表表頭資訊 */}
// <div className="tripHead">
//     {/* 行程表名稱+日期 */}
//     <div className="tripTitle">
//         {/* 行程表名稱 */}
//         <div>
//             <h3 className='h3_title'>旅藤台南行</h3>
//         </div>
//         {/* 行程表日期 */}
//         <div>
//             <h2 className='day_font day_select'>2022/2/23-2/26</h2>
//         </div>
//     </div>
//     {/* 功能按鈕 */}
//     <div className="tripFunc">
//         {/* 開始:路線整理的燈箱效果 */}
//         <div className='LB-container'>
//             <LightboxLine />
//         </div>
//         {/* 結束:路線整理的燈箱效果 */}


//         {/* 行李清單 */}
//         <div className='LB-container'>
//             <Lightbox />
//         </div>

//         <Link to='/mymap'><span className="set_icon icon-map "></span></Link>
//     </div>
// </div>

//                     {/* 行程天數列 */}
//                     <div className='dataSwiper_wrap'>
//                         <DateSwiper />
//                     </div>
//                 </div>

//                 {/* 行程表顯示外框 */}
//                 <div className="schedule-wrap">

//                     {/* 行程表內容 */}
//                     <div className="scheduleList">

//                         {/* 行程表一 */}
//                         <ScheduleSheet />
//                         {/* 行程表一 */}
//                         <ScheduleSheet />
//                         {/* 行程表一 */}
//                         <ScheduleSheet />
//                         {/* 行程表一 */}
//                         <ScheduleSheet />
//                         {/* 行程表一 */}
//                         <ScheduleSheet />

//                         {/* 添加行程表按鈕 */}
//                         <div className='btn-add-control'>
//                             <span className='icon-add icon-add-color'></span>
//                         </div>

//                     </div>
//                 </div>
//             </main >
//         </>
//     )
// }

// export default Schedule


// -----------------API串接-----------------------------------------🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶🔶

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./Schedule.scss"
// import Lightbox from '../../components-common/Lightbox/index'
// import LightboxLine from '../../components-common/LightboxLine/index'
// import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'
// import ScheduleSheet from '../../components-common/ScheduleSheet/ScheduleSheet.jsx'
// import DateSwiper from '../../components-common/DateSwiper/DateSwiper.jsx';

// const Schedule = () => {
//     // State to manage data source IDs for each ScheduleSheet
//     const [dataSourceIDs, setDataSourceIDs] = useState(["rec1crANNsC9wnnKv", "rec1crANNsC9wnnKv", "rec1crANNsC9wnnKv", "rec1crANNsC9wnnKv", "rec1crANNsC9wnnKv"]);

//     // Function to update data source ID for a specific ScheduleSheet
//     const handleUpdateDataSourceID = (index, id) => {
//         const updatedIDs = [...dataSourceIDs];
//         updatedIDs[index] = id;
//         setDataSourceIDs(updatedIDs);
//     };

//     return (
//         <>
//             <main className="Schedule_container">
//                 {/* bar_stick 手機板專用的部分 */}
//                 <div className='bar_stick'>
// {/* 麵包屑導覽列 */}
// <div className="wrap">
//     <BreadCrumb />
// </div>
// {/* 行程表表頭資訊 */}
// <div className="tripHead">
//     {/* 行程表名稱+日期 */}
//     <div className="tripTitle">
//         {/* 行程表名稱 */}
//         <div>
//             <h3 className='h3_title'>旅藤台南行</h3>
//         </div>
//         {/* 行程表日期 */}
//         <div>
//             <h2 className='day_font day_select'>2022/2/23-2/26</h2>
//         </div>
//     </div>
//     {/* 功能按鈕 */}
//     <div className="tripFunc">
//         {/* 開始:路線整理的燈箱效果 */}
//         <div className='LB-container'>
//             <LightboxLine />
//         </div>
//         {/* 結束:路線整理的燈箱效果 */}


//         {/* 行李清單 */}
//         <div className='LB-container'>
//             <Lightbox />
//         </div>

//         <Link to='/mymap'><span className="set_icon icon-map "></span></Link>
//     </div>
// </div>
// {/* 行程天數列 */}
// <div className='dataSwiper_wrap'>
//     <DateSwiper />
// </div>
//                 </div>
//                 {/* 行程表顯示外框 */}
//                 <div className="schedule-wrap">
//                     {/* 行程表內容 */}
//                     <div className="scheduleList">
//                         {dataSourceIDs.map((id, index) => (
//                             <ScheduleSheet key={index} dataSourceID={id} onUpdateDataSourceID={(newID) => handleUpdateDataSourceID(index, newID)} />
//                         ))}
//                         {/* 添加行程表按鈕 */}
//                         <div className='btn-add-control'>
//                             <span className='icon-add icon-add-color'></span>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }

// export default Schedule;


// =======================================API第二版=====================

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./Schedule.scss"
// import Lightbox from '../../components-common/Lightbox/index'
// import LightboxLine from '../../components-common/LightboxLine/index'
// import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'
// import ScheduleSheet from '../../components-common/ScheduleSheet/ScheduleSheet.jsx'
// import DateSwiper from '../../components-common/DateSwiper/DateSwiper.jsx';

// const Schedule = () => {
//     const [scheduleSheets, setScheduleSheets] = useState([{ id: 1, dataSourceID: "rec1crANNsC9wnnKv", spotCards: [] }]);

//     // Function to add a new ScheduleSheet
//     const handleAddScheduleSheet = () => {
//         const newSheet = {
//             id: scheduleSheets.length + 1,
//             dataSourceID: "rec1crANNsC9wnnKv",
//             spotCards: []
//         };
//         setScheduleSheets([...scheduleSheets, newSheet]);
//     };

//     // Function to update data source ID for a specific ScheduleSheet
//     const handleUpdateDataSourceID = (sheetID, newID) => {
//         const updatedSheets = scheduleSheets.map(sheet => {
//             if (sheet.id === sheetID) {
//                 return { ...sheet, dataSourceID: newID };
//             }
//             return sheet;
//         });
//         setScheduleSheets(updatedSheets);
//     };

//     // Function to add a SpotCard to a ScheduleSheet
//     const handleAddSpotCard = (sheetID) => {
//         const updatedSheets = scheduleSheets.map(sheet => {
//             if (sheet.id === sheetID) {
//                 const newSpotCards = [...sheet.spotCards, { id: sheet.spotCards.length + 1 }];
//                 return { ...sheet, spotCards: newSpotCards };
//             }
//             return sheet;
//         });
//         setScheduleSheets(updatedSheets);
//     };

//     return (
//         <>
//             <main className="Schedule_container">
//                 {/* bar_stick 手機板專用的部分 */}
//                 <div className='bar_stick'>
//                     {/* 麵包屑導覽列 */}
//                     <div className="wrap">
//                         <BreadCrumb />
//                     </div>
//                     {/* 行程表表頭資訊 */}
//                     <div className="tripHead">
//                         {/* 行程表名稱+日期 */}
//                         <div className="tripTitle">
//                             {/* 行程表名稱 */}
//                             <div>
//                                 <h3 className='h3_title'>旅藤台南行</h3>
//                             </div>
//                             {/* 行程表日期 */}
//                             <div>
//                                 <h2 className='day_font day_select'>2022/2/23-2/26</h2>
//                             </div>
//                         </div>
//                         {/* 功能按鈕 */}
//                         <div className="tripFunc">
//                             {/* 開始:路線整理的燈箱效果 */}
//                             <div className='LB-container'>
//                                 <LightboxLine />
//                             </div>
//                             {/* 結束:路線整理的燈箱效果 */}


//                             {/* 行李清單 */}
//                             <div className='LB-container'>
//                                 <Lightbox />
//                             </div>

//                             <Link to='/mymap'><span className="set_icon icon-map "></span></Link>
//                         </div>
//                     </div>
//                     {/* 行程天數列 */}
//                     <div className='dataSwiper_wrap'>
//                         <DateSwiper />
//                     </div>
//                 </div>
//                 {/* 行程表顯示外框 */}
//                 <div className="schedule-wrap">
//                     {/* 行程表內容 */}
//                     <div className="scheduleList">
//                         {scheduleSheets.map(sheet => (
//                             <ScheduleSheet
//                                 key={sheet.id}
//                                 sheetID={sheet.id}
//                                 dataSourceID={sheet.dataSourceID}
//                                 spotCards={sheet.spotCards}
//                                 onUpdateDataSourceID={handleUpdateDataSourceID}
//                                 onAddSpotCard={handleAddSpotCard}
//                             />
//                         ))}
//                         {/* 添加行程表按鈕 */}
//                         <div className='btn-add-control' onClick={handleAddScheduleSheet}>
//                             <span className='icon-add icon-add-color'></span>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }

// export default Schedule;

// ===================================================================================================================
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./Schedule.scss"
// import Lightbox from '../../components-common/Lightbox/index'
// import LightboxLine from '../../components-common/LightboxLine/index'
// import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'
// import ScheduleSheet from '../../components-common/ScheduleSheet/ScheduleSheet.jsx'
// import DateSwiper from '../../components-common/DateSwiper/DateSwiper.jsx';

// const Schedule = () => {
//     const daysOfWeek = ["五", "六", "日", "一", "二", "三", "四"]; // 定义星期数组
//     const [sheets, setSheets] = useState([
//         { numCards: 4, ids: ['recC1ydc0AuJM8rj0', 'rec34Y8PSu4ZxjDqi', 'recKs9HcwW5Onj1Ku','rec1crANNsC9wnnKv'],dayOfWeek: "五" },
        // { numCards: 1, ids: ['rec1crANNsC9wnnKv'],dayOfWeek: "六"  },
        // { numCards: 2, ids: ['rec1crANNsC9wnnKv', 'reci4j2Nns6QDNrG5'],dayOfWeek: "日"  },
        // { numCards: 3, ids: ['recC1ydc0AuJM8rj0', 'rec34Y8PSu4ZxjDqi', 'recKs9HcwW5Onj1Ku'],dayOfWeek: "一"  },
        // { numCards: 2, ids: ['rec1crANNsC9wnnKv', 'reci4j2Nns6QDNrG5'],dayOfWeek: "二"  }
//     ]);

//     const addSheet = () => {
//         const nextDayIndex = (sheets.length > 0 ? daysOfWeek.indexOf(sheets[sheets.length - 1].dayOfWeek) + 1 : 0) % 7; // 计算下一个星期的索引
//         setSheets([...sheets, { numCards: 0, ids: [], dayOfWeek: daysOfWeek[nextDayIndex] }]); // 添加下一个星期的数据
//     };

//     return (
//         <>
//             <main className="Schedule_container">
//                 {/* bar_stick 手機板專用的部分 */}
//                 <div className='bar_stick'>
//                     {/* 麵包屑導覽列 */}
//                     <div className="wrap">
//                         <BreadCrumb />
//                     </div>
//                     {/* 行程表表頭資訊 */}
//                     <div className="tripHead">
//                         {/* 行程表名稱+日期 */}
//                         <div className="tripTitle">
//                             {/* 行程表名稱 */}
//                             <div>
//                                 <h3 className='h3_title'>旅藤台南行</h3>
//                             </div>
//                             {/* 行程表日期 */}
//                             <div>
//                                 <h2 className='day_font day_select'>2022/2/23-2/27</h2>
//                             </div>
//                         </div>
//                         {/* 功能按鈕 */}
//                         <div className="tripFunc">
//                             {/* 開始:路線整理的燈箱效果 */}
//                             <div className='LB-container'>
//                                 <LightboxLine />
//                             </div>
//                             {/* 結束:路線整理的燈箱效果 */}


//                             {/* 行李清單 */}
//                             <div className='LB-container'>
//                                 <Lightbox />
//                             </div>

//                             <Link to='/mymap'><span className="set_icon icon-map "></span></Link>
//                         </div>
//                     </div>
//                     {/* 行程天數列 */}
//                     <div className='dataSwiper_wrap'>
//                         <DateSwiper />
//                     </div>
//                 </div>
//                 {/* 行程表顯示外框 */}
//                 <div className="schedule-wrap">
//                     <div className="scheduleList">
//                         {sheets.map((sheet, index) => (
//                             <ScheduleSheet
//                                 key={index}
//                                 numCards={sheet.numCards}
//                                 ids={sheet.ids}
//                                 dayOfWeek={sheet.dayOfWeek}
//                             />
//                         ))}
//                         <div className='btn-add-control' onClick={addSheet}>
//                             <span className='icon-add icon-add-color'></span>
//                         </div>
//                     </div>
//                 </div>
//                 {/* 其他程式碼 */}
//             </main>
//         </>
//     );
// }

// export default Schedule;


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
        { numCards: 4, ids: ['recC1ydc0AuJM8rj0', 'rec34Y8PSu4ZxjDqi', 'recKs9HcwW5Onj1Ku','rec1crANNsC9wnnKv'], dayOfWeek: "五", times: ['10:00', '12:00', '14:00', '17:00'] },
        { numCards: 1, ids: ['rec1crANNsC9wnnKv'],dayOfWeek: "六", times: ['14:00']  },
        { numCards: 2, ids: ['rec1crANNsC9wnnKv', 'reci4j2Nns6QDNrG5'],dayOfWeek: "日", times: ['10:00', '12:00']  },
        { numCards: 3, ids: ['recC1ydc0AuJM8rj0', 'rec34Y8PSu4ZxjDqi', 'recKs9HcwW5Onj1Ku'],dayOfWeek: "一" , times: ['10:00', '14:00', '17:00'] },
        { numCards: 2, ids: ['rec1crANNsC9wnnKv', 'reci4j2Nns6QDNrG5'],dayOfWeek: "二", times: [ '14:00', '17:00']  }
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
                                <h3 className='h3_title'>旅藤台南行</h3>
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

                            <Link to='/mymap'><span className="set_icon icon-map "></span></Link>
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


