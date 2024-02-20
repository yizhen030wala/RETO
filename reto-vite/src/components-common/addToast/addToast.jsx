import React from 'react'
import './addToast.scss'
import Checked from '../../assets/img/badge/checked.svg'



const addToast = () => {
    return (
        <>
            <div className="addToast-box">
                <figure><img src={Checked} alt="" /></figure>
                <p> 已加入我的景點</p>
            </div>
        </>
    )
}

export default addToast
