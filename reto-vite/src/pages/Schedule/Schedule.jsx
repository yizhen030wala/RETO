import React from 'react'
import { Link } from 'react-router-dom';
import "./Schedule.css"
import Lightbox from '../../components-common/Lightbox/index'
import LightboxLine from '../../components-common/LightboxLine/index'
import gorightImage from '../../assets/img/icon/icon-go/goright.svg';
import goleftImage from '../../assets/img/icon/icon-go/goleft.svg';
import BreadCrumb from '../../components-common/BreadCrumb/BreadCrumb.tsx'

const Schedule = () => {
    return (
        <>
            <main className="container">
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
                            <h3>旅藤台南行</h3>
                        </div>
                        {/* 行程表日期 */}
                        <div>
                            <h2 className='day_Schedule'>2022/2/23-2/26</h2>
                        </div>
                    </div>
                    {/* 功能按鈕 */}
                    <div className="tripFunc">
                        {/* Button trigger modal */}
                        {/* <button type="button" className="btn lightbox-c-green" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            路線整理
                        </button> */}
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
                <div className="date">
                    <div className='btn-day-control'>
                        <img src={goleftImage} alt="" />
                    </div>
                    <div className="btn_day-wrap">
                        <div className="btn_day">
                            第 1 天
                        </div>
                        <div className="btn_day">
                            第 2 天
                        </div>
                        <div className="btn_day">
                            第 3 天
                        </div>
                        <div className="btn_day">
                            第 4 天
                        </div>
                    </div>
                    <div className='btn-day-control'>
                        <img src={gorightImage} alt="" />
                    </div>
                    {/* 以此類推... */}
                </div>



                {/* 行程表顯示外框 */}
                <div className="schedule-wrap">

                    {/* 行程表內容 */}
                    <div className="scheduleList">

                        {/* 行程表一 */}
                        <fieldset className="schedule">
                            {/* 行程表刪除鍵 */}
                            <a href="#" className="icon-more_horiz loc-icon-more_horiz"></a>
                            {/* 星期N */}
                            <div className="day">星期五</div>
                            {/* 備註 */}
                            <div className="note">
                                星期五猴子去跳舞
                            </div>
                            {/* 景點列表 */}
                            <div className="spotList">
                                {/* 第一個景點 */}
                                <div className="spot">
                                    {/* 左側功能列 */}
                                    <div className="leftFunc">
                                        {/* 拖曳 */}
                                        <span className="icon-drag_indicator"></span>
                                        {/* 替換 */}
                                        <span className="icon-exchange"></span>
                                    </div>
                                    {/* 右側景點資訊 */}
                                    <div className="info">
                                        {/* 序號 */}
                                        <div className="num">1</div>
                                        {/* 圖片 */}
                                        <figure className="pic">
                                            <img src="https://images.unsplash.com/photo-1617422725360-45b7671f980b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </figure>
                                        {/* 景點名稱相關資訊 */}
                                        <div className="spotInfo">
                                            {/* 景點時間抬頭 */}
                                            <div className="spotTitle">
                                                {/* 圖標時間集合 */}
                                                <div className="iconTime">
                                                    {/* 景點圖標 */}
                                                    <div className="icon">
                                                        <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
                                                    </div>
                                                    {/* 到達時間 */}
                                                    <div className="time">12:03 到達</div>
                                                </div>
                                                {/* 刪除鍵 */}
                                            </div>
                                            <span className="icon-delete loc-delete"></span>
                                            {/* 地點名稱 */}
                                            <div className="spotName_Fuc">
                                                <div className="spotName">大稻埕魯肉飯</div>
                                                <div className="btn-copy">
                                                    <span className="icon-content_copy"></span>
                                                </div>
                                            </div>
                                            {/* 建議停留時間 */}
                                            <div className="adviseTime">建議停留時間 1 hr</div>
                                        </div>
                                    </div>
                                </div>
                                {/* 交通方式 */}
                                <div className="traffic">
                                    <div className="trafficInfo">
                                        <span className="icon-car"></span>
                                        <div className="driveTime">開車時間 六百 小時</div>
                                    </div>
                                </div>
                                {/* 第二個景點 */}
                                <div className="spot">
                                    {/* 左側功能列 */}
                                    <div className="leftFunc">
                                        {/* 拖曳 */}
                                        <span className="icon-drag_indicator"></span>
                                        {/* 替換 */}
                                        <span className="icon-exchange"></span>
                                    </div>
                                    {/* 右側景點資訊 */}
                                    <div className="info">
                                        {/* 序號 */}
                                        <div className="num">1</div>
                                        {/* 圖片 */}
                                        <figure className="pic">
                                            <img src="https://images.unsplash.com/photo-1617422725360-45b7671f980b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </figure>
                                        {/* 景點名稱相關資訊 */}
                                        <div className="spotInfo">
                                            {/* 景點時間抬頭 */}
                                            <div className="spotTitle">
                                                {/* 圖標時間集合 */}
                                                <div className="iconTime">
                                                    {/* 景點圖標 */}
                                                    <div className="icon">
                                                        <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
                                                    </div>
                                                    {/* 到達時間 */}
                                                    <div className="time">12:03 到達</div>
                                                </div>
                                                {/* 刪除鍵 */}
                                            </div>
                                            <span className="icon-delete loc-delete"></span>
                                            {/* 地點名稱 */}
                                            <div className="spotName_Fuc">
                                                <div className="spotName">大稻埕魯肉飯</div>
                                                <div className="btn-copy">
                                                    <span className="icon-content_copy"></span>
                                                </div>
                                            </div>
                                            {/* 建議停留時間 */}
                                            <div className="adviseTime">建議停留時間 1 hr</div>
                                        </div>
                                    </div>
                                </div>
                                {/* 交通方式 */}
                                <div className="traffic">
                                    <div className="trafficInfo">
                                        <span className="icon-car"></span>
                                        <div className="driveTime">開車時間 六百 小時</div>
                                    </div>
                                </div>
                                {/* 第三個景點 */}
                                <div className="spot">
                                    {/* 左側功能列 */}
                                    <div className="leftFunc">
                                        {/* 拖曳 */}
                                        <span className="icon-drag_indicator"></span>
                                        {/* 替換 */}
                                        <span className="icon-exchange"></span>
                                    </div>
                                    {/* 右側景點資訊 */}
                                    <div className="info">
                                        {/* 序號 */}
                                        <div className="num">1</div>
                                        {/* 圖片 */}
                                        <figure className="pic">
                                            <img src="https://images.unsplash.com/photo-1617422725360-45b7671f980b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </figure>
                                        {/* 景點名稱相關資訊 */}
                                        <div className="spotInfo">
                                            {/* 景點時間抬頭 */}
                                            <div className="spotTitle">
                                                {/* 圖標時間集合 */}
                                                <div className="iconTime">
                                                    {/* 景點圖標 */}
                                                    <div className="icon">
                                                        <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
                                                    </div>
                                                    {/* 到達時間 */}
                                                    <div className="time">12:03 到達</div>
                                                </div>
                                                {/* 刪除鍵 */}
                                            </div>
                                            <span className="icon-delete loc-delete"></span>
                                            {/* 地點名稱 */}
                                            <div className="spotName_Fuc">
                                                <div className="spotName">大稻埕魯肉飯</div>
                                                <div className="btn-copy">
                                                    <span className="icon-content_copy"></span>
                                                </div>
                                            </div>
                                            {/* 建議停留時間 */}
                                            <div className="adviseTime">建議停留時間 1 hr</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="btn_addspot-wrap">
                                {/* 回到收藏 */}
                                <div className="btn_addspot">
                                    <div className="btnAddSpotTitle">
                                        <span className="icon-love"></span>
                                        <h3>從收藏加入</h3>
                                    </div>
                                </div>
                                {/* 回到探索 */}
                                <div className="btn_addspot">
                                    <div className="btnAddSpotTitle">
                                        <span className="icon-search"></span>
                                        <span className="icon-eat"></span>
                                        <h3>從探索加入</h3>
                                    </div>
                                </div>
                            </div>
                        </fieldset>


                        {/* 行程表二 */}
                        <fieldset className="schedule">
                            {/* 行程表刪除鍵 */}
                            <a href="#" className="icon-more_horiz loc-icon-more_horiz"></a>
                            {/* 星期N */}
                            <div className="day">星期五</div>
                            {/* 備註 */}
                            <div className="note">
                                星期五猴子去跳舞
                            </div>
                            {/* 景點列表 */}
                            <div className="spotList">
                                {/* 第一個景點 */}
                                <div className="spot">
                                    {/* 左側功能列 */}
                                    <div className="leftFunc">
                                        {/* 拖曳 */}
                                        <span className="icon-drag_indicator"></span>
                                        {/* 替換 */}
                                        <span className="icon-exchange"></span>
                                    </div>
                                    {/* 右側景點資訊 */}
                                    <div className="info">
                                        {/* 序號 */}
                                        <div className="num">1</div>
                                        {/* 圖片 */}
                                        <figure className="pic">
                                            <img src="https://images.unsplash.com/photo-1617422725360-45b7671f980b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </figure>
                                        {/* 景點名稱相關資訊 */}
                                        <div className="spotInfo">
                                            {/* 景點時間抬頭 */}
                                            <div className="spotTitle">
                                                {/* 圖標時間集合 */}
                                                <div className="iconTime">
                                                    {/* 景點圖標 */}
                                                    <div className="icon">
                                                        <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
                                                    </div>
                                                    {/* 到達時間 */}
                                                    <div className="time">12:03 到達</div>
                                                </div>
                                                {/* 刪除鍵 */}
                                            </div>
                                            <span className="icon-delete loc-delete"></span>
                                            {/* 地點名稱 */}
                                            <div className="spotName_Fuc">
                                                <div className="spotName">大稻埕魯肉飯</div>
                                                <div className="btn-copy">
                                                    <span className="icon-content_copy"></span>
                                                </div>
                                            </div>
                                            {/* 建議停留時間 */}
                                            <div className="adviseTime">建議停留時間 1 hr</div>
                                        </div>
                                    </div>
                                </div>
                                {/* 交通方式 */}
                                <div className="traffic">
                                    <div className="trafficInfo">
                                        <span className="icon-car"></span>
                                        <div className="driveTime">開車時間 六百 小時</div>
                                    </div>
                                </div>
                                {/* 第二個景點 */}
                                <div className="spot">
                                    {/* 左側功能列 */}
                                    <div className="leftFunc">
                                        {/* 拖曳 */}
                                        <span className="icon-drag_indicator"></span>
                                        {/* 替換 */}
                                        <span className="icon-exchange"></span>
                                    </div>
                                    {/* 右側景點資訊 */}
                                    <div className="info">
                                        {/* 序號 */}
                                        <div className="num">1</div>
                                        {/* 圖片 */}
                                        <figure className="pic">
                                            <img src="https://images.unsplash.com/photo-1617422725360-45b7671f980b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                        </figure>
                                        {/* 景點名稱相關資訊 */}
                                        <div className="spotInfo">
                                            {/* 景點時間抬頭 */}
                                            <div className="spotTitle">
                                                {/* 圖標時間集合 */}
                                                <div className="iconTime">
                                                    {/* 景點圖標 */}
                                                    <div className="icon">
                                                        <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
                                                    </div>
                                                    {/* 到達時間 */}
                                                    <div className="time">12:03 到達</div>
                                                </div>
                                                {/* 刪除鍵 */}
                                            </div>
                                            <span className="icon-delete loc-delete"></span>
                                            {/* 地點名稱 */}
                                            <div className="spotName_Fuc">
                                                <div className="spotName">大稻埕魯肉飯</div>
                                                <div className="btn-copy">
                                                    <span className="icon-content_copy"></span>
                                                </div>
                                            </div>
                                            {/* 建議停留時間 */}
                                            <div className="adviseTime">建議停留時間 1 hr</div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="btn_addspot-wrap">
                                {/* 回到收藏 */}
                                <div className="btn_addspot">
                                    <div className="btnAddSpotTitle">
                                        <span className="icon-love"></span>
                                        <h3>從收藏加入</h3>
                                    </div>
                                </div>
                                {/* 回到探索 */}
                                <div className="btn_addspot">
                                    <div className="btnAddSpotTitle">
                                        <span className="icon-search"></span>
                                        <span className="icon-eat"></span>
                                        <h3>從探索加入</h3>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

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
