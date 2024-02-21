import React from 'react';
import "./MapCard.scss";
// 增加的部分
// import InfoCard from "../../../components-common/ScheduleCard/SpotCard/InfoCard/InfoCard"

const MapCard = (props) => {



    return (
        <>
            {/* 地圖本體 */}
            <div div className="SM_map" >

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14468.60756967815!2d121.2128567!3d24.9609463!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823ca6bb94541%3A0x5b136096a5d374b0!2z57ag5rKQ5oGs5ou-IENhZsOpICYgUMOidGlzc2VyaWU!5e0!3m2!1szh-TW!2stw!4v1708498479408!5m2!1szh-TW!2stw"
                    style={{ width: '100%', height: '100%', border: '0' }}
                    allowFullScreen="" loading="lazy" />
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
                            
                            {/*  */}
                            {/* <p>{props.varOne}, {props.varTwo}</p> */}
                            
                            {/* 景點名稱 */}
                            <p className="spot_name">
                            綠沐恬拾 Café & Pâtisserie
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
                                <p className="map_card_text">$$</p>
                            </div>
                            {/* 地址 */}
                            <div className="card_info_list" href="#">
                                <span className="icon-location_on"></span>
                                <p className="map_card_text">桃園市中壢區中央西路二段229-1號</p>
                            </div>
                            {/* FB */}
                            <a className="card_info_list" href="#">
                                <span className="icon-website"></span>
                                <p className="map_card_text">https://www.facebook.com/greenco2291?locale=zh_TW</p>
                            </a>
                            {/* 篩選標籤 */}
                            <div className="card_info_list2">
                                <div className="card_info_filter">台北</div>
                                <div className="card_info_filter">下午茶</div>
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
                            <img src="https://lh5.googleusercontent.com/p/AF1QipMSgBJLo_yhUvCE1X5dou3lRx9XrB9v5zYZ1v-o=w408-h271-k-no" alt="" />
                        </figure>
                    </div>
                    {/* 關閉視窗與下滑 */}
                    {/* <div></div> */}
                </div>
            </div>
        </>
    )
}

export default MapCard