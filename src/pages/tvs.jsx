import { Modal } from 'flowbite-react'
import React from 'react'
import { CarouScroll } from '../components/carouselScroll/CarouScroll'
import { HomeGrid } from '../components/MainGrid/HomeGrid'
import { MainGrid } from '../components/MainGrid/MainGrid'
import { Therm } from '../components/therm/therm'

export const Tvs = () => {
  return (<>
    <div className="container min-h-[90vh]">

      <CarouScroll tv />
      <HomeGrid tv/>
    </div>
  </>)
}