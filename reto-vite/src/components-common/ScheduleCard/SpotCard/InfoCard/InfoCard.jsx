

// import React, { useEffect, useState } from 'react';
// import "./InfoCard.scss"

// const InfoCard = ({ dataSourceID, onChangeDataSourceID }) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         // Fetch data from API using dataSourceID
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://api.airtable.com/v0/appAZmHoN0ZgUBhGi/tblLuHs5ExVo7WrJM/${dataSourceID}`, {
//                     headers: {
//                         Authorization: `Bearer patPf99e6W2EBor8W.e2fe347dbdcf5b651cc6be631787070d5152604b494f295525430af19409a4bf`
//                     }
//                 });
//                 const result = await response.json();
//                 setData(result);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         if (dataSourceID) {
//             fetchData();
//         }
//     }, [dataSourceID]);

//     // Function to handle changing data source ID
//     const handleChangeDataSourceID = (newID) => {
//         onChangeDataSourceID(newID);
//     };

//     return (
//         <>
//             {/* 右側景點資訊 */}
//             <div className="info_SpotCard">
//                 {/* 圖片 */}
// <figure className="pic_SpotCard">
//     <img src={data?.fields['location cover']} alt="" />
// </figure>
//                 {/* 景點名稱相關資訊 */}
//                 <div className="spotInfo_SpotCard">
//                     {/* 景點時間抬頭 */}
//                     <div className="spotTitle">
//                         {/* 圖標時間集合 */}
//                         <div className="iconTime">
//                             {/* 景點圖標 */}
//                             <div className="icon">
//                                 <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
//                             </div>
//                             {/* 到達時間 */}
//                             <div className="time">12:03 到達</div>
//                         </div>

//                     </div>

//                     {/* 地點名稱 */}
//                     <div className="spotName_Fuc">
//                         <div className="spotName">{data?.fields.location}</div>
//                         <div className="btn_copy">
//                             <span className="icon-content_copy"></span>
//                         </div>
//                     </div>
//                     {/* 建議停留時間 */}
//                     <div className="adviseTime">建議停留時間 {data?.fields['stayTime']}</div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default InfoCard;


// ================================222222222222222222222222222222222222222222222

// import React, { useEffect, useState } from 'react';
// import "./InfoCard.scss"

// const InfoCard = ({ dataSourceID, onChangeDataSourceID }) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         // Fetch data from API using dataSourceID
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://api.airtable.com/v0/appAZmHoN0ZgUBhGi/tblLuHs5ExVo7WrJM/${dataSourceID}`, {
//                     headers: {
//                         Authorization: `Bearer patPf99e6W2EBor8W.e2fe347dbdcf5b651cc6be631787070d5152604b494f295525430af19409a4bf`
//                     }
//                 });
//                 const result = await response.json();
//                 setData(result);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [dataSourceID]);

//     // Function to handle changing the data source ID
//     const handleChangeDataSourceID = (newID) => {
//         onChangeDataSourceID(newID);
//     };

//     return (
//         <>
//             {data && (
//                 <div className="info_SpotCard">
//                     {/* 圖片 */}
//                     {/* 景點名稱相關資訊 */}
//                     <div className="spotInfo_SpotCard">
//                         {/* 地點名稱 */}
//                         <div className="spotName_Fuc">
//                             <div className="spotName">{data.fields.location}</div>
//                             <div className="btn_copy">
//                                 <span className="icon-content_copy"></span>
//                             </div>
//                         </div>
//                         {/* 建議停留時間 */}
//                         <div className="adviseTime">建議停留時間 {data.fields['stayTime']}</div>
//                     </div>
//                 </div>
//             )}
//         </>
//     )
// }

// export default InfoCard;

// =============================================================================================================
// import React, { useEffect, useState } from 'react';
// import "./InfoCard.scss"

// const InfoCard = ({ dataSourceID, onChangeDataSourceID }) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         // Fetch data from API using dataSourceID
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://api.airtable.com/v0/appAZmHoN0ZgUBhGi/tblLuHs5ExVo7WrJM/${dataSourceID}`, {
//                     headers: {
//                         Authorization: `Bearer patPf99e6W2EBor8W.e2fe347dbdcf5b651cc6be631787070d5152604b494f295525430af19409a4bf`
//                     }
//                 });
//                 const result = await response.json();
//                 setData(result);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [dataSourceID]);

//     // Function to handle changing the data source ID
//     const handleChangeDataSourceID = (newID) => {
//         onChangeDataSourceID(newID);
//     };

//     return (
//         <>
//             {data && (
//                 <div className="info_SpotCard">
//                     {/* 圖片 */}
//                     {/* 景點名稱相關資訊 */}
//                     <div className="spotInfo_SpotCard">
//                         {/* 地點名稱 */}
//                         <div className="spotName_Fuc">
//                             <div className="spotName">{data.fields.location}</div>
//                             <div className="btn_copy">
//                                 <span className="icon-content_copy"></span>
//                             </div>
//                         </div>
//                         {/* 建議停留時間 */}
//                         <div className="adviseTime">建議停留時間 {data.fields['stayTime']}</div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default InfoCard;



// import React, { useEffect, useState } from 'react';
// import "./InfoCard.scss"
// // import { showFullText } from "./showFullText.js";


// const InfoCard = ({ id }) => {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`https://api.airtable.com/v0/appAZmHoN0ZgUBhGi/tblLuHs5ExVo7WrJM/${id}`, {
//                     headers: {
//                         Authorization: `Bearer patPf99e6W2EBor8W.e2fe347dbdcf5b651cc6be631787070d5152604b494f295525430af19409a4bf`
//                     }
//                 });
//                 const result = await response.json();
//                 console.log(result) //查看獲取到的資料
//                 setData(result);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, [id]);

//     return (
//         <>
//             {data && (
//                 <div className="info_SpotCard">
//                     <figure className="pic_SpotCard">
//                         <img src={data?.fields['location cover']} alt="" />
//                     </figure>
//                     <div className="spotInfo_SpotCard">
//                         <div className="spotTitle">
//                             <div className="iconTime">
//                                 <div className="icon">
//                                     <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
//                                 </div>
//                                 {/* 使用從SpotCard傳遞的時間屬性 */}
//                                 <div className="time">{time} 抵達</div>
//                             </div>
//                         </div>
//                         <div className="spotName_Fuc">
//                             <div className="spotName">{data.fields.location}</div>
//                             <div className="btn_copy">
//                                 <span className="icon-content_copy"></span>
//                             </div>
//                         </div>
//                         <div className="adviseTime">建議停留時間 {data.fields['stay time(hour)']} 小時</div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default InfoCard;




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
