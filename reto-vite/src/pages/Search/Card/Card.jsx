import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Search.scss";
import Tags from "../Tags/Tags";
import Marker from "../../../assets/img_hsc/search_card/selected_mark.svg";
import star from "../../../assets/img_hsc/search_card/star.svg";

//卡片元件
const Card = ({ img, index, onSelect, selected, onOpenLightbox, data, height }) => {
  const cardClass = selected ? "card_search selected" : "card_search";
  const dotClass = selected ? "circle" : "dot"; // 更新圓點的 class

  const handleOpenLightbox = (e) => {
    // 檢查事件發生位置 => .dot_card 或其子元素上
    if (e.target.closest(".dot_card")) {
      // 如果是，不打開燈箱
      return;
    } else {
      // 打開燈箱
      onOpenLightbox(img);
    }
  };
  // 處理點擊 .dot_card 的事件
  const handleDotClick = (e) => {
    e.stopPropagation(); // 阻止事件冒泡到卡片
    onSelect(index);
  };

  //處理預設圖片樣式(尚未加載前)
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // ↓↓↓ API ↓↓↓
  //   const [records, setRecords] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(
  //           "https://api.airtable.com/v0/appAZmHoN0ZgUBhGi/tblLuHs5ExVo7WrJM",
  //           {
  //             headers: {
  //               Authorization: `Bearer patPf99e6W2EBor8W.e2fe347dbdcf5b651cc6be631787070d5152604b494f295525430af19409a4bf`,
  //             },
  //           }
  //         );
  //         setRecords(response.data.records);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //         console.error("Error details:", error.response.data);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  // ↑↑↑ API ↑↑↑

  return (
    <div className={cardClass} onClick={handleOpenLightbox}>
      {/* 選取圓點 */}
      <div className="dot_card" onClick={handleDotClick}>
        <div className={dotClass}>
          {/* 圓點實際顯示 */}
          {selected && (
            <div className="checkmark">
              <img src={Marker} alt="" />
            </div>
          )}{" "}
          {/* 如果選中，顯示 checkmark */}
          {/*{selected ? order : ''} 在圖片上顯示選取順序*/}
        </div>
      </div>

      {/* 搜尋圖片 */}
      <figure
        className={`container_card_img ${!isImageLoaded ? "loading" : ""}`}
        // className={`container_card_img`}
        style={{ height: height ? `${height}px` : 'auto' }} // 根據Carsouel中的height調整高度
      >
        <img
          src={img}
          alt={data.location}
          onLoad={() => setIsImageLoaded(true)}
        // style={{ display: isImageLoaded ? "block" : "none" }}
        />
        {/* {!isImageLoaded && <div className="loading"></div>} */}
        {!isImageLoaded && <div className="loading-placeholder" style={{ height: height ? `${height}px` : 'auto' }}></div>} {/* 顯示一個與圖片相同高度的佔位區 */}
      </figure>
      <div className="card_search_info">
        {/* Title */}
        <p className="card_title">{data.location}</p>
        {/* 總評價、評論數及價格 */}
        <div className="evaluate">
          <div className="evaluate_left">
            <span className="score_card">{data["overall rating"]}</span>
            <figure>
              <img src={star} alt="" />
            </figure>
            <span className="mount_card">({data["rating number"]})</span>
          </div>
          {/* 錢字符號 */}
          <span>$$$</span>
        </div>
        <Tags city={data.city} type1={data.type1} type2={data.type2} />
      </div>
    </div>
  );
};

export default Card;
