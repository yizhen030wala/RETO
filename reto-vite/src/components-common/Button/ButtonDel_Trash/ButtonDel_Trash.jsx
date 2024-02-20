import React, { useState, useRef, useEffect } from 'react';
import "./ButtonDel_Trash.scss"
import DeleteToast from '../../deleteToast/deleteToast.jsx'

const ButtonDel_Trash =  () => {
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
                <div className="btn_wrap_t">
                    <div className={`btn_del_t ${showWrapDel ? 'clicked' : ''}`} onClick={handleButtonClick} ref={buttonRef}>
                        <span className="icon-delete loc-delete"></span>
                    </div>

                    {showWrapDel && (
                        <div className='wrap-del_t' ref={wrapDelRef}>
                            <DeleteToast></DeleteToast>
                        </div>
                    )}
                </div>
           
        </>
  )
}

export default ButtonDel_Trash
