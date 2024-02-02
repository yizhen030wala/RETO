import React, { useState } from 'react';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import Carousel from './Carousel/Carousel';
import FixedBtn from './FixedBtn/FixedBtn';
import './CSS/Search.css';


function Search() {
    //讓選中的數量顯示
    const [selectedCount, setSelectedCount] = useState(0); // 新的状态
    // 更新选中计数的函数
    const updateSelectedCount = (count) => {
        setSelectedCount(count);
    }

    return (
        <div>
            <HeaderSearch />
            <main>
                {/* 區塊輪播/瀑布流搜尋結果 */}
                <Carousel updateSelectedCount={updateSelectedCount} />
                {/* Fixed固定左右切換/加入行程按鈕 */}
                <FixedBtn selectedCount={selectedCount} /> {/* 傳遞選中的數量 */}
            </main>
        </div>
    )
}

export default Search;