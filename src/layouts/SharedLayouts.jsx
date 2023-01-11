import { Footer, Navbar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { MyFooter } from '../components/footer/MyFooter'
import { ZNavbar } from '../components/navbar/ZNavbar'
import { Therm } from '../components/therm/therm'

export const SharedLayouts = () => {
    return (
        <>
            <div className="containter ">
                <Therm />
                <ZNavbar />
                <Outlet />
                <MyFooter />
            </div>
        </>
    )
}
