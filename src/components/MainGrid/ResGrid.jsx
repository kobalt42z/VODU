import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_BASE_URL, POSTER_BASE_URL } from '../../constant/constant'
import { ItemCard } from '../movieCard/itemCard'
import { MovieCard } from '../movieCard/MovieCard'

export const ResGrid = (props) => {


    return (<>
      
        <div className="grid w-[90%] md:w-[90%] lg:w-[100%] xl:w-[90%] justify-center
        grid-cols-2 
        md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5
         
          gap-y-5 grid-flow-row md:p-5">


            {props.res && props.res.map((item) => {
                return <Link to={`/${item.media_type}/${item.id}/`} >
                    <div className=' w-[100%] flex justify-center '>
                        <ItemCard  mv={item.media_type === 'movie'} tv={item.media_type === 'tv'} key={item.id}  imgUrl={item.poster_path ? POSTER_BASE_URL + item.poster_path : 'https://htgindustry.com/wp-content/uploads/improve-video-play-rate.png'} title={item.name? item.media_type + ' : ' + item.name : item.media_type + ' : ' + item.original_title} alt={item.name} />
                    </div>
                </Link>
            })}

        </div>

    </>)
}
