import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Card } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { MovieCard } from '../components/movieCard/MovieCard'
import './Home.css'
export const Home = () => {

  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const scrollNext = () => {
    // Calculate the new scroll position
    let nextScrollPosition = currentScrollPosition
    if (currentScrollPosition +1000 < carouselRef.current.scrollWidth) {
      nextScrollPosition = currentScrollPosition + 700;
    }

    // Scroll to the new position
    carouselRef.current.scrollTo({ left: nextScrollPosition, behavior: 'smooth' });

    // Update the current scroll position state
    setCurrentScrollPosition(nextScrollPosition);
  };
  const scrollPrev = () => {
    let nextScrollPosition = currentScrollPosition ;
    // Calculate the new scroll position
    console.log(currentScrollPosition);
    if (currentScrollPosition > 0 )   {
       nextScrollPosition = currentScrollPosition - 700 ;
    }

    // Scroll to the new position
    carouselRef.current.scrollTo({ left: nextScrollPosition, behavior: 'smooth' });

    // Update the current scroll position state
    setCurrentScrollPosition(nextScrollPosition);
  };

  const carouselRef = useRef()

  useEffect(() => {
    console.log(carouselRef.current.scrollWidth)},[]);
  // ! scrollbar-hide is a custom class in home.css
  return (
    <>
      <div className="container ">
        <h2 className="capitalize font-bold my-3 ">most popular</h2>
        <div className="flex items-center h-[200px] justify-around mt-[10vh] ">
          <button  ><ChevronLeftIcon onClick={()=>scrollPrev()}  className="h-12 mr-5 text-gray-500" /></button>

          <div ref={carouselRef} className="overflow-x-scroll scrollbar-hide touch-pan-x snap-x flex ">

            <div className=" grid grid-row-1 grid-flow-col gap-5 mt-10">
              <MovieCard imgUrl={'https://m.media-amazon.com/images/M/MV5BMmE2NzEyOWItYjI1ZC00YWZhLWI2MjEtZmU1NjIyNjliOTkyXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SX300.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
              <MovieCard imgUrl={'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'} title="hello world" alt="hello world" />

            </div>
          </div>
          <button  onClick={()=>scrollNext()}><ChevronRightIcon className="h-12 ml-5 text-gray-500" /></button>
        </div>
      </div>
    </>
  )
}
