import React from 'react'
import './textToast.scss'
import Error from '../../assets/img/badge/error.svg'


const textToast = () => {
    return (
        <>
            <div className="textToast-box">
                <figure><img src={Error} alt="" /></figure>
                <p> 輸入行程資訊</p>
            </div>
        </>
    )
}

export default textToast
