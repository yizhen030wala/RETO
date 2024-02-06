import React, { useState, useRef, useEffect } from 'react';
// import "./ButtonDel.css";
import "../css/ButtonDel.css";
import DeleteToast from '../../deleteToast/deleteToast.jsx'

const ButtonDel = () => {
    const [showWrapDel, setShowWrapDel] = useState(false);
    const wrapDelRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapDelRef.current && !wrapDelRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
                setShowWrapDel(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleButtonClick = () => {
        setShowWrapDel(!showWrapDel);
    };

    return (
        <>
            <div className='content-del'>
                <div className="btn_wrap">
                    <div className={`btn_del ${showWrapDel ? 'clicked' : ''}`} onClick={handleButtonClick} ref={buttonRef}>
                        <span className="icon-more_horiz ctrl-icon-more"></span>
                    </div>

                    {showWrapDel && (
                        <div className='wrap-del' ref={wrapDelRef}>
                            <DeleteToast></DeleteToast>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ButtonDel;