import React, { useState, useEffect, useRef } from "react";
import "./CSS/Collections.scss";
import CategoryCollections from "./CategoryCollections/CategoryCollections";
import SearchCollections from "./SearchCollections/SearchCollections";
import CarouselCollections from "./CarouselCollections/CarouselCollections";
import FixedBtn from './FixedBtn/FixedBtn';
import Set_Journey from '../Search/Set_Journey/Set_journey'; // 新增引入 Set_Journey 元件


function Collections() {

  // 讓選中的數量顯示
  const [selectedCount, setSelectedCount] = useState(0); // 新的狀態
  // 更新選中的計數
  const updateSelectedCount = (count) => {
    setSelectedCount(count);
  }


  const arr_area = ["吃", "住宿", "景點"];
  const [currentIndex, setCurrentIndex] = useState(0); // 初始化 currentIndex 狀態


  const handleBoxTurnClick = (index) => {
    setCurrentIndex(index);
  };

  // 控制燈箱顯示
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // 點擊 .myJour 時打開燈箱
  const handleOpenLightbox = () => {
    setLightboxOpen(true);
  };
  // 點擊燈箱上的關閉按鈕時關閉燈箱
  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };


  return (
    <div>
      <div>
        {/* 搜尋 */}
        <SearchCollections />
        {/* 分類 */}
        <CategoryCollections handleBoxTurnClick={handleBoxTurnClick} currentIndex={currentIndex} />
      </div>

      {/* 收藏 */}
      <main className="main_collections">
        {/* 區塊輪播/瀑布流搜尋結果 */}
        <CarouselCollections
          updateSelectedCount={updateSelectedCount}
          currentIndex={currentIndex}
          arr_area={arr_area}
          nOpenLightbox={handleOpenLightbox} // 傳遞打開燈箱的函數
        />
      </main>
      <FixedBtn
        selectedCount={selectedCount}
        onOpenLightbox={handleOpenLightbox} // 傳遞打開燈箱的函數
      /> {/* 傳遞選中的數量 */}
      {/* 如果燈箱打開，則渲染 Set_Journey 元件 */}
      {lightboxOpen && <Set_Journey onClose={handleCloseLightbox} />}
    </div>
  );
}

export default Collections;
