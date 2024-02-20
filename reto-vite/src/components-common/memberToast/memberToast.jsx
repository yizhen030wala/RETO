import React from 'react'
import './memberToast.scss'
import Noted from '../../assets/img/badge/!.svg'

const memberToast = () => {
    return (
        <>
            <div className="member-box">
                <figure><img src={Noted} alt="" /></figure>
                <p> 請先加入旅藤</p>
            </div>
        </>
    )
}

export default memberToast
