// import React from 'react'
// // import "../css/ScheduleSheet.css"
// import "./ScheduleSheet.scss"
// import SpotCard from '../ScheduleCard/SpotCard/SpotCard.jsx'
// import TimeCard from '../ScheduleCard/TimeCard/TimeCard.jsx'
// import ButtonDel_NB from '../Button/ButtonDel_NB/ButtonDel_NB.jsx'

// const ScheduleSheet = () => {
//     return (
//         <>
//             <fieldset className="schedule">
//                 {/* 行程表刪除鍵 */}
// <div className="loc-icon-more_horiz">
//     <ButtonDel_NB />
// </div>
// {/* 星期N */}
// <div className="schedule_day">星期五</div>
// {/* 備註 */}
// <div className="note">
//     星期五猴子去跳舞
// </div>
//                 {/* 景點列表 */}
//                 <div className="spotList">

//                     {/* 第一個景點 */}
//                     <SpotCard />

//                     {/* 交通方式 */}
//                     {/* <TimeCard /> */}

//                     {/* 第二個景點 */}
//                     <SpotCard />

//                     {/* 交通方式 */}

//                     {/* <TimeCard /> */}


//                     {/* 第三個景點 */}
//                     <SpotCard />
//                 </div>


// <div className="btn_addspot-wrap">
//     {/* 回到收藏 */}
//     <div className="btn_addspot">
//         <div className="btnAddSpotTitle">
//             <span className="icon-love"></span>
//             <h3 className='h3_title'>從收藏加入</h3>
//         </div>
//     </div>
//     {/* 回到探索 */}
//     <div className="btn_addspot">
//         <div className="btnAddSpotTitle">
//             <span className="icon-search"></span>
//             <h3 className='h3_title'>從探索加入</h3>
//         </div>
//     </div>
// </div>
//             </fieldset>
//         </>
//     )
// }

// export default ScheduleSheet


// ---------------嘗試串API-------------------

// import React from 'react';
// import "./ScheduleSheet.scss"
// import SpotCard from '../ScheduleCard/SpotCard/SpotCard.jsx'
// import ButtonDel_NB from '../Button/ButtonDel_NB/ButtonDel_NB.jsx'

// const ScheduleSheet = ({ dataSourceID, onUpdateDataSourceID }) => {
//     return (
//         <>
//             <fieldset className="schedule">
// {/* 行程表刪除鍵 */}
// <div className="loc-icon-more_horiz">
//     <ButtonDel_NB />
// </div>
// {/* 星期N */}
// <div className="schedule_day">星期五</div>
// {/* 備註 */}
// <div className="note">
//     星期五猴子去跳舞
// </div>


//                 {/* 景點列表 */}
//                 <div className="spotList">
//                     {/* 第一個景點 */}
//                     <SpotCard dataSourceID={dataSourceID} onUpdateDataSourceID={onUpdateDataSourceID} />
//                     {/* 添加其他景點 */}
//                 </div>


//                 <div className="btn_addspot-wrap">
//                     {/* 回到收藏 */}
//                     <div className="btn_addspot">
//                         <div className="btnAddSpotTitle">
//                             <span className="icon-love"></span>
//                             <h3 className='h3_title'>從收藏加入</h3>
//                         </div>
//                     </div>
//                     {/* 回到探索 */}
//                     <div className="btn_addspot">
//                         <div className="btnAddSpotTitle">
//                             <span className="icon-search"></span>
//                             <h3 className='h3_title'>從探索加入</h3>
//                         </div>
//                     </div>
//                 </div>
//             </fieldset>
//         </>
//     )
// }

// export default ScheduleSheet;


// ======================22222222222222222222222222222222222222222222222222

// import React from 'react';
// import "./ScheduleSheet.scss"
// import SpotCard from '../ScheduleCard/SpotCard/SpotCard.jsx'
// import ButtonDel_NB from '../Button/ButtonDel_NB/ButtonDel_NB.jsx'

// const ScheduleSheet = ({ sheetID, dataSourceID, spotCards, onUpdateDataSourceID, onAddSpotCard }) => {
//     return (
//         <>
//             <fieldset className="schedule">
//                 {/* 行程表刪除鍵 */}
//                 <div className="loc-icon-more_horiz">
//                     <ButtonDel_NB />
//                 </div>
//                 {/* 星期N */}
//                 <div className="schedule_day">星期五</div>
//                 {/* 備註 */}
//                 <div className="note">
//                     星期五猴子去跳舞
//                 </div>

//                 {/* 景點列表 */}
//                 <div className="spotList">
//                     {spotCards.map(cardID => (
//                         <SpotCard
//                             key={cardID}
//                             sheetID={sheetID}
//                             dataSourceID={dataSourceID}
//                             onUpdateDataSourceID={onUpdateDataSourceID}
//                         />
//                     ))}
//                 </div>
//                 {/* 添加景點按鈕 */}
//                 <div className="btn_addspot-wrap">
//                     <div className="btn_addspot" onClick={() => onAddSpotCard(sheetID)}>
//                         <div className="btnAddSpotTitle">
//                             <span className="icon-love"></span>
//                             <h3 className='h3_title'>從收藏加入</h3>
//                         </div>
//                     </div>
//                     <div className="btn_addspot" onClick={() => onAddSpotCard(sheetID)}>
//                         <div className="btnAddSpotTitle">
//                             <span className="icon-search"></span>
//                             <h3 className='h3_title'>從探索加入</h3>
//                         </div>
//                     </div>
//                 </div>
//             </fieldset>
//         </>
//     )
// }

// export default ScheduleSheet;


import React from 'react';
import "./ScheduleSheet.scss"
import SpotCard from '../ScheduleCard/SpotCard/SpotCard.jsx'
import ButtonDel_NB from '../Button/ButtonDel_NB/ButtonDel_NB.jsx'
import NoteInput from './NoteInput/NoteInput.jsx'
import TimeCard from '../ScheduleCard/TimeCard/TimeCard.jsx'

const ScheduleSheet = ({ numCards, ids }) => {


    return (
        <fieldset className="schedule">
            {/* 行程表刪除鍵 */}
            <div className="loc-icon-more_horiz">
                <ButtonDel_NB />
            </div>
            {/* 星期N */}
            <div className="schedule_day">星期五</div>
            {/* 備註 */}
            <NoteInput defaultNote="備註:開心出遊╰(*°▽°*)╯" />

            {/* 景點列表 */}
            {/* <div className="spotList">
                {[...Array(numCards)].map((_, index) => (
                    <SpotCard key={index} id={ids[index]} />
                ))}
            </div> */}
            <div className="spotList">
                {Array.from({ length: numCards }).map((_, index) => (
                    <React.Fragment key={index}>
                        <SpotCard id={ids[index]} />
                        {index !== numCards - 1 && <TimeCard />}
                    </React.Fragment>
                ))}
            </div>



            {/* 添加景點按鈕 */}
            <div className="btn_addspot-wrap">
                <div className="btn_addspot" onClick={() => onAddSpotCard(sheetID)}>
                    <div className="btnAddSpotTitle">
                        <span className="icon-love"></span>
                        <h3 className='h3_title'>從收藏加入</h3>
                    </div>
                </div>
                <div className="btn_addspot" onClick={() => onAddSpotCard(sheetID)}>
                    <div className="btnAddSpotTitle">
                        <span className="icon-search"></span>
                        <h3 className='h3_title'>從探索加入</h3>
                    </div>
                </div>
            </div>
        </fieldset>
    );
}
export default ScheduleSheet;