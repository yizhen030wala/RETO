import React from 'react';
import "./ButtonCancel_M.css";

const ButtonCancel_M = ({ onClick, className, children }) => {
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

export default ButtonCancel_M;