// import React, { useRef, useState } from 'react';
// import './Lightbox.css';
// import "./Button/ButtonChk.css";
// import ButtonChk from "../Button/ButtonChk/ButtonChk.jsx";

// const LightboxLine = ({ onClose }) => {
//     const lightboxRef = useRef(null); // 取得燈箱的參考
//     const overlayRef = useRef(null); // 取得背景的參考
//     const [items, setItems] = useState([]); // 使用 useState 定義 items 狀態

//     const handleClose = () => {
//         const lightbox = lightboxRef.current;
//         const overlay = overlayRef.current;

//         // 添加燈箱向上滑出並且淡出的動畫效果
//         lightbox.classList.add('slide-up-and-fade-out');
//         overlay.classList.add('fade-out');

//         // 監聽燈箱的滑出並且淡出動畫結束事件
//         lightbox.addEventListener('animationend', onClose, { once: true });
//         overlay.addEventListener('animationend', onClose, { once: true });
//     };



//     return (
//         <div ref={overlayRef} className="lightbox-overlay" onClick={handleClose}>
//             <div
//                 ref={lightboxRef}
//                 className="lightbox-container"
//                 onClick={(e) => e.stopPropagation()}
//             >


//                 <div className="btn-check-wrap">
//                     <ButtonChk onClick={handleClose}>確定</ButtonChk>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LightboxLine

import React, { useRef } from 'react';
import './LightboxLine.css';
import ButtonChk from "../Button/ButtonChk/ButtonChk.jsx";

const LightboxLine = ({ onClose }) => {
    const lightboxRef = useRef(null); // 取得燈箱的參考
    const overlayRef = useRef(null); // 取得背景的參考

    const handleClose = () => {
        const lightbox = lightboxRef.current;
        const overlay = overlayRef.current;

        // 添加燈箱向上滑出並且淡出的動畫效果
        lightbox.classList.add('slide-up-and-fade-out');
        overlay.classList.add('fade-out');

        // 監聽燈箱的滑出並且淡出動畫結束事件
        lightbox.addEventListener('animationend', onClose, { once: true });
        overlay.addEventListener('animationend', onClose, { once: true });
    };

    return (
        <div ref={overlayRef} className="lightbox-overlay" onClick={handleClose}>
            <div
                ref={lightboxRef}
                className="lightbox-container2"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="content">
                    <div className="text">
                        確定以第一個地點做路線整理?
                    </div>
                    <div className="btn-wrapped">
                        <div className="btn-close-wrap">
                            <ButtonChk onClick={handleClose}>取消</ButtonChk>
                        </div>
                        <div className="btn-check-wrap">
                            <ButtonChk onClick={handleClose}>確定</ButtonChk>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default LightboxLine;