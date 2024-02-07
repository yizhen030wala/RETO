import React, { useState } from "react";
import "./CSS/Collections.scss";
import CategoryCollections from "./CategoryCollections/CategoryCollections";
import SearchCollections from "./SearchCollections/SearchCollections";


function Collections() {
  return (
    <div>
      <div>
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
