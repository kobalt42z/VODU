import React from 'react'
import { CarouScroll } from '../components/carouselScroll/CarouScroll'
import { MainGrid } from '../components/MainGrid/MainGrid'

export const Home = () => {
  return (<>
  <div className="container">
    <CarouScroll />
    <MainGrid />
    </div>
</>)
}