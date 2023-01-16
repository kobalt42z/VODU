import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY, BASE_URL, DISCOVER_MOVIE_URL, IMG_BASE_URL, LANGUAGE, PAGE, POSTER_BASE_URL } from '../../constant/constant'
import { ItemCard } from '../movieCard/itemCard'
import { MovieCard } from '../movieCard/MovieCard'

export const HomeGrid = (props) => {
    const [data, setData] = useState([]);

    const discoverMovies = async() => {
        try{
        const resp = await axios.get(BASE_URL+DISCOVER_MOVIE_URL+API_KEY+LANGUAGE+PAGE+'1')
        console.log(resp.data);
        setData(resp.data.results)

        }catch(err){
            console.log(err);
        }

    }
    useEffect(() => {
        discoverMovies()
        
    }, [])
    return (<>
        <h2 className=' capitalize  text-2xl font-thin py-5'>uplowded last :</h2>
        <div className="grid w-[100%] justify-center
        grid-cols-2 
        md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5
         
          gap-y-5 grid-flow-row md:p-5">


            {data && data.map((item) => {
                return <Link to={`/movie/${item.id}/seasons/`}>
                    <div className=' w-[100%] flex justify-center '>
                        <ItemCard key={item.id}  imgUrl={item.poster_path ? POSTER_BASE_URL + item.poster_path : 'https://htgindustry.com/wp-content/uploads/improve-video-play-rate.png'} title={item.original_title} alt={item.original_title} />
                    </div>
                </Link>
            })}

        </div>

    </>)
}
