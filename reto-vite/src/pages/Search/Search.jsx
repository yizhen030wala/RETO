import React, { useState } from "react";
import HeaderSearch from "./HeaderSearch/HeaderSearch";
import Carousel from "./Carousel/Carousel";
import FixedBtn from "./FixedBtn/FixedBtn";
import "./CSS/Search.scss";
import Set_Journey from "../Search/Set_Journey/Set_journey"; // 新增引入 Set_Journey 元件

function Search() {
  //讓選中的數量顯示
  const [selectedCount, setSelectedCount] = useState(0); // 新的狀態
  // 更新選中的數量
  const updateSelectedCount = (count) => {
    setSelectedCount(count);
  };

  const [currentIndex, setCurrentIndex] = useState(1); // 初始化 currentIndex 狀態
  const arr_area = ["住宿", "吃", "景點"];

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

  //點擊往左箭頭
  const handleArrowLeftClick = () => {
    console.log("Left arrow clicked");
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  //點擊往右箭頭
  const handleArrowRightClick = () => {
    console.log("Right arrow clicked");
    if (currentIndex < arr_area.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <HeaderSearch />
      <main className="main_search">
        {/* 區塊輪播/瀑布流搜尋結果 */}
        <Carousel
          updateSelectedCount={updateSelectedCount}
          currentIndex={currentIndex}
          arr_area={arr_area}
          onOpenLightbox={handleOpenLightbox} // 傳遞打開燈箱的函數
        />
        {/* Fixed固定左右切換/加入行程按鈕 */}
        <FixedBtn
          selectedCount={selectedCount}
          handleArrowLeftClick={handleArrowLeftClick}
          handleArrowRightClick={handleArrowRightClick}
          onOpenLightbox={handleOpenLightbox} // 傳遞打開燈箱的函數
        />{" "}
        {/* 傳遞選中的數量 */}
        {/* 如果燈箱打開，則渲染 Set_Journey 元件 */}
        {lightboxOpen && <Set_Journey onClose={handleCloseLightbox} />}
      </main>
    </div>
  );
}

export default Search;
