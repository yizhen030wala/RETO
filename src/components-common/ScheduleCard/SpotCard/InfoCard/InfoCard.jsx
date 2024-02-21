

// import React, { useEffect, useState } from 'react';
// import "./InfoCard.scss"

// // 增加的部分
// import MapCard from "../../../../pages/MyMap/MapCard/MapCard.jsk"

// const InfoCard = ({ id, time }) => {
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





import React, { useEffect, useState } from 'react';
import "./InfoCard.scss"

// 增加的部分
import MapCard from "../../../../pages/MyMap/MapCard/MapCard.jsx"

const InfoCard = ({ id, time , onClick }) => {
    const handleClick = () => {
        // 假設 data 是從 Airtable 中獲取的數據
        const data = { id: 'recC1ydc0AuJM8rj0', /* 其他數據 */ };
        onClick(data);
    };

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.airtable.com/v0/appAZmHoN0ZgUBhGi/tblLuHs5ExVo7WrJM/${id}`, {
                    headers: {
                        Authorization: `Bearer patPf99e6W2EBor8W.e2fe347dbdcf5b651cc6be631787070d5152604b494f295525430af19409a4bf`
                    }
                });
                const result = await response.json();
                console.log(result) //查看獲取到的資料
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);


    // const varOne = 'Mike';
    // const varTwo = 'Tyson';

    return (
        <>
            {data && (
                <div className="info_SpotCard" onClick={handleClick}>
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
                                <div className="time">{time} 抵達</div>
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
