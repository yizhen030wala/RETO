import React, { useState } from "react";
import '../CSS/Collections.scss';
import Location from '../Location/Location';
import magnifier from '../../../assets/img_hsc/search_bar/magnifier.svg';
import filter from '../../../assets/img_hsc/search_bar/filter.svg';

const SearchCollections = () => {
  return (
    <section className="area_search">
      <div className="search">
        <div className="bar_search">
          <div>
            <input type="text" placeholder="想去哪裡玩？" />
          </div>
          <div>
            {/* 放大鏡icon */}
            <figure className="S1">
              <img src={magnifier} alt="" />
            </figure>
            {/* 篩選圖片 */}
            <figure className="S2">
              <img src={filter} alt="" />
            </figure>
          </div>
        </div>
        {/* 地點 */}
        <Location />
      </div>
    </section>
  );
};

export default SearchCollections;
