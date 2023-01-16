import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { Card } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { API_KEY, BASE_URL, DISCOVER_MOVIE_URL, DISCOVER_TV_URL, LANGUAGE, PAGE, POSTER_BASE_URL } from '../../constant/constant'
import { ItemCard } from '../movieCard/itemCard'
import { MovieCard } from '../movieCard/MovieCard'

import './CarouScroll.css'
export const CarouScroll = (props) => {
    const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
    const [data, setData] = useState([]);
    const MV_URL = BASE_URL + DISCOVER_MOVIE_URL + API_KEY + LANGUAGE + PAGE + '2'
    const TV_URL = BASE_URL + DISCOVER_TV_URL + API_KEY + LANGUAGE + PAGE + '2'
    
    const discover = async (url) => {
        try {
           
            const resp = await axios.get(url)
            console.log(resp.data);
            setData(resp.data.results)

        } catch (err) {
            console.log(err);
        }

    }

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
        {props.mv && discover(MV_URL) }
        {props.tv && discover(TV_URL) }
        console.log(TV_URL);
        return () => {
            setData([])
        }
    }, [props.tv, props.mv]);
    // ! scrollbar-hide is a custom class in home.css
    return (
        <div className="container  h-[25vh] sm:h-[30vh] md:h-[38vh] lg:h-[45vh] xl:h-[55vh] ">
           
            <div className="flex justify-around  ">
                <div className='flex flex-col justify-center '>
                    <button onClick={() => scrollPrev()} className='hidden md:block'  ><ChevronLeftIcon className="h-12 mr-5 text-gray-500" /></button>
                </div>


                <div ref={carouselRef} onWheel={handleWheel} className="overflow-x-scroll scrollbar-hide  snap-x flex ">

                    <div className=" grid grid-row-1 grid-flow-col gap-x-2 md:gap-2 ">
                        {data && data.map((item, index) => {
                            return (
                        <div className="">
                             <ItemCard grow mv={props.mv} tv={props.tv} key={item.id} mId={item.id}  imgUrl={item.poster_path ? POSTER_BASE_URL + item.poster_path : 'https://htgindustry.com/wp-content/uploads/improve-video-play-rate.png'} title={item.original_title} alt={item.original_title} />
                        </div>
                            )
                        })}
                       

                    </div>
                </div>
                <button onClick={() => scrollNext()} className='hidden md:block' ><ChevronRightIcon className="h-12 ml-5 text-gray-500" /></button>
            </div>
        </div>
    )
}
