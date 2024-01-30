// import React, { useState } from 'react';

// const MyTripCard = ({ imageUrl, initialName, days }) => {
//     const [name, setName] = useState(initialName);
//     const [isEditing, setIsEditing] = useState(false);

//     const handleNameClick = () => {
//         setIsEditing(true);
//     };

//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const handleNameBlur = () => {
//         setIsEditing(false);
//         // 在這裡處理名稱儲存
//         console.log('儲存名稱:', name);
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter') {
//             handleNameBlur();
//         }
//     };

//     return (
//         <div className="schedule_card">
//             <a href="#" className="btn_del">
//                 <span className="icon-more_horiz"></span>
//             </a>

//             <div className="schedule_cover">
//                 <img src={imageUrl} alt="spot" />
//             </div>

//             <div className="schedule_text">
//                 {isEditing ? (
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={handleNameChange}
//                         onBlur={handleNameBlur}
//                         onKeyDown={handleKeyDown}
//                         autoFocus
//                     />
//                 ) : (
//                     <a href="#" className="schedule_name" onClick={handleNameClick}>
//                         {name}
//                     </a>
//                 )}
//                 <p className="schedule_day">{days}</p>
//             </div>
//         </div>
//     );
// };

// export default MyTripCard;

// ------------------------------------------------------------------------------------ 

// import React, { useState } from 'react';

// const MyTripCard = ({ imageUrl, name, days, onNameClick }) => { // 正確地使用 name prop
//     const [isEditing, setIsEditing] = useState(false);

//     const handleNameClick = () => {
//         setIsEditing(true);
//     };

//     const handleNameChange = (e) => {
//         // 在此處進行名稱更改的處理
//     };

//     const handleNameBlur = () => {
//         setIsEditing(false);
//         // 在這裡處理名稱儲存
//         console.log('儲存名稱:', name);
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter') {
//             handleNameBlur();
//         }
//     };

//     return (
//         <div className="schedule_card">
//             <a href="#" className="btn_del">
//                 <span className="icon-more_horiz"></span>
//             </a>

//             <div className="schedule_cover">
//                 <img src={imageUrl} alt="spot" />
//             </div>

//             <div className="schedule_text">
//                 {isEditing ? (
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={handleNameChange}
//                         onBlur={handleNameBlur}
//                         onKeyDown={handleKeyDown}
//                         autoFocus
//                     />
//                 ) : (
//                     <a href="#" className="schedule_name" onClick={onNameClick}>
//                         {name}
//                     </a>
//                 )}
//                 <p className="schedule_day">{days}</p>
//             </div>
//         </div>
//     );
// };

// export default MyTripCard;

// ===============================================================================
// import React, { useState } from 'react';
// import "./MyTripCard.css";

// const MyTripCard = ({ imageUrl, name, days, onNameChange }) => {
//     const [editedName, setEditedName] = useState(name);
//     const [isEditing, setIsEditing] = useState(false);

//     const handleNameClick = () => {
//         setIsEditing(true);
//     };

//     const handleNameChange = (e) => {
//         setEditedName(e.target.value);
//     };

//     const handleNameBlur = () => {
//         setIsEditing(false);
//         // 在這裡處理名稱儲存
//         onNameChange(editedName);
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === 'Enter') {
//             handleNameBlur();
//         }
//     };

//     return (
//         <div className="schedule_card">
//             <a href="#" className="btn_del">
//                 <span className="icon-more_horiz"></span>
//             </a>

//             <div className="schedule_cover">
//                 <img src={imageUrl} alt="spot" />
//             </div>

//             <div className="schedule_text">
//                 {isEditing ? (
//                     <input
//                         type="text"
//                         className="editable-input" // 添加可編輯的輸入框樣式
//                         value={editedName}
//                         onChange={handleNameChange}
//                         onBlur={handleNameBlur}
//                         onKeyDown={handleKeyDown}
//                         autoFocus
//                     />
//                 ) : (
//                     <a href="#" className="schedule_name" onClick={handleNameClick}>
//                         {name}
//                     </a>
//                 )}
//                 <p className="schedule_day">{days}</p>
//             </div>
//         </div>
//     );
// };

// export default MyTripCard;



import React from 'react';
import "./MyTripCard.css";

const MyTripCard = ({ imageUrl, name, days }) => {
    return (
        <div className="schedule_card">
            <a href="#" className="btn_del">
                <span className="icon-more_horiz"></span>
            </a>

            <div className="schedule_cover">
                <img src={imageUrl} alt="spot" />
            </div>

            <div className="schedule_text">
                <a href="#" className="schedule_name">
                    {name}
                </a>
                <p className="schedule_day">{days}</p>
            </div>
        </div>
    );
};

export default MyTripCard;