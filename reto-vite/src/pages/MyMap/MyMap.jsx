import React from 'react'
// import "./MyMap.css"
import "./MyMap.scss"
import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'
// import ButtonDel_NB from '../../components-common/Button/ButtonDel_NB/ButtonDel_NB.jsx'
import ScheduleSheet from '../../components-common/ScheduleSheet/ScheduleSheet.jsx'
import DateSwiper from '../../components-common/DateSwiper/DateSwiper.jsx'

const MyMap = () => {
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
                                <h3>旅藤台南行</h3>
                            </div>
                            {/* 行程表日期 */}
                            <div>
                                <h2>2022/2/23-2/26</h2>
                            </div>
                        </div>
                    </div>

                    {/* 行程天數列 */}
                    <DateSwiper></DateSwiper>
                    {/* <div className="SM_date">
                        <div className="btn_day">全部</div>
                        <div className="btn_day">第 1 天</div>
                        <div className="btn_day">第 2 天</div>
                        <div className="btn_day">第 3 天</div>
                        <div className="btn_day">第 4 天</div>
                        <div className="btn_day">第 5 天</div>
                    </div> */}

                    {/* 行程表顯示外框 */}
                    <div className="schedule-wrap">

                        {/* 行程表內容 */}
                        <div className="SM_scheduleList">
                            {/* 行程表一 */}
                            <ScheduleSheet />



                        </div>
                    </div>
                </div>



                {/* 地圖欄位 */}
                < div className="right_div" >

                    {/* 地圖本體 */}
                    <div div className="SM_map" >

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14457.513043160428!2d121.50391680386691!3d25.055165444839425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96d2ecfd72b%3A0x21c4c5b2853cd189!2z5aSn56i75Z-V6a2v6IKJ6aOv!5e0!3m2!1szh-TW!2stw!4v1706777706117!5m2!1szh-TW!2stw"
                            style={{ width: '100%', height: '100%', border: '0' }}
                            allowfullscreen="" loading="lazy" />
                    </div >

                    {/* 右上icon */}
                    <a a href="#" className="link_google" >
                        <figure>
                            <img src="../src/assets/img/google logo/google map.svg" alt="" />
                        </figure>
                        <div>
                            <p>
                                看google地圖
                            </p>
                        </div>
                    </a >
                    {/* absolute */}
                    {/* 下方景點卡片資料 */}
                    <div className="spot_card_wrapper">
                        <a href='#'><span className="icon-close btn_close"></span></a>
                        <div className="spot_card">
                            {/* 左側景點卡片資料 */}
                            <div className="map_card">
                                <div className="map_card_wrap">
                                    {/* 景點名稱 */}
                                    <p className="spot_name">
                                        大稻埕魯肉飯
                                    </p>
                                    {/* 景點資訊 */}
                                    <div className="map_card_info">
                                        <div className="map_card_score_money">
                                            <div className="map_card_score">
                                                <div className="map_card_text">4.5</div>
                                                <span className="icon-grade"></span>
                                            </div>
                                            <div className="map_card_text">(123)</div>
                                        </div>
                                        <p className="map_card_text">$$$</p>
                                    </div>
                                    {/* 地址 */}
                                    <div className="card_info_list" href="#">
                                        <span className="icon-location_on"></span>
                                        <p className="map_card_text">224新北市瑞芳區基山街90號</p>
                                    </div>
                                    {/* FB */}
                                    <a className="card_info_list" href="#">
                                        <span className="icon-website"></span>
                                        <p className="map_card_text">Facebook.com</p>
                                    </a>
                                    {/* 篩選標籤 */}
                                    <div className="card_info_list2">
                                        <span className="icon-love icon-margin"></span>
                                        <span className="icon-map icon-margin"></span>
                                        <div className="card_info_filter">篩選器</div>
                                        <div className="card_info_filter">篩選器</div>
                                    </div>
                                </div>
                                {/* 景點營業日期 */}
                                <div className="operation_time">
                                    <p>星期一　09:00 - 18:00</p>
                                    <p>星期二　09:00 - 18:00</p>
                                    <p>星期三　09:00 - 18:00</p>
                                    <p>星期四　09:00 - 18:00</p>
                                    <p>星期五　09:00 - 18:00</p>
                                    <p>星期六　09:00 - 18:00</p>
                                    <p>星期日　09:00 - 18:00</p>
                                </div>
                            </div>
                            {/* 右邊景點卡片圖片 */}
                            <div className="map_img">
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1617422725360-45b7671f980b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                </figure>
                            </div>
                            {/* 關閉視窗與下滑 */}
                            {/* <div></div> */}
                        </div>
                    </div>
                </div >
            </main >

        </>
    )
}

export default MyMap
