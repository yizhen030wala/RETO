import React from 'react';
import '../CSS/Search.scss';
import arrowLeft from '../../../assets/img_hsc/fixed_btn/arrow-left.svg';
import arrowRight from '../../../assets/img_hsc/fixed_btn/arrow-right.svg';


//Fixed Button固定按鈕
const FixedBtn = ({ handleArrowLeftClick, handleArrowRightClick, selectedCount, onOpenLightbox }) => {

    const handleOpenLightbox = () => {
        onOpenLightbox();
    };

    return (
        <div className="btn_fixed">
            <ul>
                <li className="arrowLeft"><button type='button' onClick={handleArrowLeftClick}><img src={arrowLeft} alt="" /></button></li>
                <li className="arrowRight"><button type='button' onClick={handleArrowRightClick}><img src={arrowRight} alt="" /></button></li>
                <li className="myJour"><button onClick={handleOpenLightbox}>我的行程 ({selectedCount})</button></li>
            </ul>
        </div>
    )
}

export default FixedBtn;