import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
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

                <Route path="/" element={<SharedLayouts />}>
                    <Route index element={<Navigate to={'/home'} />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/moovies' element={<MoovieLayout />} />


                    <Route path='/tv/:tv_id' element={<Outlet />}>
                        <Route index element={<SeriesLayout />} />
                        <Route path='/tv/:tv_id/seasons/' element={<Outlet />}>
                            <Route index element={<SeasonLayout />} />
                            <Route path='/tv/:tv_id/seasons/:season_id' element={<SeasonLayout />} />

                            <Route path='/tv/:tv_id/seasons/:season_id/episode/:episode_id' element={<Outlet />} >
                                <Route index element={<EpisodeLayouts />} />
                            </Route>
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
