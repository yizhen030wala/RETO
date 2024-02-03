import React, { useState } from "react";
import { data_img } from "../Carousel/data";
import Card from '../Card/Card';
import Tags_carousel from '../Tags_carousel/Tags_carousel.jsx';
import LightBox_Card from '../LightBox_Card/LightBox_Card.jsx';
import './Set_Journey.scss';

const Set_Journey = () => {
    return (
        <div className="bg_card_set">
            <div className="card_set_journey">
                <div className="box_set_item">
                    
                </div>
                <div className="empty_set_journey"></div>

                {/* 按鈕及卷軸位置參照Carousel元件 */}
            </div>
        </div>
    )
}

export default Set_Journey;