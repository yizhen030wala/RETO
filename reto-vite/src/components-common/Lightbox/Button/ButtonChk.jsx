import React from 'react';
import "./ButtonChk.scss";

const ButtonChk = ({ onClick, className, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // 調用父元件傳遞的 onClick 函數
    }
  };

  return (
    <div className={`lightbox-c-green ${className}`} onClick={handleClick}>
      {children}
    </div>
  );
};

export default ButtonChk;