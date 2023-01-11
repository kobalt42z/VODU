import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Card } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { MovieCard } from '../movieCard/MovieCard'

import './CarouScroll.css'
export const CarouScroll = () => {
    const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

    const scrollNext = () => {
        // Calculate the new scroll position
        let nextScrollPosition = currentScrollPosition
        if (currentScrollPosition + 1000 < carouselRef.current.scrollWidth) {
            nextScrollPosition = currentScrollPosition + 700;
        }

        // Scroll to the new position
        carouselRef.current.scrollTo({ left: nextScrollPosition, behavior: 'smooth' });

        // Update the current scroll position state
        setCurrentScrollPosition(nextScrollPosition);
    };
    const scrollPrev = () => {
        let nextScrollPosition = currentScrollPosition;
        // Calculate the new scroll position
        console.log(currentScrollPosition);
        if (currentScrollPosition > 0) {
            nextScrollPosition = currentScrollPosition - 700;
        }

        // Scroll to the new position
        carouselRef.current.scrollTo({ left: nextScrollPosition, behavior: 'smooth' });

        // Update the current scroll position state
        setCurrentScrollPosition(nextScrollPosition);
    };

    const handleWheel = (event) => {
        carouselRef.current.scrollLeft += event.deltaY;
        
    };

    const carouselRef = useRef()

    useEffect(() => {
        console.log(carouselRef.current.scrollWidth)
    }, []);
    // ! scrollbar-hide is a custom class in home.css
    return (
        <div className="container h-[25vh] sm:h-[30vh] md:h-[38vh] lg:h-[45vh] xl:h-[55vh]">
            <h2 className="capitalize font-bold lg:my-3 ">most popular</h2>
            <div className="flex items-center h-[200px] justify-around lg:mt-[10vh] ">
                <button onClick={() => scrollPrev()} className='hidden md:block'  ><ChevronLeftIcon className="h-12 mr-5 text-gray-500" /></button>

                <div ref={carouselRef} onWheel={handleWheel} className="overflow-x-scroll scrollbar-hide  snap-x flex ">

                    <div className=" grid grid-row-1 grid-flow-col gap-2 md:gap-2 mt-10">
                        <MovieCard grow imgUrl={'https://image.tmdb.org/t/p/w400/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://image.tmdb.org/t/p/w400/qdFrqXYH6PtyAVlegub7bpoSgro.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/udHvbKwV-IMG-Dubai-UAE-1.jpg'} title="hello world" alt="hello world" />
                        <MovieCard grow imgUrl={'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png'} title="hello world" alt="hello world" />

                    </div>
                </div>
                <button onClick={() => scrollNext()} className='hidden md:block' ><ChevronRightIcon className="h-12 ml-5 text-gray-500" /></button>
            </div>
        </div>
    )
}
