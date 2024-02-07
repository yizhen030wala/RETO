import React, { useState } from "react";
import '../CSS/Search.css';
import Tags from '../Tags/Tags';
import Marker from '../../../assets/img_hsc/search_card/selected_mark.svg';
import star from '../../../assets/img_hsc/search_card/star.svg';


//卡片元件
const Card = ({ img, index, onSelect, selected, onOpenLightbox }) => {

    const cardClass = selected ? "card_search selected" : "card_search";
    const dotClass = selected ? "circle" : "dot"; // 更新圓點的 class

    const handleOpenLightbox = (e) => {
        // 检查事件是否发生在 .dot_card 或其子元素上
        if (e.target.closest('.dot_card')) {
            // 如果是，不打开燈箱
            return;
        } else {
            // 否则，打开燈箱
            onOpenLightbox(img);
        }
    };
    // 處理點擊 .dot_card 的事件
    const handleDotClick = (e) => {
        e.stopPropagation(); // 阻止事件冒泡到卡片
        onSelect(index);
    };

    //卡片資訊部分
    // const [evaluateContent, setEvaluateContent] = useState('');

    // useEffect(() => {
    //     // 模拟异步获取评价信息，然后更新状态
    //     setTimeout(() => {
    //         const evaluateHtml = (
    //             <div className="evaluate_left loading">
    //                 <span>4.5</span>
    //                 <figure><img src={star} alt="" /></figure>
    //                 <span>(123)</span>
    //             </div>
    //         );
    //         setEvaluateContent(evaluateHtml);
    //     }, 5000); // 假设5秒后获取到评价信息
    // }, []); // 空依赖数组表示这个effect只在组件挂载时运行一次


    //處理預設圖片樣式(尚未加載前)
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    // const cardImage = document.querySelector('.container_card_img');
    // // const cardTitle = document.querySelector('.card_title');
    // // const cardDesc = document.querySelector('.evaluate_left');


    // const renderCard = () => {
    //     // cardTitle.textContent = '景點名稱';
    //     // cardDesc.textContent = '';
    //     createImage();
    //     // cardTitle.classList.remove('loading');
    //     // cardDesc.classList.remove('loading');
    //     cardImage.classList.remove('loading');
    // };

    // function createImage() {
    //     const imgLoad = new Image();
    //     imgLoad.classList.add("image");
    //     imgLoad.setAttribute('alt', '');
    //     imgLoad.setAttribute('src', '{img.imgUrl}');
    //     cardImage.appendChild(imgLoad);
    // }

    // setTimeout(() => {
    //     renderCard();
    // }, 5000);



    return (
        <div className={cardClass} onClick={handleOpenLightbox}>

            {/* 選取圓點 */}
            <div className="dot_card" onClick={handleDotClick}>

                <div className={dotClass}>{/* 圓點實際顯示 */}
                    {selected && <div className="checkmark"><img src={Marker} alt="" /></div>} {/* 如果選中，顯示 checkmark */}
                    {/*{selected ? order : ''} 在圖片上顯示選取順序*/}
                </div>
            </div>

            {/* 搜尋圖片 */}
            <figure className={`container_card_img ${!isImageLoaded ? 'loading' : ''}`}>
                <img
                    src={img.imgUrl}
                    alt={`隨機圖片${img.desc}`}
                    onLoad={() => setIsImageLoaded(true)}
                    // onLoad={() => {
                    //     // 使用setTimeout来模拟图片加载的延迟效果
                    //     setTimeout(() => setIsImageLoaded(true), 5000);}}
                    style={{ display: isImageLoaded ? 'block' : 'none' }}
                />
                {!isImageLoaded && <div className="loading"></div>}
            </figure>
            <div className="card_search_info">
                {/* Title */}
                <p className="card_title">景點名稱</p>
                {/* 總評價、評論數及價格 */}
                <div className="evaluate">
                    <div className="evaluate_left">
                        <span>4.5</span>
                        <figure><img src={star} alt="" /></figure>
                        <span>(123)</span>
                    </div>
                    {/* 錢字符號 */}
                    <span>$$$</span>
                </div>
                <Tags />
            </div>
        </div>
    )
}

export default Card;