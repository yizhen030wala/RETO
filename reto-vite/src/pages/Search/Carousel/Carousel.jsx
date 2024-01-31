import Masonry from "react-masonry-component";
import React, { useState } from "react";
import { data_img } from "./data.js";
import "./Search.css";
import Card from '../Card/Card.jsx';
import Tags_carousel from '../Tags_carousel/Tags_carousel.jsx';
import LightBox_Card from '../LightBox_Card/LightBox_Card.jsx';

//輪播區塊
const Carousel = ({ updateSelectedCount }) => {
  const arr_area = ["住", "吃", "玩"];
  const arr_class = ["accommodation", "eat", "fun"];

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
      return; // 如果已经达到最大选中数量，则不进行任何操作
    }

    setSelectedCards(newSelectedCards); // 更新选中的卡片
    updateSelectedCount(newSelectedCards.length); // 使用新数组的长度更新选中的数量

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
    // 如果燈箱打开，不取消选取
    if (event.target.closest(".box_card")) {
      return;
    }

    // 检查点击事件是否发生在卡片元素之外
    if (!event.target.closest(".card_search")) {
      setSelectedCards([]); // 取消所有卡片的选中
      updateSelectedCount(0); // 将选中数量更新为0
    }
  };

  // 使用 useEffect添加和移除事件监听器
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    // 強制執行一次 Masonry 布局更新
    setTimeout(() => {
      if (masonryRef.current) {
        masonryRef.current.performLayout();
      }
    }, 1000); // 500 毫秒後執行
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

  return (
    <div className="box_carousel">
      {" "}
      {/* 添加外層 div */}
      {arr_area.map((area, index) => (
        <div className={`box_turn ${arr_class[index]}`} key={index}>
          <div className="search_text">
            <div className="item">
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
                options={masonryOptions}
                ref={masonryRef}
                disableImagesLoaded={false}
                updateOnEachImageLoad={true}
              >
                {data_img.map((img, idx) => (
                  <Card
                    key={idx}
                    img={img}
                    index={idx}
                    onSelect={() => handleSelectCard(idx)}
                    onOpenLightbox={() => handleOpenLightbox(img)}
                    selected={selectedCards.includes(idx)}
                    order={selectedCards.indexOf(idx) + 1} // 獲取選中順序
                    data_img={data_img}
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

export default Carousel;
