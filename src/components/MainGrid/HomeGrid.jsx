import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY, BASE_URL, DISCOVER_MOVIE_URL, DISCOVER_TV_URL, IMG_BASE_URL, LANGUAGE, PAGE, POSTER_BASE_URL } from '../../constant/constant'
import { ItemCard } from '../movieCard/itemCard'
import { MovieCard } from '../movieCard/MovieCard'

export const HomeGrid = (props) => {
    const [data, setData] = useState([]);
    const MV_URL = BASE_URL + DISCOVER_MOVIE_URL + API_KEY + LANGUAGE + PAGE + '1'
    const TV_URL = BASE_URL + DISCOVER_TV_URL + API_KEY + LANGUAGE + PAGE + '1'
    
    const discover = async (url) => {
        try {
           
            const resp = await axios.get(url)
            console.log(resp.data);
            setData(resp.data.results)

        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        {props.mv&&discover(MV_URL)}
        {props.tv&&discover(TV_URL)}
        
    }, [props.tv,props.mv])
    return (<>
       
        <div className="grid w-[90%] justify-center
        grid-cols-2 
        md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5
         
          gap-y-5 grid-flow-row md:p-5">


            {data && data.map((item) => {
                return <div className=' w-[100%] flex justify-center '>
                        <ItemCard mv={props.mv} tv={props.tv} key={item.id} mId={item.id}  imgUrl={item.poster_path ? POSTER_BASE_URL + item.poster_path : 'https://htgindustry.com/wp-content/uploads/improve-video-play-rate.png'} title={item.original_title} alt={item.original_title} />
                    </div>
                
            })}

        </div>

    </>)
}
