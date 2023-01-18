import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_BASE_URL, POSTER_BASE_URL } from '../../constant/constant'
import { MovieCard } from '../movieCard/MovieCard'

export const MainGrid = (props) => {
    

    return (<>
        <h2 className=' capitalize  text-2xl py-5'>uplowded last :</h2>
        <div className="grid w-[100%] justify-center
        grid-cols-1 
        md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4
         
          gap-y-5 grid-flow-row md:p-5">
            

            {props.episodes && props.episodes.map((episode) => {
                return  <Link to={`/tv/${episode.show_id}/seasons/${episode.season_number}/episode/${episode.episode_number}/?tvn=${props.tvName}`} >
                    <div className=' w-[100%] flex justify-center '>
                    <MovieCard key={episode.id}  imgUrl={episode.still_path?POSTER_BASE_URL+episode.still_path : 'https://htgindustry.com/wp-content/uploads/improve-video-play-rate.png'} title={episode.episode_number+' : ' +episode.name} alt={episode.name} />
                    </div>
                    </Link>
            })}
              
        </div>

    </>)
}
