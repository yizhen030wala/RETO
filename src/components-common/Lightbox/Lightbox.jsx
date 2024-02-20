// 行李清單的燈箱

import React, { useRef, useState } from 'react';
import './Lightbox.scss';
// import '../css/Lightbox.css';

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