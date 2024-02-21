import React, { useEffect, useState } from "react";
import "./InfoCard.scss";

const InfoCard = ({ id, time , onClick }) => {
    const handleClick = () => {
        // 假設 data 是從 Airtable 中獲取的數據
        const data = { id: 'recC1ydc0AuJM8rj0', /* 其他數據 */ };
        onClick(data);
    };

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // 新增 isLoading 狀態，用於控制加載動畫的顯示

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.airtable.com/v0/appAZmHoN0ZgUBhGi/tblLuHs5ExVo7WrJM/${id}`, {
                    headers: {
                        Authorization: `Bearer patPf99e6W2EBor8W.e2fe347dbdcf5b651cc6be631787070d5152604b494f295525430af19409a4bf`
                    }
                });
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false); // 數據加載完畢後設置 isLoading 為 false
            }
        };

    fetchData();
  }, [id]);

    return (
        <>

            {isLoading && ( // 根據 isLoading 的值來決定是否顯示加載動畫
                <div className="card_loading">
                    
                </div>
            )}
            
            {data && (
                <div className="info_SpotCard">
                    <figure className="pic_SpotCard">
                        <img src={data?.fields['location cover']} alt="" />
                    </figure>
                    <div className="spotInfo_SpotCard">
                        <div className="spotTitle">
                            <div className="iconTime">
                                <div className="icon">
                                    <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
                                </div>
                                {/* 使用從SpotCard傳遞的時間屬性 */}
                                <div className="time">{time}</div>
                            </div>
                        </div>
                        <div className="spotName_Fuc">
                            <div className="spotName">{data.fields.location}</div>
                            <div className="btn_copy">
                                <span className="icon-content_copy"></span>
                            </div>
                        </div>
                        <div className="adviseTime">建議停留時間 {data.fields['stay time(hour)']} 小時</div>
                    </div>
                </div>
            )}
            {/* <MapCard varOne={varOne} varTwo={varTwo} /> */}
        </>
    );
}

export default InfoCard;
