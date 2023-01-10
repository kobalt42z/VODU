import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { ItemLayout } from '../layouts/itemLayout'
import { SharedLayouts } from '../layouts/SharedLayouts'
import { Home } from '../pages/home'

export const Browser = () => {
    
    return (
        <BrowserRouter>
            <Routes>
               
                <Route path="/" element={<SharedLayouts/>}>
                    <Route index element={<Navigate to={'/home'}/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/moovies' element={<ItemLayout/>}/>
                    <Route path='/series' element={<>series</>}/>
                    <Route path='/anime' element={<>anime</>}/>
                    <Route path='/cartoon' element={<>cartoon</>}/>
                
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
