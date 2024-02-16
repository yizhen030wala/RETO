import React from 'react'
import { Link } from 'react-router-dom';
import "./Schedule.scss"
// import "../css/Schedule.css"
import Lightbox from '../../components-common/Lightbox/index'
import LightboxLine from '../../components-common/LightboxLine/index'
import gorightImage from '../../assets/img/icon/icon-go/goright.svg';
import goleftImage from '../../assets/img/icon/icon-go/goleft.svg';
import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'
import SpotCard from '../../components-common/ScheduleCard/SpotCard/SpotCard.jsx'
import TimeCard from '../../components-common/ScheduleCard/TimeCard/TimeCard.jsx'
import ScheduleSheet from '../../components-common/ScheduleSheet/ScheduleSheet.jsx'
import DateSwiper from '../../components-common/DateSwiper/DateSwiper.jsx';

const Schedule = () => {
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
                                <h2 className='day_font day_select'>2022/2/23-2/26</h2>
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

                    {/* 行程表內容 */}
                    <div className="scheduleList">

                        {/* 行程表一 */}
                        <ScheduleSheet />



                        {/* 添加行程表按鈕 */}
                        <div className='btn-add-control'>
                            <span className='icon-add icon-add-color'></span>
                        </div>

                    </div>
                </div>
            </main >
        </>
    )
}

export default Schedule
