import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "./Set_Journey.scss";
import "./datepicker.scss";
import cancel from "../../../assets/img_hsc/card_viewpoint/cancel.svg";
import JourneyCard from "./JourneyCard.jsx";

const Set_Journey = ({ image, onClose }) => {

  // 點擊事件
  const handleClickOutsideCard = (e) => {
    // 如果點擊事件不在 .card_set_journey 元素及其子元素
    if (!e.target.closest(".card_set_journey")) {
      onClose(); // 關閉燈箱
    }
  };

  // 假設 state 'open' 控制燈箱是否顯示
  const [open, setOpen] = useState(false);
  // 打開燈箱
  const openLightbox = () => setOpen(true);
  // 關閉燈箱
  const closeLightbox = () => setOpen(false);


  // ↓↓處理變換頁面↓↓
  const [currentPage, setCurrentPage] = useState("set_journey");

  const switchToPage = (page) => {
    setCurrentPage(page);
    const setJourneyButton = document.querySelector(".btn_switch_set_journey");
    const addJourneyButton = document.querySelector(".btn_switch_add_journey");
    const setButton = document.querySelector(".btn_set.journey.set");
    const addButton = document.querySelector(".btn_set.journey.add");

    if (page === "set_journey") {
      setJourneyButton.classList.add("active");
      addJourneyButton.classList.remove("active");
      setButton.classList.add("active");
      addButton.classList.remove("active");
    } else {
      setJourneyButton.classList.remove("active");
      addJourneyButton.classList.add("active");
      setButton.classList.remove("active");
      addButton.classList.add("active");
    }
  };

  // 初始設置為 set_journey
  useEffect(() => {
    switchToPage("set_journey");
  }, []); // 空的依賴列表確保只執行一次

  // ↓↓處理編輯名稱部分↓↓
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(""); // 將初始值設置為空字符串
  // 處理div點擊事件，開始編輯
  const handleDivClick = () => {
    setIsEditing(true);
  };
  // 處理輸入完成，更新名稱並結束編輯模式
  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  // 處理輸入框失去焦點和Enter鍵事件
  const handleInputBlur = () => {
    setIsEditing(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      e.preventDefault(); // 防止任何不必要的行為，比如表單提交
    }
  };

  // ↓↓日期選擇器部分↓↓
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // ↓↓選擇器有內容時移除背景圖片↓↓
  // const CustomInput = React.forwardRef(({ value, onClick, placeholder }, ref) => {
  //     const className = `datePicker ${value ? 'input-with-content' : 'input-without-content'}`;

  //     return (
  //         <button onClick={onClick} ref={ref} className={className}>
  //         {value || placeholder}
  //     </button>
  //     );
  // });

  return (
    <div className="bg_card_set" onClick={handleClickOutsideCard}>
      <div className={`card_set_journey ${open ? "open" : ""}`}>
        <div className="box_set_item">
          {/* 頂部轉換按鈕 */}
          <div className="box_btn_switch_set_journey">
            <ul>
              <li
                className="btn_switch_set_journey"
                onClick={() => switchToPage("set_journey")}
              >
                建立行程
              </li>
              <li
                className="btn_switch_add_journey"
                onClick={() => switchToPage("add_journey")}
              >
                加入行程
              </li>
            </ul>
          </div>
          <div className="carousel_set_journey">
            {/* 建立行程頁面 */}
            <div
              className={`box_switch_set_journey ${
                currentPage === "set_journey" ? "active" : ""
              }`}
            >
              <h4 className="title_set_journey">行程設定</h4>
              {/* 可以編輯名稱區域 */}
              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="name_editable_input"
                />
              ) : (
                <div
                  className={`name_editable ${name ? "" : "placeholder"}`}
                  onClick={handleDivClick}
                >
                  {name || "未命名"} {/* 使用條件渲染顯示提示文字 */}
                </div>
              )}
              <div className="date_set">
                <h5 className="title_date">行程日期</h5>
                <div>
                  <DatePicker
                    className="datePicker"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 1)}
                    // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
                    minDate={new Date()}
                    dateFormat="M月d日"
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    placeholderText={`請選擇日期`} // 設置尚未選擇日期時顯示的預設文字
                    // customInput={<CustomInput />}
                  />
                </div>
              </div>
              <p className="content_set_journey">
                總共6個景點、10間餐廳、1間住宿!
              </p>
            </div>
            {/* 加入行程頁面 */}
            <div
              className={`box_switch_add_journey ${
                currentPage === "add_journey" ? "active" : ""
              }`}
            >
              {/* 這裡要放更新內容 */}
              <div className="myTrip_contain_set_journey">
                

                <JourneyCard
                  imageUrl="https://images.unsplash.com/photo-1583889659384-64d9df2347ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="北桃RARASO"
                  days="3天2夜"
                  // onNameClick={handleNameClick}
                ></JourneyCard>

                {/* 第二個行程集卡片 */}
                <JourneyCard
                  imageUrl="https://images.unsplash.com/photo-1580745168634-33c78f4c4177?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="西門浪流連"
                  days="2天1夜"
                  // onNameClick={handleNameClick}
                />


                {/* 第五個行程集卡片 */}
                <JourneyCard
                  imageUrl="https://images.unsplash.com/photo-1621316489519-77626e5e38fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  name="台男逛台南"
                  days="3天2夜"
                  // onNameClick={handleNameClick}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="empty_set_journey"></div> */}
        {/* 關閉按鈕 */}
        <figure className="btn_cancel" onClick={onClose}>
          <img src={cancel} alt="" />
        </figure>
        {/* 加入按鈕(置於右底) */}
        <button className="btn_set journey set">建立行程</button>
        <button className="btn_set journey add">加入行程</button>
      </div>
    </div>
  );
};

export default Set_Journey;
