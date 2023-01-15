import React from 'react'
import { Link } from 'react-router-dom'
import { IMG_BASE_URL, POSTER_BASE_URL } from '../../constant/constant'
import { MovieCard } from '../movieCard/MovieCard'

export const MainGrid = (props) => {
    

    return (<>
        <h2 className=' capitalize font-bold'>uplowded last :</h2>
        <div className="grid  justify-items-center
        grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4
         
          gap-y-5 grid-flow-row p-5">
            

            {props.episodes && props.episodes.map((episode) => {
                return  <Link to={`/tv/${episode.show_id}/seasons/${episode.season_number}/episode/${episode.episode_number}/`} ><MovieCard key={episode.id} grow imgUrl={episode.still_path?POSTER_BASE_URL+episode.still_path : 'https://htgindustry.com/wp-content/uploads/improve-video-play-rate.png'} title={episode.episode_number+' : ' +episode.name} alt={episode.name} /></Link>
            })}
              
        </div>

    </>)
}
