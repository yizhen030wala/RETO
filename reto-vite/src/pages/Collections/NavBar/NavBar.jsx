import React, { useState } from 'react';


const NavBar = () => {
    const arr_nav = ['開始探索', '我的景點', '行程表'];
    const arr_nav_link = ['search', 'collections', 'mytravel'];
    return (
        <nav className='nav_collections'>
            <ul>
                {arr_nav.map((nav, index) => (
                    <li key={index}><a href={`./${arr_nav_link[index]}.html`}>{nav}</a></li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;