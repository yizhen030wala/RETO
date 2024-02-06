import React from 'react';
import '../CSS/Search.css';

//卡片內的標籤元件
const Tags = () => {
    const arr_tags = ['台南', '吃', '早午餐'];
    return (
        <div className="tag_search">
            {arr_tags.map((tag, index) => (
                <a
                    key={index}
                    href=""
                    onClick={(e) => e.preventDefault()} // 阻止默認行为
                    style={{ cursor: 'not-allowed', pointerEvents: 'none' }}
                >{tag}</a>
            ))}
        </div>
    )
}
export default Tags;