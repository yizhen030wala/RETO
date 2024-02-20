import React, { useState } from 'react';
import './ExchangeCard.scss';
import Marker from './selected_mark.svg';
import Spottag from '../Spottag/Spottag';

const ExchangeCard = ({ imgSrc, imgAlt, index, onSelect, selected, onOpenLightbox, spotName, rating, numReviews, price, location }) => {
    const [showMarker, setShowMarker] = useState(false);
    const dotClass = "circle";

    const handleOpenLightbox = (e) => {
        if (e.target.closest('.dot_card')) {
            return;
        } else {
            onOpenLightbox();
        }
    };

    const handleDotClick = (e) => {
        e.stopPropagation();
        onSelect(index);
        setShowMarker(!showMarker);
    };

    return (
        <div className="cardEX_search" onClick={handleOpenLightbox}>


            {selected && showMarker && (
                <div className={dotClass}>
                    <div className="checkmark"><img src={Marker} alt="" /></div>
                </div>
            )}

            <figure>
            {/* 照片 */}
                <img src={imgSrc} alt={imgAlt} />
            </figure>
            <div className="card_search_info">
                {/* 店名 */}
                <p className="card_title">{spotName}</p>
                <div className="evaluate">
                    <div className="evaluate_left">
                        {/* 分數 */}
                        <span>{rating}</span>
                        <span className='icon-grade'></span>
                        {/* 評論數 */}
                        <span>({numReviews})</span>
                    </div>
                    {/* 價格 */}
                    <span>{price}</span>
                </div>
                <div className="spottag_wrap">
                    <Spottag color="#f5f5f5">{location}</Spottag>
                </div>
            </div>


            <div className="dot_card" onClick={handleDotClick}></div>
        </div>
    )
}

export default ExchangeCard;