import React from 'react'
import "./ButtonTag.css";

const ButtonTag = ({ onClick, className, children }) => {
    const handleClick = () => {
      if (onClick) {
        onClick(); // 調用父元件傳遞的 onClick 函數
      }
    };
  
    return (
      <div className={`lightbox_ButtonTag ${className}`} onClick={handleClick}>
        {children}
      </div>
    );
  };

export default ButtonTag
