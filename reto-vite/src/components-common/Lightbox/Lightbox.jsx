

// import React, { useState } from 'react';
// import './Lightbox.css';

// const Lightbox = ({ onClose }) => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div className="lightbox-overlay" onClick={onClose}>
//       <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
//         <div className="lightbox-content">
//           <h2>Lightbox</h2>
//           <label className="checkbox-container">
//             <input
//               type="checkbox"
//               checked={isChecked}
//               onChange={handleCheckboxChange}
//             />
//           </label>
//           <button onClick={(event) => { event.stopPropagation(); onClose(); }}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lightbox

// =====================================================================================


// import React, { useState } from 'react';
// import './Lightbox.css';

// const Lightbox = ({ onClose }) => {
//   const [isCheckedList, setIsCheckedList] = useState({
//     towel: false,
//     water: false,
//   });

//   const handleCheckboxChange = (item) => {
//     setIsCheckedList({
//       ...isCheckedList,
//       [item]: !isCheckedList[item],
//     });
//   };

//   return (
//     <div className="lightbox-overlay" onClick={onClose}>
//       <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
//         <div className="lightbox-content">
//           <h2>Todo List</h2>
//           <label className="checkbox-container">
//             <input
//               type="checkbox"
//               checked={isCheckedList.towel}
//               onChange={() => handleCheckboxChange('towel')}
//             />
//             Towel
//           </label>
//           <label className="checkbox-container">
//             <input
//               type="checkbox"
//               checked={isCheckedList.water}
//               onChange={() => handleCheckboxChange('water')}
//             />
//             Water
//           </label>
//           <button onClick={(event) => { event.stopPropagation(); onClose(); }}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lightbox;


// =====================================================================================

// 最成功的一版

// import React, { useState } from 'react';
// import './Lightbox.css';
// import TodoList from './TodoList/TodoList';

// const Lightbox = ({ onClose }) => {
//   // const [isCheckedList, setIsCheckedList] = useState();

//   // const handleCheckboxChange = (item) => {
//   //   setIsCheckedList({
//   //     ...isCheckedList,
//   //     [item]: !isCheckedList[item],
//   //   });
//   // };

//   return (
//     <div className="lightbox-overlay" onClick={onClose}>
//       <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
//         <div className="lightbox-content">
//           <div><TodoList/></div>
//           <button onClick={(event) => { event.stopPropagation(); onClose(); }}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lightbox;

// ==============================================================================
// import React, { useRef } from 'react';
// import './Lightbox.css';
// import TodoList from './TodoList/TodoList';

// const Lightbox = ({ onClose }) => {
//   const lightboxRef = useRef(null); // 取得燈箱的參考

//   const handleClose = () => {
//     const lightbox = lightboxRef.current;

//     // 添加淡出和向上滑出的動畫效果
//     lightbox.classList.add('fade-out');
//     lightbox.addEventListener('animationend', onClose, { once: true });
//   };

//   return (
//     <div className="lightbox-overlay" onClick={handleClose}>
//       <div
//         ref={lightboxRef}
//         className="lightbox-container"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="lightbox-content">
//           <div><TodoList/></div>
//           <button onClick={handleClose}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lightbox;


// ======================================================================
import React, { useRef, useState } from 'react';
import './Lightbox.css';
// import "./Button/ButtonChk.css";
import TodoList from './TodoList/TodoList';
import TodoListStart from './TodoList/TodoListStart';
import ButtonChk from "../Button/ButtonChk/ButtonChk.jsx";
import ButtonTag from "../../components-common/Button/ButtonTag/ButtonTag.jsx";

const Lightbox = ({ onClose }) => {
  const lightboxRef = useRef(null); // 取得燈箱的參考
  const overlayRef = useRef(null); // 取得背景的參考
  const [items, setItems] = useState([]); // 使用 useState 定義 items 狀態

  const handleClose = () => {
    const lightbox = lightboxRef.current;
    const overlay = overlayRef.current;

    // 添加燈箱向上滑出並且淡出的動畫效果
    lightbox.classList.add('slide-up-and-fade-out');
    overlay.classList.add('fade-out');

    // 監聽燈箱的滑出並且淡出動畫結束事件
    lightbox.addEventListener('animationend', onClose, { once: true });
    overlay.addEventListener('animationend', onClose, { once: true });
  };

  const handleAddItem = (itemName) => {
    // 根據按鈕的名稱添加對應的項目
    switch (itemName) {
      case '跑山行':
        setItems([
          ...items,
          '登山杖',
          '帽子',
          '運動毛巾',
        ]);
        break;
      // 添加其他按鈕的操作
      case '玩水':
        setItems([
          ...items,
          '泳衣',
          '防曬乳',
          '海灘巾'
        ]);
        break;
      case '網美景點':
        setItems([
          ...items,
          '化妝品',
          '相機',
          '工具人'
        ]);
        break;
      case '三天兩夜':
        setItems([
          ...items,
          '眼罩',
          '頸枕',
        ]);
        break;
    }
  };

  return (
    <div ref={overlayRef} className="lightbox-overlay" onClick={handleClose}>
      <div
        ref={lightboxRef}
        className="lightbox-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="scroller">
          <p className="note-title">行李清單</p>
          {/* 篩選項目 */}
          <div className="filter-wrap">
            <ButtonTag onClick={() => handleAddItem('跑山行')}>跑山行</ButtonTag>
            <ButtonTag onClick={() => handleAddItem('玩水')}>玩水</ButtonTag>
            <ButtonTag onClick={() => handleAddItem('網美景點')}>網美景點</ButtonTag>
            <ButtonTag onClick={() => handleAddItem('三天兩夜')}>三天兩夜</ButtonTag>
          </div>
          <div className="list-wrap">
            <TodoListStart/>
            <TodoList items={items} /> {/* 將 items 傳遞給 TodoList 組件 */}
          </div>
        </div>
        {/* 在這裡放置按鈕 */}
        <div className="btn-close-wrap">
          <span onClick={handleClose} className="icon-close"></span>
        </div>
        <div className="btn-check-wrap">
          <ButtonChk onClick={handleClose}>確定</ButtonChk>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
  // ============================================================  
