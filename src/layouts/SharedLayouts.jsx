import { Navbar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { ZNavbar } from '../components/navbar/ZNavbar'

export const SharedLayouts = () => {
    return (
        <>
            <div className="containter ">

                <ZNavbar />
                <Outlet />
            </div>
        </>
    )
}
