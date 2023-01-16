import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { EpisodeLayouts } from '../layouts/EpisodeLayout'
import { MovieLayout } from '../layouts/MovieLayout'
import { SeasonLayout } from '../layouts/SeasonLayouts'
import { SeriesLayout } from '../layouts/SeriesLayout'
import { SharedLayouts } from '../layouts/SharedLayouts'
import { Movies } from '../pages/Movies'
import { Results } from '../pages/results'
import { Tvs } from '../pages/tvs'

export const Browser = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<SharedLayouts />}>
                    <Route index element={<Navigate to={'/movies'} />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/tvs' element={<Tvs/>} />
                    <Route path='/results/:search' element={< Results/>} />
                    <Route path='/movie/:movie_Id' element={<Outlet/>}>
                        <Route index element={<MovieLayout />} />
                    </Route>


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
