// import React from 'react';
// import "./ButtonChk.css";

// const ButtonChk = ({ children }) => { // 接受 children 作為按鈕的文字內容
//   return (
//     <button type="button" className="lightbox-c-green">{children}</button> // 使用 children 作為按鈕的文字內容
//   );
// };

// export default ButtonChk;

// =====================================================

// import React from 'react';
// import "./ButtonChk.css";

// const ButtonChk = ({ onClick, className, children }) => {
//   const handleClick = () => {
//     if (onClick) {
//       onClick(); // 調用父元件傳遞的 onClick 函數
//     }
//   };

//   return (
//     <button type="button" className={`lightbox-c-green ${className}`} onClick={handleClick}>
//       {children}
//     </button>
//   );
// };

// export default ButtonChk;

// ======================================================
import React from 'react';
import "./ButtonChk.css";

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