import React from 'react';
import '../CSS/Search.scss';

//輪播區塊的標籤元件
const Tags_carousel = () => {
    const arr_tags_carousel = ['咖啡', '餐廳', '早午餐', '餐酒館'];
    return (
        <div className="tag_turn">
            <ul>
                {arr_tags_carousel.map((tag, index) => (
                    <li key={index}><a href="#">{tag}</a></li>
                ))}
            </ul>
        </div>
    )
}
export default Tags_carousel;