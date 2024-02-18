// import React from 'react';
// // import "../css/InfoCard.css";
// import "./InfoCard.scss"


// const InfoCard = () => {
//     return (
//         <>
//             {/* 右側景點資訊 */}
//             <div className="info_SpotCard">
//                 {/* 圖片 */}
//                 <figure className="pic_SpotCard">
//                     <img src="https://images.unsplash.com/photo-1617422725360-45b7671f980b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
//                 </figure>
//                 {/* 景點名稱相關資訊 */}
//                 <div className="spotInfo_SpotCard">
//                     {/* 景點時間抬頭 */}
// <div className="spotTitle">
//     {/* 圖標時間集合 */}
//     <div className="iconTime">
//         {/* 景點圖標 */}
//         <div className="icon">
//             <img src="../src/assets/img/icon/icon-category/eat.svg" alt="" />
//         </div>
//         {/* 到達時間 */}
//         <div className="time">12:03 到達</div>
//     </div>

// </div>

//                     {/* 地點名稱 */}
//                     <div className="spotName_Fuc">
//                         <div className="spotName">大稻埕魯肉飯</div>
//                         <div className="btn_copy">
//                             <span className="icon-content_copy"></span>
//                         </div>
//                     </div>
//                     {/* 建議停留時間 */}
//                     <div className="adviseTime">建議停留時間 1 hr</div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default InfoCard


// ==================API=============================


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



import React, { useEffect, useState } from 'react';
import "./InfoCard.scss"
// import { showFullText } from "./showFullText.js";


const InfoCard = ({ id }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from API using id
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
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            {/* 右側景點資訊 */}
            {data && (
                <div className="info_SpotCard">
                    {/* 圖片 */}
                    <figure className="pic_SpotCard">
                        <img src={data?.fields['location cover']} alt="" />
                    </figure>
                    {/* 景點名稱相關資訊 */}
                    <div className="spotInfo_SpotCard">
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

                        </div>

                        {/* 地點名稱 */}
                        <div className="spotName_Fuc">
                            <div className="spotName">{data.fields.location}</div>
                            <div className="btn_copy">
                                <span className="icon-content_copy"></span>
                            </div>
                        </div>
                        {/* 建議停留時間 */}
                        <div className="adviseTime">建議停留時間 {data.fields['stay time(hour)']} 小時</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default InfoCard;
