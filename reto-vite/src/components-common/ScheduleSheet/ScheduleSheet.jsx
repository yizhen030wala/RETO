import React from 'react'
// import "../css/ScheduleSheet.css"
import "./ScheduleSheet.scss"
import SpotCard from '../ScheduleCard/SpotCard/SpotCard.jsx'
import TimeCard from '../ScheduleCard/TimeCard/TimeCard.jsx'
import ButtonDel_NB from '../Button/ButtonDel_NB/ButtonDel_NB.jsx'

const ScheduleSheet = () => {
    return (
        <>
            <fieldset className="schedule">
                {/* 行程表刪除鍵 */}
                <div className="loc-icon-more_horiz">
                    <ButtonDel_NB />
                </div>
                {/* 星期N */}
                <div className="schedule_day">星期五</div>
                {/* 備註 */}
                <div className="note">
                    星期五猴子去跳舞
                </div>
                {/* 景點列表 */}
                <div className="spotList">

                    {/* 第一個景點 */}
                    <SpotCard />

                    {/* 交通方式 */}
                    <TimeCard />
                    {/* <div className="traffic">
                                    <div className="trafficInfo">
                                        <span className="icon-car"></span>
                                        <div className="driveTime">開車時間 六百 小時</div>
                                    </div>
                                </div> */}

                    {/* 第二個景點 */}
                    <SpotCard />

                    {/* 交通方式 */}

                    <TimeCard />


                    {/* 第三個景點 */}
                    <SpotCard />
                </div>


                <div className="btn_addspot-wrap">
                    {/* 回到收藏 */}
                    <div className="btn_addspot">
                        <div className="btnAddSpotTitle">
                            <span className="icon-love"></span>
                            <h3 className='h3_title'>從收藏加入</h3>
                        </div>
                    </div>
                    {/* 回到探索 */}
                    <div className="btn_addspot">
                        <div className="btnAddSpotTitle">
                            <span className="icon-search"></span>
                            <h3 className='h3_title'>從探索加入</h3>
                        </div>
                    </div>
                </div>
            </fieldset>
        </>
    )
}

export default ScheduleSheet
