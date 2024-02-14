import React from 'react';
import "./ButtonLine.scss";

const ButtonLine = ({ onClick, className, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // 調用父元件傳遞的 onClick 函數
    }
  };

  return (
    <div className={`btn_lightboxline ${className}`} onClick={handleClick}>
      {children}
    </div>
  );
};

export default ButtonLine;