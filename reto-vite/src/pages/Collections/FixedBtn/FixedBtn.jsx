import React from "react";
import "../CSS/Collections.scss";

//Fixed Button固定按鈕
const FixedBtn = ({ selectedCount, onOpenLightbox }) => {

  const handleOpenLightbox = () => {
    onOpenLightbox();
  };

  return (
    <div className="btn_fixed">
      <ul>
        <li className="trash_can">
          <div className="lid"></div>
          <div className="can"></div>
          {/* <span>delete</span> */}
        </li>
        <li className="myJour_collections">
          <button onClick={handleOpenLightbox}>我的行程 ({selectedCount})</button>
        </li>
      </ul>
    </div>
  );
};

export default FixedBtn;
