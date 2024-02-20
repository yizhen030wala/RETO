// 地圖頁上面的麵包屑導覽:回行程頁

import React from "react";
import "../css/BreadCrumb.css";
import { Link } from 'react-router-dom';
import goleft from '../../assets/img/icon/icon-go/goleft.svg';

const BreadCrumb_M = () => {
    return (
        <>
            {/* <div className="breadCrumb_M">
                <div>
                    <img src={goleft} alt="" />
                </div>
                <div className="btn_back">
                    <Link to="/mytrip" >回行程表</Link>
                </div>
            </div> */}
        </>
    )
}

export default BreadCrumb_M