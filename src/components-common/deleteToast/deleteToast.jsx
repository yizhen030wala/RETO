import React from 'react'
import './deleteToast.scss'
import "../../assets/fonts/iconfont/style.css"

const deleteToast = () => {
    return (
        <>
            <div className="deleteToast-box">
                <p><span className="icon-delete"></span>刪除</p>
            </div>
        </>
    )
}

export default deleteToast
