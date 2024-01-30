import React from 'react'
import MyTripCard from '../../components-common/MyTripCard/MyTripCard.jsx';
import "./MyTrip.css";


const MyTrip = () => {
    const handleNameClick = () => {
        // 在這裡處理名稱點擊後的動作
        console.log('名稱被點擊了');
    };

    return (
        <>
            <main className="MyTrip-container">
                <div className="content">
                    {/* 標題欄 */}
                    <div className="title">
                        <div>我的旅行</div>
                        <a href="#" className="add_schedule">
                            <span className="icon-add icon-add-map"></span>
                            <div>新增行程</div>
                        </a>
                    </div>

                    <div className="schedule_contain">
                        {/* 第一個行程集卡片 */}
                        <MyTripCard
                            imageUrl="https://images.unsplash.com/photo-1583889659384-64d9df2347ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="台北吃到飽"
                            days="3天2夜"
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
                            imageUrl="https://images.unsplash.com/photo-1571474004502-c1def214ac6d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="快閃九份"
                            days="1天0夜"
                            // onNameClick={handleNameClick}
                        />
                    

                        {/* 第五個行程集卡片 */}
                        <MyTripCard
                            imageUrl="https://images.unsplash.com/photo-1621316489519-77626e5e38fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            name="台男逛台南"
                            days="3天2夜"
                            // onNameClick={handleNameClick}
                        />
                        

                    </div>
                </div>
            </main>
        </>
    )
}

export default MyTrip