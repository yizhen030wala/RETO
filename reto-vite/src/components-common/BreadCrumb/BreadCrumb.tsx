// 行程頁和地圖頁上面的麵包屑導覽

import React from "react";
import "../css/BreadCrumb.css";
import { Link } from "react-router-dom";
import goright from "../../assets/img/icon/icon-go/goright.svg";

const BreadCrumb = () => {
    return (
        <>
            <ul className="breadCrumb">
                <li>
                    <Link to="/">首頁</Link>
                </li>
                <li>
                    <img src={goright} alt="" />
                </li>
                <li>
                    <Link to="/reto/mytrip">行程表</Link>
                </li>
                <li>
                    <img src={goright} alt="" />
                </li>
                <li>
                    <a href="#">北桃RARASO</a>
                </li>
            </ul>
        </>
    );
};

export default BreadCrumb;
