import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { data_img } from "../Carousel/data";
import Card from '../Card/Card';
import Tags_carousel from '../Tags_carousel/Tags_carousel.jsx';
import LightBox_Card from '../LightBox_Card/LightBox_Card.jsx';
import './Set_Journey.scss';
import './datepicker.scss';
import cancel from '../../../assets/img_hsc/card_viewpoint/cancel.svg';

const Set_Journey = () => {

    // ↓↓處理編輯名稱部分↓↓
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(''); // 將初始值設置為空字符串
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
        if (e.key === 'Enter') {
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
        <div className="bg_card_set">
            <div className="card_set_journey">
                <div className="box_set_item">
                    <div className="switch_set_journey">
                        <a href="">建立行程</a>
                        <a href="">加入行程</a>
                    </div>
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
                            className={`name_editable ${name ? '' : 'placeholder'}`}
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
                                formatWeekDay={nameOfDay => nameOfDay.slice(0, 1)}
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
                    <p className='content_set_journey'>總共6個景點、10間餐廳、1間住宿!</p>
                </div>
                <div className="empty_set_journey"></div>
                {/* 關閉按鈕 */}
                <figure className="btn_cancel">
                    <img src={cancel} alt="" />
                </figure>
                {/* 加入按鈕(置於右底) */}
                    <button className="btn_set journey">建立行程</button>



            </div>
        </div>
    )
}

export default Set_Journey;