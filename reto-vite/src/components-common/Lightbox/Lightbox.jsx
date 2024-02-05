// import React, { useRef, useState } from 'react';
// import './Lightbox.css';
// // import "./Button/ButtonChk.css";
// import TodoList from './TodoList/TodoList';
// import TodoListStart from './TodoList/TodoListStart';
// import ButtonChk from "../Button/ButtonChk/ButtonChk.jsx";
// import ButtonTag from "../../components-common/Button/ButtonTag/ButtonTag.jsx";

// const Lightbox = ({ onClose }) => {
//   const lightboxRef = useRef(null); // 取得燈箱的參考
//   const overlayRef = useRef(null); // 取得背景的參考
//   const [items, setItems] = useState([]); // 使用 useState 定義 items 狀態

//   const handleClose = () => {
//     const lightbox = lightboxRef.current;
//     const overlay = overlayRef.current;

//     // 添加燈箱向上滑出並且淡出的動畫效果
//     lightbox.classList.add('slide-up-and-fade-out');
//     overlay.classList.add('fade-out');

//     // 監聽燈箱的滑出並且淡出動畫結束事件
//     lightbox.addEventListener('animationend', onClose, { once: true });
//     overlay.addEventListener('animationend', onClose, { once: true });
//   };

//   const handleAddItem = (itemName) => {
//     // 根據按鈕的名稱添加對應的項目
//     switch (itemName) {
//       case '跑山行':
//         setItems([
//           ...items,
//           '登山杖',
//           '帽子',
//           '運動毛巾',
//         ]);
//         break;
//       // 添加其他按鈕的操作
//       case '玩水':
//         setItems([
//           ...items,
//           '泳衣',
//           '防曬乳',
//           '海灘巾'
//         ]);
//         break;
//       case '網美景點':
//         setItems([
//           ...items,
//           '化妝品',
//           '相機',
//           '工具人'
//         ]);
//         break;
//       case '三天兩夜':
//         setItems([
//           ...items,
//           '眼罩',
//           '頸枕',
//         ]);
//         break;
//     }
//   };

//   return (
//     <div ref={overlayRef} className="lightbox-overlay" onClick={handleClose}>
//       <div
//         ref={lightboxRef}
//         className="lightbox-container"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="scroller">
//           <p className="note-title">行李清單</p>
//           {/* 篩選項目 */}
//           <div className="filter-wrap">
//             <ButtonTag onClick={() => handleAddItem('跑山行')}>跑山行</ButtonTag>
//             <ButtonTag onClick={() => handleAddItem('玩水')}>玩水</ButtonTag>
//             <ButtonTag onClick={() => handleAddItem('網美景點')}>網美景點</ButtonTag>
//             <ButtonTag onClick={() => handleAddItem('三天兩夜')}>三天兩夜</ButtonTag>
//           </div>
//           <div className="list-wrap">
//             <TodoList items={items} /> {/* 將 items 傳遞給 TodoList 組件 */}
//             <TodoListStart />

//           </div>
//         </div>
//         {/* 在這裡放置按鈕 */}
//         <div className="btn-close-wrap">
//           <span onClick={handleClose} className="icon-close"></span>
//         </div>
//         <div className="btn-check-wrap">
//           <ButtonChk onClick={handleClose}>確定</ButtonChk>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lightbox;
// // ============================================================  

import React, { useRef, useState } from 'react';
import './Lightbox.css';
import TodoList from './TodoList/TodoList';
import TodoListStart from './TodoList/TodoListStart';
import ButtonChk from "../Button/ButtonChk/ButtonChk.jsx";
import ButtonTag from "../../components-common/Button/ButtonTag/ButtonTag.jsx";

const Lightbox = ({ onClose }) => {
  const lightboxRef = useRef(null);
  const overlayRef = useRef(null);
  const [items, setItems] = useState([]);

  const handleClose = () => {
    const lightbox = lightboxRef.current;
    const overlay = overlayRef.current;

    lightbox.classList.add('slide-up-and-fade-out');
    overlay.classList.add('fade-out');

    lightbox.addEventListener('animationend', onClose, { once: true });
    overlay.addEventListener('animationend', onClose, { once: true });
  };

  const handleAddItem = (itemName) => {
    let newItem;
    switch (itemName) {
      case '跑山行':
        newItem = ['登山杖', '帽子', '運動毛巾'];
        break;
      case '玩水':
        newItem = ['泳衣', '防曬乳', '海灘巾'];
        break;
      case '網美景點':
        newItem = ['化妝品', '相機', '工具人'];
        break;
      case '三天兩夜':
        newItem = ['眼罩', '頸枕'];
        break;
      default:
        newItem = [];
    }
    // 在現有項目之前插入新項目
    setItems([...newItem, ...items]);
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
          <div className="filter-wrap">
            <ButtonTag onClick={() => handleAddItem('跑山行')}>跑山行</ButtonTag>
            <ButtonTag onClick={() => handleAddItem('玩水')}>玩水</ButtonTag>
            <ButtonTag onClick={() => handleAddItem('網美景點')}>網美景點</ButtonTag>
            <ButtonTag onClick={() => handleAddItem('三天兩夜')}>三天兩夜</ButtonTag>
          </div>
          {/* 將 items 和 TodoListStart 包裝在同一個容器中 */}
          <div className="list-wrap">
            <TodoList items={items} />
            <TodoListStart />
          </div>
        </div>
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