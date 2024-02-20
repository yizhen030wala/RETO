import React from 'react'
import "./Spottag.scss"


const Spottag = ({ children, color }) => {

    const tagStyle = {
        backgroundColor: color || '#FFDF06'
    };

    return (
        <>
            <span className='spottag' style={tagStyle}>
                {children}
            </span>

        </>
    )
}

export default Spottag


