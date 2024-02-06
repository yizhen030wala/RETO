import React from 'react'
import Header from '../../components-common/Header/Header'
import { Outlet } from 'react-router-dom'

const Reto = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Reto
