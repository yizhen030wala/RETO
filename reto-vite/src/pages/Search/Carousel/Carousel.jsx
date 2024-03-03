import Masonry from "react-masonry-component";
import axios from "axios";
import LazyLoad from "react-lazyload";
import React, { useState, useEffect, useRef } from "react";
import "../CSS/Search.scss";
import Card from "../Card/Card.jsx";
import Tags_carousel from "../Tags_carousel/Tags_carousel.jsx";
import LightBox_Card from "../LightBox_Card/LightBox_Card.jsx";
import loading_search from "../../../assets/img/loading/searchlg.png";

//輪播區塊
const Carousel = ({ updateSelectedCount, currentIndex, arr_area }) => {
  // const arr_area = ["住宿", "吃", "景點"];
  const arr_class = ["accommodation", "eat", "fun"];

  // 計算子元素(box_turn)高度後，給父元素(box_carousel)
  const [boxCarouselHeight, setBoxCarouselHeight] = useState(0);
  const boxCarouselRef = useRef(null);
  const masonryRef = useRef(null); // 單一定義位置

  useEffect(() => {
    // 更新 box_carousel 的高度為 Masonry 內容的高度
    const updateHeight = () => {
      if (boxCarouselRef.current && masonryRef.current) {
        const masonryHeight = masonryRef.current.offsetHeight; // 獲取 Masonry 組件的當前高度
        setBoxCarouselHeight(masonryHeight);
      }
    };

    // 窗口大小變化時更新高度
    window.addEventListener('resize', updateHeight);
    // 初始更新一次高度
    updateHeight();

    // 清理函數
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [arr_area, currentIndex]); // 依賴於 arr_area 和 currentIndex 以在這些值變化時更新高度



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
      return; // 如果已经達到最大選中數量，則不進行任何操作
    }

    setSelectedCards(newSelectedCards); // 更新選中的卡片
    updateSelectedCount(newSelectedCards.length); // 使更新選中數量

    // 開啟燈箱並設置選中的圖片
    // setSelectedImage(data_img[index]);
    // setLightboxOpen(true);
  };

  // 關閉燈箱
  const closeLightbox = () => {
    document.body.classList.remove("no-scroll");
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  //若點選空白區域，取消所有選取
  const handleClickOutside = (event) => {
    // 如果燈箱開啟，不取消選取
    if (event.target.closest(".box_card")) {
      return;
    }

    // 檢查點擊事件是否發生在卡片元素之外
    if (!event.target.closest(".card_search")) {
      setSelectedCards([]); // 取消所有卡片的選中
      updateSelectedCount(0); // 將選中數量更新為0
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
    }, 500);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setMasonryOptions({
          ...masonryOptions,
          columnWidth: 500,
          gutter: -450,

        });
      } else if (window.innerWidth <= 1200) {
        setMasonryOptions({
          ...masonryOptions,
          columnWidth: 350,
          gutter: -100,
        });
      } else {
        setMasonryOptions({
          ...masonryOptions,
          columnWidth: 230,
          gutter: 20,
        });
      }
    };

    handleResize(); // 初始化

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依賴陣列確保只有在組件初始化時才會設置事件監聽器
  // 根據列數計算容器的寬度

  const [masonryOptions, setMasonryOptions] = useState({
    itemSelector: ".card_search",
    columnWidth: 230,
    gutter: 20,
    percentPosition: true,
    fitWidth: false,
    transitionDuration: "0.35s",
    horizontalOrder: true,
    isInitLayout: true,
    imagesLoaded: true,
    stagger: 0,
    isAnimated: true,
  });


  const calculateContainerWidth = (columnWidth, gutter, columns) => {
    return columns * (columnWidth + gutter) - gutter;
  };

  // 在組件中設置列數和容器寬度
  // const columns = 3; // 新的列數
  // const containerWidth = calculateContainerWidth(masonryOptions.columnWidth, masonryOptions.gutter, columns);

  // 解析圖片URL並計算高度
  const calculateHeightFromUrl = (imageUrl, targetWidth = 230) => {
    const regex = /w(\d+)-h(\d+)/; // 寬高的正式表達式
    const match = imageUrl.match(regex);
    if (match) {
      const width = parseInt(match[1], 10);
      const height = parseInt(match[2], 10);
      // 根据目標寬度計算新高度，保持寬高比
      const newHeight = (height / width) * targetWidth;
      return newHeight;
    }
    return null; // 如果URL中沒有寬高信息，返回null
  };

  //滾動卷軸時，使用ref更新布局
  // const masonryRef = React.useRef(null);
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
  const [loading, setLoading] = useState(true);

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
        setLoading(false); // 資料載入完成後設置 loading 為 false
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
    <div className="box_carousel" ref={boxCarouselRef} style={{ height: `${boxCarouselHeight}px` }}>
      {loading ? (
        arr_area.map((area, index) => (
          <div
            className={`box_turn ${arr_class[index]} ${index === currentIndex ? "current" : ""}`}
            key={index}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%) ${index !== currentIndex ? "scale(0.8)" : ""}`, // 添加縮放效果
              transition: "transform 0.5s ease", // 添加過渡效果
              // width: `${containerWidth}px`
            }}
          >
            <div className="loading_search"></div>
          </div>
        ))
      ) : (
        arr_area.map((area, index) => (
          <div
            className={`box_turn ${arr_class[index]} ${index === currentIndex ? "current" : ""
              }`}
            key={index}
            style={{ transform: `translateX(${(index - currentIndex) * 105}%)` }}
          >
            <div className="search_text">
              <div className="item_carousel">
                <ul>
                  <li>
                    <h3>{area}</h3>
                  </li>
                  <li>
                    <p>建議景點選3個喔 ~ </p>
                  </li>
                </ul>
              </div>
              <Tags_carousel />
            </div>
            {/* 瀑布流圖片內容 */}
            <div className="wrapper">
              <div id="card_container">
                <Masonry
                  className={"my-gallery-class"}
                  elementType={"ul"}
                  // key={images.length}
                  options={masonryOptions}
                  ref={masonryRef}
                  disableImagesLoaded={false}
                  updateOnEachImageLoad={true}
                  onImagesLoaded={() => setBoxCarouselHeight(masonryRef.current.offsetHeight)}
                >
                  {records.map((record, idx) => {
                    const imageUrl = record.fields["location cover"];
                    const height = calculateHeightFromUrl(imageUrl); // 計算高度
                    return (
                      <Card
                        key={idx}
                        img={imageUrl}
                        height={height}
                        index={idx}
                        onSelect={() => handleSelectCard(idx)}
                        onOpenLightbox={() => handleOpenLightbox(imageUrl)}
                        selected={selectedCards.includes(idx)}
                        order={selectedCards.indexOf(idx) + 1}
                        data={record.fields}
                      />
                    );
                  })}
                </Masonry>
              </div>
            </div>
          </div>
        ))
      )}
      {/* 條件渲染 LightBox_Card */}
      {
        lightboxOpen && (
          <LightBox_Card image={selectedImage} onClose={closeLightbox} />
        )
      }
    </div >
  );
};

export default Carousel;
