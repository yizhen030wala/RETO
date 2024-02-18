// // 行程頁和地圖頁當中景點卡片組件
// import React from 'react';
// // import "../css/SpotCard.css";
// import "./SpotCard.scss"
// import InfoCard from './InfoCard/InfoCard';
// import BtnExchange from "./BtnExchange/BtnExchange.jsx"
// import ButtonDel_Trash from '../../Button/ButtonDel_Trash/ButtonDel_Trash.jsx';


// const SpotCard = () => {
//     return (
//         <>
//             <div className="spot_SpotCard">

//                 {/* 左側功能列 */}
// <div className="leftFunc_SpotCard">
//     {/* 拖曳 */}
//     <span className="icon-drag_indicator drag_point"></span>
//     {/* 替換 */}
//     <BtnExchange className="BtnExchange" />
// </div>

//                 {/* 右側景點資訊 */}
//                 <div className='InfoCard_wrap'>
//                     {/* 序號 */}
//                     <div className="num_SpotCard">1</div>
//                     <InfoCard />
//                 </div>

//                 {/* 刪除鍵 */}
// <div className='btn_wrap'>
//     <ButtonDel_Trash />
// </div>

//             </div>


//         </>
//     )
// }

// export default SpotCard


// =================API==========================

// import React from 'react';
// import "./SpotCard.scss"
// import InfoCard from './InfoCard/InfoCard';
// import BtnExchange from "./BtnExchange/BtnExchange.jsx"
// import ButtonDel_Trash from '../../Button/ButtonDel_Trash/ButtonDel_Trash.jsx';

// const SpotCard = ({ dataSourceID, onUpdateDataSourceID }) => {
//     // Function to update the data source ID for this SpotCard
//     const handleChangeDataSourceID = (newID) => {
//         onUpdateDataSourceID(newID);
//     };

//     return (
//         <>
//             <div className="spot_SpotCard">
//                 {/* 左側功能列 */}
// <div className="leftFunc_SpotCard">
//     {/* 拖曳 */}
//     <span className="icon-drag_indicator drag_point"></span>
//     {/* 替換 */}
//     <BtnExchange className="BtnExchange" />
// </div>
//                 {/* 右側景點資訊 */}
//                 <div className='InfoCard_wrap'>
//                     {/* 序號 */}
//                     <div className="num_SpotCard">1</div>
//                     <InfoCard dataSourceID={dataSourceID} onChangeDataSourceID={handleChangeDataSourceID} />
//                 </div>
//                 {/* 刪除鍵 */}
// <div className='btn_wrap'>
//     <ButtonDel_Trash />
// </div>
//             </div>
//         </>
//     )
// }

// export default SpotCard;


// ]======================22222222222222222222222222222222222222222222===============

// import React from 'react';
// import "./SpotCard.scss"
// import InfoCard from './InfoCard/InfoCard';

// const SpotCard = ({ sheetID, dataSourceID, onUpdateDataSourceID }) => {
//     // Function to update the data source ID for this SpotCard
//     const handleChangeDataSourceID = (newID) => {
//         onUpdateDataSourceID(sheetID, newID);
//     };

//     return (
//         <>
//             <div className="spot_SpotCard">
//                 {/* 左側功能列 */}
//                 <div className="leftFunc_SpotCard">
//                     {/* 拖曳 */}
//                     <span className="icon-drag_indicator drag_point"></span>
//                     {/* 替換 */}
//                     <BtnExchange className="BtnExchange" />
//                 </div>
//                 {/* 右側景點資訊 */}
//                 <div className='InfoCard_wrap'>
//                     <InfoCard dataSourceID={dataSourceID} onChangeDataSourceID={handleChangeDataSourceID} />
//                 </div>
//                 {/* 刪除鍵 */}
//                 <div className='btn_wrap'>
//                     <ButtonDel_Trash />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SpotCard;



import React from 'react';
import "./SpotCard.scss"
import InfoCard from './InfoCard/InfoCard';
import BtnExchange from "./BtnExchange/BtnExchange.jsx"
import ButtonDel_Trash from '../../Button/ButtonDel_Trash/ButtonDel_Trash.jsx';

const SpotCard = ({ id }) => {
    return (
        <>
            <div className="spot_SpotCard">
                {/* 左側功能列 */}
                <div className="leftFunc_SpotCard">
                    {/* 拖曳 */}
                    <span className="icon-drag_indicator drag_point"></span>
                    {/* 替換 */}
                    <BtnExchange className="BtnExchange" />
                </div>
                {/* 右側景點資訊 */}
                <div className='InfoCard_wrap'>

                    <InfoCard id={id} />
                </div>
                {/* 刪除鍵 */}
                <div className='btn_wrap'>
                    <ButtonDel_Trash />
                </div>
            </div>
        </>
    );
}

export default SpotCard;