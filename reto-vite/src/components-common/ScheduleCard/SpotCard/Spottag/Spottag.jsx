import React from 'react'
import "../css/Spottag.css"

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


