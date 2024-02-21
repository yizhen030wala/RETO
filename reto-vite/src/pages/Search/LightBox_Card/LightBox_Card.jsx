import React, { useState } from "react";
import "./LightBox_Card.scss";

//圖片載入
import pic_main from '../../../assets/img_hsc/card_viewpoint/VP_pic_main.png';
import small_pic1 from '../../../assets/img_hsc/card_viewpoint/small_pic1.svg';
import small_pic2 from '../../../assets/img_hsc/card_viewpoint/small_pic2.svg';
import small_pic3 from '../../../assets/img_hsc/card_viewpoint/small_pic3.svg';
import small_pic4 from '../../../assets/img_hsc/card_viewpoint/small_pic4.svg';
import small_pic5 from '../../../assets/img_hsc/card_viewpoint/small_pic5.svg';
import star from '../../../assets/img_hsc/search_card/star.svg';
import location from '../../../assets/img_hsc/card_viewpoint/location.svg';
import internet from '../../../assets/img_hsc/card_viewpoint/internet.svg';
import cancel from '../../../assets/img_hsc/card_viewpoint/cancel.svg';
import favorite_heart from '../../../assets/img_hsc/card_viewpoint/favorite_heart.svg';

const LightBox_Card = ({ image, onClose }) => {
  // 點擊事件
  const handleClickOutsideCard = (e) => {
    // 如果點擊事件不在 .card 元素及其子元素
    if (!e.target.closest(".card")) {
      onClose(); // 關閉燈箱
    }
  };

  // 假設 state 'open' 控制燈箱是否顯示
  const [open, setOpen] = useState(false);
  // 打開燈箱
  const openLightbox = () => setOpen(true);
  // 關閉燈箱
  const closeLightbox = () => setOpen(false);

  return (
    <div className="box_card" onClick={handleClickOutsideCard}>
      <div className={`card ${open ? "open" : ""}`}>
        <div className="card_scrollbox">
          {/* 景點卡片左半部 */}
          <section className="card_info_left">
            {/* 主圖 */}
            <figure className="pic_main">
              <img src={pic_main} alt="" />
            </figure>
            {/* 圖片輪播區 */}
            <div className="pic_carousel_box">
              <div className="pic_carousel">
                <figure>
                  <img src={small_pic1} alt="" />
                </figure>
              </div>
              <div className="pic_carousel">
                <figure>
                  <img src={small_pic2} alt="" />
                </figure>
              </div>
              <div className="pic_carousel">
                <figure>
                  <img src={small_pic3} alt="" />
                </figure>
              </div>
              <div className="pic_carousel">
                <figure>
                  <img src={small_pic4} alt="" />
                </figure>
              </div>
              <div className="pic_carousel">
                <figure>
                  <img src={small_pic5} alt="" />
                </figure>
              </div>
              {/* 可以在这里根据传入的 image 显示图片和信息 */}
              {/*image && <figure><img src={image.url} alt={image.alt} /></figure>*/}
            </div>
            {/* 營業資訊 */}
            <div className="info_business norwd">
              <h6>停留時間約 1 小時</h6>
              {/* 營業時間 */}
              <p>星期一、07:00-21:30</p>
              <p>星期二、07:00-21:30</p>
              <p>星期三、休息</p>
              <p>星期四、07:00-21:30</p>
              <p>星期五、07:00-21:30</p>
              <p>星期六、07:00-21:30</p>
              <p>星期日、07:00-21:30</p>
            </div>
          </section>
          {/* 景點卡片右半部 */}
          <section className="card_info_right">
            <div className="info_carousel">
              <h1 className="title_card_viewpoint">丹丹漢堡 仁德店</h1>
              {/* 總評價、評論數及價格 */}
              <div className="evaluate">
                <div className="evaluate_left">
                  <span>4.5</span>
                  <figure>
                    <img src={star} alt="" />
                  </figure>
                  <span>(123)</span>
                </div>
                {/* 錢字符號 */}
                <span>$$$</span>
              </div>
              {/* 地址 */}
              <div className="address_carousel">
                <figure>
                  <img src={location} alt="" />
                </figure>
                <p>717台南市仁德區中山路272號</p>
              </div>
              {/* Facebook link */}
              <a href="" className="link_carousel">
                <figure>
                  <img src={internet} alt="" />
                </figure>
                <p>Facebook.com</p>
              </a>
              {/* 後續設計中暫時刪改 */}
              {/* Icon & Tags */}
              {/* <div className="icon_box">
                <figure><img src="" alt=""/></figure>
                <figure><img src="" alt=""/></figure>
              </div> */}
              <div className="tag_box_carousel">
                <a href="" className="tag_carousel">標籤</a>
                <a href="" className="tag_carousel">標籤</a>
              </div>
              <div className="info_business rwd">
              <h6>停留時間約 1 小時</h6>
              {/* 營業時間 */}
              <p>星期一、07:00-21:30</p>
              <p>星期二、07:00-21:30</p>
              <p>星期三、休息</p>
              <p>星期四、07:00-21:30</p>
              <p>星期五、07:00-21:30</p>
              <p>星期六、07:00-21:30</p>
              <p>星期日、07:00-21:30</p>
            </div>
            </div>
            {/* 評論區 */}
            <section className="commends_box">
              <div className="commends_item">
                <div className="evaluate_commends">
                  <span>4.3</span>
                  <figure>
                    <img src={star} alt="" />
                  </figure>
                </div>
                <p>
                  燒肉鮮蔬吉司蛋堡好吃，湯品類及飲品口味都偏甜，用餐區音響聲量像在KTV…
                </p>
              </div>
              <div className="commends_item">
                <div className="evaluate_commends">
                  <span>4.8</span>
                  <figure>
                    <img src={star} alt="" />
                  </figure>
                </div>
                <p>
                  每次來台南
                  <br />
                  必來買丹丹
                </p>
              </div>
              <div className="commends_item">
                <div className="evaluate_commends">
                  <span>5.0</span>
                  <figure>
                    <img src={star} alt="" />
                  </figure>
                </div>
                <p>
                  最近時間很忙 打電話去點餐
                  <br />
                  接電話人員講話速度很快
                </p>
              </div>
              {/* 地圖 */}
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=..."
                  width={296}
                  height={283}
                  style={{ border: "0" }} // 修改这里
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </section>
          <div className="empty"></div>
        </div>
        {/* 關閉按鈕 */}
        <figure className="btn_cancel" onClick={onClose}>
          <img src={cancel} alt="" />
        </figure>
        {/* 加入按鈕(置於右底) */}
        <div className="card_button">
          <button className="btn_add collect">
            <img src={favorite_heart} alt="" />
          </button>
          <button className="btn_add journey_viewpoint">加入行程</button>
        </div>
      </div>
    </div>
  );
};

export default LightBox_Card;