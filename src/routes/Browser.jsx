import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { EpisodeLayouts } from '../layouts/EpisodeLayout'
import { MoovieLayout } from '../layouts/MoovieLayout'
import { SeasonLayout } from '../layouts/SeasonLayouts'
import { SeriesLayout } from '../layouts/SeriesLayout'
import { SharedLayouts } from '../layouts/SharedLayouts'
import { Home } from '../pages/home'

export const Browser = () => {
    
    return (
        <BrowserRouter>
            <Routes>
               
                <Route path="/" element={<SharedLayouts/>}>
                    <Route index element={<Navigate to={'/home'}/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/moovies' element={<MoovieLayout/>}/>
                    <Route path='/series' element={<SeriesLayout/>}/>
                    <Route path='/anime' element={<SeasonLayout/>}/>
                    <Route path='/cartoon' element={<EpisodeLayouts/>}/>
                
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
