import React, { useState } from "react";
import { data_img } from "../Carousel/data";
import Card from '../Card/Card';
import Tags_carousel from '../Tags_carousel/Tags_carousel.jsx';
import LightBox_Card from '../LightBox_Card/LightBox_Card.jsx';
import './Relevant_Card.scss';

const Relevant_Card = () => {
    return (
        <div className="bg_card_relevant">
            <div className="card_relevant">
                <div className="view_relevant">
                    <h4 className="title_relevant">你的景點中跟
                        <a className="tags_relevant">台南</a>
                        <a className="tags_relevant">吃</a>
                        <a className="tags_relevant">早午餐</a>
                        一樣的有...</h4>
                    <div className="box_cards_relevant">
                        {/* 先修改完原瀑布流布局再引入 */}
                        {/* <Masonry
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
                        </Masonry> */} 
                    </div>
                </div>
                <div className="empty_relevant"></div>

                {/* 按鈕及卷軸位置參照Carousel元件 */}
            </div>
        </div>
    )
}

export default Relevant_Card;