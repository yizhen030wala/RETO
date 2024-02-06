import React, { useRef } from 'react';
import '../css/LightboxExchange.css';
import ButtonChk from "../../../Button/ButtonChk/ButtonChk.jsx";
import SpotCard from '../SpotCard.jsx';
import ExchangeCard from '../ExchangeCard/ExchangeCard.jsx';
import Spottag from '../Spottag/Spottag.jsx';

const LightboxExchange = ({ onClose }) => {
    const lightboxRef = useRef(null); // 取得燈箱的參考
    const overlayRef = useRef(null); // 取得背景的參考

    const handleClose = () => {
        const lightbox = lightboxRef.current;
        const overlay = overlayRef.current;

        lightbox.classList.add('slide-up-and-fade-out');
        overlay.classList.add('fade-out');

        lightbox.addEventListener('animationend', onClose, { once: true });
        overlay.addEventListener('animationend', onClose, { once: true });
    };

    return (
        <>
            <div ref={overlayRef} className="lightboxEX-overlay" onClick={handleClose}>
                <div
                    ref={lightboxRef}
                    className="lightboxEX-container"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="scrollerEX">
                        <div className='content_spottag'>
                            <div className='spottag_title'>你的景點中和</div>
                            <div className='spottag_wrap'>
                                <Spottag>台南</Spottag>
                                <Spottag>吃</Spottag>
                                <Spottag>早午餐</Spottag>
                            </div>
                            <div className='spottag_title'>一樣的有...</div>
                        </div>
                        <div className='cardEX_wrap'>
                            <div className='card_col'>
                                <ExchangeCard
                                    imgSrc="https://images.unsplash.com/photo-1504669887860-f6d4cc3feb4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    imgAlt="1"
                                    selected={true}
                                    spotName="圓環擔擔麵"
                                    rating={4.1}
                                    numReviews={122}
                                    price="$"
                                    location="台南"
                                />
                                <ExchangeCard
                                    imgSrc="https://images.unsplash.com/photo-1596014747784-146fb5e3f312?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    imgAlt="1"
                                    selected={true}
                                    spotName="飛宏章魚燒"
                                    rating={3.1}
                                    numReviews={1440}
                                    price="$"
                                    location="台南"
                                />
                            </div >
                            <div className='card_col'>
                                <ExchangeCard
                                    imgSrc="https://images.unsplash.com/photo-1505253668822-42074d58a7c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    imgAlt="1"
                                    selected={true}
                                    spotName="Soac Liu"
                                    rating={4.6}
                                    numReviews={112}
                                    price="$"
                                    location="台南"
                                />
                                <ExchangeCard
                                    imgSrc="https://images.unsplash.com/photo-1617422725360-45b7671f980b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    imgAlt="1"
                                    selected={true}
                                    spotName="許家小吃"
                                    rating={4.1}
                                    numReviews={122}
                                    price="$"
                                    location="台南"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="btn-close-wrap">
                        <span onClick={handleClose} className="icon-close"></span>
                    </div>
                    <div className="btn-check-wrap">
                        <ButtonChk onClick={handleClose}>替換行程</ButtonChk>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LightboxExchange;