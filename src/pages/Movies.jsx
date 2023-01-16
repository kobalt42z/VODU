import { Modal } from 'flowbite-react'
import React from 'react'
import { CarouScroll } from '../components/carouselScroll/CarouScroll'
import { HomeGrid } from '../components/MainGrid/HomeGrid'
import { MainGrid } from '../components/MainGrid/MainGrid'
import { Therm } from '../components/therm/therm'

export const Movies = () => {
  return (<>
    <div className="container min-h-[90vh]  items-center">
      <h2 className="capitalize font-thin text-2xl my-5 dark:text-white">most popular :</h2>
      <CarouScroll mv />
      <h2 className=' capitalize  text-2xl font-thin py-5 dark:text-white'>uplowded last :</h2>
      <div className="flex justify-center">
        <HomeGrid mv />
      </div>
    </div>
  </>)
}