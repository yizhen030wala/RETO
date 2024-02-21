import Masonry from "react-masonry-component";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../CSS/Collections.scss";
import Card from "../../Search/Card/Card.jsx";
import LightBox_Card from '../../Search/LightBox_Card/LightBox_Card.jsx';


//輪播區塊
const CarouselCollections = ({
  updateSelectedCount,
  currentIndex,
  arr_area,
}) => {
  // const arr_area = ["吃", "住宿", "景點"];
  const arr_class = ["eat", "accommodation", "fun"];

  //管理選中的卡片
  const [selectedCards, setSelectedCards] = useState([]);
  //燈箱
  const [lightboxOpen, setLightboxOpen] = useState(false); // 燈箱開關狀態
  const [selectedImage, setSelectedImage] = useState(null); // 選中的圖片

  //打開燈箱LightBox_Card
  const handleOpenLightbox = (img) => {
    //開啟燈箱時禁止網頁滾軸捲動
    document.body.classList.add("no-scroll");
    setSelectedImage(img);
    setLightboxOpen(true);
  };

  const handleSelectCard = (index) => {
    let newSelectedCards;
    if (selectedCards.includes(index)) {
      newSelectedCards = selectedCards.filter((i) => i !== index);
    } else if (selectedCards.length < 10) {
      newSelectedCards = [...selectedCards, index];
    } else {
      return; // 如果已經達到最大選中數量，則不進行任何操作
    }

    setSelectedCards(newSelectedCards); // 更新選中的卡片
    updateSelectedCount(newSelectedCards.length); // 更新選中的數量
  };

  // 關閉燈箱
  const closeLightbox = () => {
    document.body.classList.remove("no-scroll");
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  //若點選空白區域，取消所有選取
  const handleClickOutside = (event) => {
    // 如果燈箱打開，不取消選取
    if (event.target.closest(".box_card")) {
      return;
    }
    // 檢查點擊事件是否發生在卡片元素之外
    if (!event.target.closest(".card_search")) {
      setSelectedCards([]); // 取消所有卡片的選中
      updateSelectedCount(0); // 將選中數量更新為'0'
    }
  };

  // 使用 useEffect添加和移除事件監聽器
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    // 強制執行一次 Masonry 布局更新
    setTimeout(() => {
      if (masonryRef.current) {
        masonryRef.current.performLayout();
      }
    }, 1000); // $$ 毫秒後執行
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const masonryOptions = {
    itemSelector: ".card_search",
    columnWidth: 230,
    gutter: 20,
    percentPosition: false,
    fitWidth: false,
    transitionDuration: "0.35s",
    horizontalOrder: true,
    isInitLayout: true,
    imagesLoaded: true,
    stagger: 0,
    isAnimated: true,
  };

  //滾動卷軸時，使用ref更新布局
  const masonryRef = React.useRef(null);
  React.useEffect(() => {
    const handleScroll = () => {
      // 在這裡觸發 Masonry 布局更新
      if (masonryRef.current) {
        masonryRef.current.performLayout();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  // ↓↓↓ API ↓↓↓
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.airtable.com/v0/appAZmHoN0ZgUBhGi/tblLuHs5ExVo7WrJM",
          {
            headers: {
              Authorization: `Bearer patPf99e6W2EBor8W.e2fe347dbdcf5b651cc6be631787070d5152604b494f295525430af19409a4bf`,
            },
          }
        );
        setRecords(response.data.records);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error details:", error.response.data);
      }
    };

    fetchData();
  }, []);
  // ↑↑↑ API ↑↑↑

  const CardPlaceholder = () => (
    <div className="loading"></div>
  )

  return (
    <div className="box_carousel_collections">
      {/* 添加外層 div */}
      {arr_area.map((area, index) => (
        <div
          className={`box_turn ${arr_class[index]} ${index === currentIndex ? "current" : ""
            }`}
          key={index}
          style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
        >
          <div className="area_collections">{area}</div>
          <div className="wrapper">
            <div id="card_container">
              <Masonry
                // key={images.length}
                options={masonryOptions}
                ref={masonryRef}
                disableImagesLoaded={false}
                updateOnEachImageLoad={true}
              >
                {records.map((record, idx) => (
                  <Card
                    key={idx}
                    img={record.fields["location cover"]}
                    index={idx}
                    onSelect={() => handleSelectCard(idx)}
                    onOpenLightbox={() =>
                      handleOpenLightbox(record.fields["location cover"])
                    }
                    selected={selectedCards.includes(idx)}
                    order={selectedCards.indexOf(idx) + 1} // 獲取選中順序
                    data={record.fields}
                  />
                ))}
              </Masonry>
            </div>
          </div>
        </div>
      ))}
      {/* 條件渲染 LightBox_Card */}
      {lightboxOpen && (
        <LightBox_Card image={selectedImage} onClose={closeLightbox} />
      )}
    </div>
  );
};

export default CarouselCollections;
