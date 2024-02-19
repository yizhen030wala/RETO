import React from "react";
import "../CSS/Collections.scss";
import arrowLeft from "../../../assets/img_hsc/fixed_btn/arrow-left.svg";
import arrowRight from "../../../assets/img_hsc/fixed_btn/arrow-right.svg";

//Fixed Button固定按鈕
const FixedBtn = ({
  handleArrowLeftClick,
  handleArrowRightClick,
  selectedCount,
}) => {
  return (
    <div className="btn_fixed">
      <ul>
        <li className="trash_can">
          <div class="lid"></div>
          <div class="can"></div>
          {/* <span>delete</span> */}
        </li>
        <li className="myJour_collections">
          <button>我的行程 ({selectedCount})</button>
        </li>
      </ul>
    </div>
  );
};

export default FixedBtn;
