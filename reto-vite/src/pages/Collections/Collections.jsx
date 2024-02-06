import React, { useState } from "react";
import "./CSS/Collections.scss";
import CategoryCollections from "./CategoryCollections/CategoryCollections";
import HeaderCollections from "./HeaderCollections/HeaderCollections";
import SearchCollections from "./SearchCollections/SearchCollections";


function Collections() {
  return (
    <div>
      <div>
        <HeaderCollections />
        {/* 搜尋 */}
        <SearchCollections />
        {/* 分類 */}
        <CategoryCollections />
      </div>

      {/* 收藏 */}
      <main>
        {/* 區塊輪播/瀑布流搜尋結果 */}
        {/* <Carousel /> */}
      </main>
    </div>
  );
}

export default Collections;
