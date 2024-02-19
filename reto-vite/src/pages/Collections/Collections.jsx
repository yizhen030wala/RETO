import React, { useState, useEffect, useRef } from "react";
import "./CSS/Collections.scss";
import CategoryCollections from "./CategoryCollections/CategoryCollections";
import SearchCollections from "./SearchCollections/SearchCollections";
import CarouselCollections from "./CarouselCollections/CarouselCollections";
import FixedBtn from './FixedBtn/FixedBtn';

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
        <CarouselCollections updateSelectedCount={updateSelectedCount} currentIndex={currentIndex} arr_area={arr_area} />
      </main>
      <FixedBtn
        selectedCount={selectedCount}
        // handleArrowLeftClick={handleArrowLeftClick}
        // handleArrowRightClick={handleArrowRightClick}
      /> {/* 傳遞選中的數量 */}
    </div>
  );
}

export default Collections;
