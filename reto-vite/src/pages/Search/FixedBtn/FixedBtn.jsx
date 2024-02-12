import React from 'react';
import '../CSS/Search.scss';
import arrowLeft from '../../../assets/img_hsc/fixed_btn/arrow-left.svg';
import arrowRight from '../../../assets/img_hsc/fixed_btn/arrow-right.svg';


//Fixed Button固定按鈕
const FixedBtn = ({ selectedCount }) => {
    return (
        <div className="btn_fixed">
            <ul>
                <li className="arrowLeft"><a href="#"><img src={arrowLeft} alt="" /></a></li>
                <li className="arrowRight"><a href="#"><img src={arrowRight} alt="" /></a></li>
                <li className="myJour"><a href="#">我的行程 ({selectedCount})</a></li>
            </ul>
        </div>
    )
}

export default FixedBtn;