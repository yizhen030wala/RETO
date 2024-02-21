// 頁面 - 行程總頁/我的行程

import React from 'react'
// import { Link } from 'react-router-dom';
import MyTripCard from '../../components-common/MyTripCard/MyTripCard.jsx';
import ButtonChk from '../../components-common/Button/ButtonChk/ButtonChk.jsx';
// import "./MyTrip.css";
import "./MyTrip.scss"


const MyTrip = () => {
    const handleNameClick = () => {
        // 在這裡處理名稱點擊後的動作
        console.log('名稱被點擊了');
    };

    return (
        <>
            <main className="MyTrip-container">
                <div className="MyTrip-content">
                    {/* 標題欄 */}
                    <div className="title">
                        <div className="title-name">我的旅行</div>
                        <ButtonChk className="btn-add-wrap">
                            <div className="icon-add-map icon-add"></div>
                            <div className="text-add">新增行程</div>
                        </ButtonChk>

                    </div>

                    <div className="MyTrip_contain">
                        {/* 第一個行程集卡片 */}
                        
                        

                        <MyTripCard
                            imageUrl="https://images.unsplash.com/photo-1583889659384-64d9df2347ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="北桃RARASO"
                            days="3天2夜"
                        >
                        </MyTripCard>

                        <MyTripCard
                            imageUrl="https://images.unsplash.com/photo-1571474004502-c1def214ac6d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="快閃九份"
                            days="6天5夜"
                        // onNameClick={handleNameClick}
                        />


                        {/* 第二個行程集卡片 */}
                        <MyTripCard
                            imageUrl="https://images.unsplash.com/photo-1580745168634-33c78f4c4177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="西門浪流連"
                            days="2天1夜"
                        // onNameClick={handleNameClick}
                        />


                        {/* 第三個行程集卡片 */}
                        <MyTripCard
                            imageUrl="https://images.unsplash.com/photo-1630244024081-dc4039254a46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="宜起蘭去玩"
                            days="3天2夜"
                        // onNameClick={handleNameClick}
                        />


                        {/* 第四個行程集卡片 */}
                        <MyTripCard
                                imageUrl="https://engage.nsysu.edu.tw/wp-content/uploads/2021/11/0_嘉義中央噴水池ok.jpg"
                                name="你要嘉義嗎?"
                                days="3天2夜"
                            // onNameClick={handleNameClick}
                            >
                            </MyTripCard>
                        


                        {/* 第五個行程集卡片 */}
                        <MyTripCard
                            imageUrl="https://images.unsplash.com/photo-1621316489519-77626e5e38fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="台男逛台南"
                            days="3天2夜"
                        // onNameClick={handleNameClick}
                        />


                    </div>
                </div>
            </main >
        </>
    )
}

export default MyTrip