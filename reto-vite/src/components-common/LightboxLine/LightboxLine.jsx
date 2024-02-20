import React, { useRef } from 'react';
import './LightboxLine.css';
import ButtonChk_M from "../Button/ButtonChk_M/ButtonChk_M.jsx";
import ButtonCancel_M from "../Button/ButtonCancel_M/ButtonCancel_M.jsx";

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
        lightbox.addEventListener('animationend', () => {
            // 在動畫結束後進行頁面導向
            window.location.href = "/reto/schedule2"; // 或者使用 history.push("/reto/schedule2");
        }, { once: true });
        overlay.addEventListener('animationend', onClose, { once: true });


    };

    return (
        <div ref={overlayRef} className="lightbox-overlay" onClick={handleClose}>
            <div
                ref={lightboxRef}
                className="lightbox-container2"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="LL-wrapped">
                    <div className="text">
                        確定以第一個地點做路線整理?
                    </div>
                    <div className="LL-btn-wrapped">
                        <div className="LL-btn-close-wrap">
                            <ButtonCancel_M onClick={handleClose}>取消</ButtonCancel_M>
                        </div>
                        <div className="LL-btn-check-wrap">

                            <ButtonChk_M onClick={handleClose}>確定</ButtonChk_M>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default LightboxLine;