import React from 'react'
import './CSS/removeToast.css'
import Checked from '../../assets/img/badge/checked.svg'



const removeToast = () => {
    return (
        <>
            <div className="remove-box">
                <figure><img src={Checked} alt="" /></figure>
                <p> 已移除我的景點</p>
            </div>
        </>
    )
}

export default removeToast
