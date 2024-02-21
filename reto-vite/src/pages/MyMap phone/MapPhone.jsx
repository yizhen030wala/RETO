import React from 'react'
import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'
import ScheduleSheet from '../../components-common/ScheduleSheet/ScheduleSheet.jsx'
import DateSwiper from '../../components-common/DateSwiper/DateSwiper.jsx'
import './MapPhone.scss'

const MapPhone = () => {
    return (
        <div className='mapphone_rwd'>
            <div className="mapphone_container">
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
                                <h3>桃園台北RARASO</h3>
                            </div>
                            {/* 行程表日期 */}
                            <div>
                                <h2>2022/2/23-2/27</h2>
                            </div>
                        </div>
                    </div>

                    {/* 行程天數列 */}
                    <DateSwiper />

                </div>


            </div >

            {/* mapphone--mp */}
            <div className="mp_wrap">
                {/* 地圖欄位 */}


                {/* 地圖本體 */}
                <div div className="SM_map" >

                    <iframe
                       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14468.60756967815!2d121.2128567!3d24.9609463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823ca6bb94541%3A0x5b136096a5d374b0!2z57ag5rKQ5oGs5ou-IENhZsOpICYgUMOidGlzc2VyaWU!5e0!3m2!1szh-TW!2stw!4v1708498479408!5m2!1szh-TW!2stw"
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

                {/* 底部地點選單 */}
                <div className="mapphone_itinerary">
                    <div className="day"><h3>第1天</h3><p>星期五</p></div>
                    <div className='icon'><img src="/src/assets/img/icon/icon-go/goright.svg" alt="" /></div>
                    <div className="box">
                        <div className="nb_badge">1</div>
                        <h3>綠沐恬拾</h3>
                    </div>
                    <div className="time_box">
                        <div className='icon-car'></div>
                        <h3>10時00分</h3>
                    </div>
                    <div className="box">
                        <div className="nb_badge">2</div>
                        <h3>在一起 One</h3>
                    </div>
                    <div className="time_box">
                        <div className='icon-car'></div>
                        <h3>12時00分</h3>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default MapPhone
