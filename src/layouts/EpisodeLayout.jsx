import { HomeIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { Breadcrumb, Button, Rating, Tabs } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { API_KEY, EPISODE, LANGUAGE, POSTER_BASE_URL, SEASON, TV_URL } from '../constant/constant';

// * data from season/num/episode/num -> props

export const EpisodeLayouts = (props) => {
    


   

    // ? destruct vote_average to stars :)

    const [stars, setStars] = useState(6);
    const [episode, setEpisode] = useState({})

    const { still_path, name, overview, runtime, vote_average, vote_count, episode_number, air_date } = episode ||{}

    const params = useParams()
    const ep_id = params.episode_id
    const tv_id = params.tv_id 
    const se_id = params.season_id
    


    const bringEpisode = async (id) => {
        try {
            const resp = await axios.get(TV_URL + tv_id + SEASON + se_id + EPISODE + id + API_KEY + LANGUAGE)
            if (resp.data) {
                setEpisode(resp.data)
            } else console.log('no episodes');
            console.log(resp)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        bringEpisode(ep_id)
        setStars(vote_average)
    }, [])




    return (<>
        {/* fetch content from props.itemUrl  */}
        <div className='container  justify-center dark:text-white h-[85vh] md:h-[76vh] lg:h-[75vh] '>
            <div className="brd mt-5 max-md:hidden ">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item

                        icon={HomeIcon}
                    >
                        <Link to={'/home'} >Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item >
                        <Link to={'/tv'} >Tv</Link>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/tv/${tv_id}}`} > nameOfSeries </Link>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/tv/${tv_id}}/seasons/`} >Season {se_id}</Link>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/tv/${tv_id}}/seasons/${se_id}/episode/${ep_id}/`} >Episode {episode_number}</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="topCol md:w-[100%] md:flex  justify-center py-4 ">
                <div className="poster flex ">
                    <img className='md:w-[500px]' src={still_path?POSTER_BASE_URL + still_path: 'https://htgindustry.com/wp-content/uploads/improve-video-play-rate.png'} alt="poster" />

                </div>

                <div className="desc md:p-10">

                    <div className="title capitalize space-y-1">
                        <h1 className='text-2xl py-2 font-semibold '>{name}</h1>

                    </div>
                    <div className="gener pb-5">
                        <p className=''>
                            <span className='font-bold'> Season:</span> {se_id} |
                            <span className='font-bold '> Episod: </span> {episode_number} | <span className='font-bold'> Runtime:</span> {runtime}min |  <span className='font-bold'> Langage:</span> English |
                            <span className='font-bold'>Release Date:</span> {air_date}
                        </p>
                    </div>
                    <div className="rating  flex w-[100%]" >

                        <div className='flex items-center justify-center   space-x-4   '> <h3 className='font-semibold text-xl'>stars: </h3>
                            <Rating size="sm">
                                {stars >= 2 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                                {stars >= 4 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                                {stars >= 6 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                                {stars >= 8 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                                {stars >= 10 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            </Rating>
                            <span className="ml-5">{vote_average}| {vote_count}</span>
                        </div>
                    </div>

                </div>

            </div>
            <div className="dwoncol w-[100%] md:w-[100%] pt-10 flex justify-center">

                <div className="synopsis w-[100%]  md:w-[95%] lg:w-[70%] xl:w-[60%] border p-5  md:p-10 drop-shadow-md space-y-1">
                    <h1 className='font-semibold text-2xl'>Overview : </h1>
                    <hr />
                    <p>{overview}</p>
                </div>

            </div>
            <div className="last">

            </div>
        </div>

    </>)
}
