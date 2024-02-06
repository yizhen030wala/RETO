import React from 'react';
import "./ButtonCancel.css";

const ButtonCancel = ({ onClick, className, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // 調用父元件傳遞的 onClick 函數
    }
  };

  return (
    <div className={`buttoncancel ${className}`} onClick={handleClick}>
      {children}
    </div>
  );
};

export default ButtonCancel;