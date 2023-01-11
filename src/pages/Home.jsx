import { Modal } from 'flowbite-react'
import React from 'react'
import { CarouScroll } from '../components/carouselScroll/CarouScroll'
import { MainGrid } from '../components/MainGrid/MainGrid'
import { Therm } from '../components/therm/therm'

export const Home = () => {
  return (<>
  <div className="container">
    
    <CarouScroll />
    <MainGrid />
    </div>
</>)
}