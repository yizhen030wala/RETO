import React, { useState, useRef, useEffect } from 'react';
import "../css/ButtonDel_NB.css"
import DeleteToast from '../../deleteToast/deleteToast.jsx'

const ButtonDel_NB =  () => {
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
            <div className='btn_content_del2'>
                <div className="btn_wrap2">
                    <div className={`btn_del2 ${showWrapDel ? 'clicked' : ''}`} onClick={handleButtonClick} ref={buttonRef}>
                        <span className="icon-more_horiz ctrl-icon-more"></span>
                    </div>

                    {showWrapDel && (
                        <div className='wrap-del2' ref={wrapDelRef}>
                            <DeleteToast></DeleteToast>
                        </div>
                    )}
                </div>
            </div>
        </>
  )
}

export default ButtonDel_NB
