import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Card } from 'flowbite-react'
import React, { useRef } from 'react'
import { MovieCard } from '../components/movieCard/MovieCard'
import './Home.css'
export const Home = () => {
  const carouselRef = useRef()
  // TOFIX : add scroll to left and right by btn using snaps and reff 
  // ! scrollbar-hide is a custom class in home.css
  return (
    <>
      <div className="container ">
        <h2 className="capitalize font-bold mt-3 ">most popular</h2>
        <div className="flex items-center h-[200px]">
          <button onClick={()=>carouselRef.current.scrollLeft+= 100 } ><ChevronLeftIcon className="h-12 mr-5 text-gray-500" /></button>
          <div className="overflow-x-scroll scrollbar-hide touch-pan-x snap-x flex first">
            <div className=" grid grid-row-1 grid-flow-col gap-5 mt-10">
              <MovieCard imgUrl={`https://flowbite.com/docs/images/blog/image-1.jpg`} title="hello world" alt="hello world" />
              <MovieCard imgUrl={`https://flowbite.com/docs/images/blog/image-1.jpg`} title="hello world" alt="hello world" />
              <MovieCard imgUrl={`https://flowbite.com/docs/images/blog/image-1.jpg`} title="hello world" alt="hello world" />
              <MovieCard imgUrl={`https://flowbite.com/docs/images/blog/image-1.jpg`} title="hello world" alt="hello world" />
              <MovieCard imgUrl={`https://flowbite.com/docs/images/blog/image-1.jpg`} title="hello world" alt="hello world" />
              <MovieCard imgUrl={`https://flowbite.com/docs/images/blog/image-1.jpg`} title="hello world" alt="hello world" />
              <MovieCard imgUrl={`https://flowbite.com/docs/images/blog/image-1.jpg`} title="hello world" alt="hello world" />
              <MovieCard imgUrl={`https://flowbite.com/docs/images/blog/image-1.jpg`} title="hello world" alt="hello world" />
              <MovieCard imgUrl={`https://flowbite.com/docs/images/blog/image-1.jpg`} title="hello world" alt="hello world" />
            </div>
          </div>
          <button onClick={()=>carouselRef.current.scrollLeft-= 100 }><ChevronRightIcon className="h-12 ml-5 text-gray-500" /></button>
        </div>
      </div>
    </>
  )
}
