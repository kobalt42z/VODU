import { HomeIcon } from '@heroicons/react/24/outline';
import { Breadcrumb, Button, Rating, Tabs } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { POSTER_BASE_URL } from '../constant/constant';

// * data from season/num/episode/num -> props

export const EpisodeLayouts = (props) => {
    const { still_path, name, overview, runtime, vote_average, vote_count, episode_number, season_number, air_date } = props

    // ? destruct vote_average to stars :)

    const [stars, setStars] = useState(6);
   
    useEffect(() => {
        setStars(vote_average)
    }, [props])




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
                        <Link to={'/series'} >Series</Link>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={'/anime'} > Wandsday</Link>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={'/cartoon'} >Season {season_number}</Link>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={'/cartoon'} >Episode {episode_number}</Link>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="topCol md:w-[100%] md:flex  justify-center py-4">
                <div className="poster flex ">
                    <img className='md:w-[95%]' src={POSTER_BASE_URL+still_path} alt="poster" />

                </div>

                <div className="desc">

                    <div className="title capitalize space-y-1">
                        <h1 className='text-2xl py-2 font-semibold '>{name}</h1>

                    </div>
                    <div className="gener pb-5">
                        <p className=''>
                            <span className='font-bold'> Season:</span> {season_number} |
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

                {/* <div className="theoutlet border ">
                    <Tabs.Group
                        aria-label="Tabs with underline"
                        style="underline"
                    >
                        <Tabs.Item title="Overview">
                            <div className="synopsis w-[100%] border p-5  md:p-10 drop-shadow-md space-y-1">
                                <h1 className='font-semibold text-2xl '>Plot </h1>
                                <hr />
                                <p>{props.Plot}</p>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            active={true}
                            title="Review"
                        >
                            <div className="synopsis w-[100%] border p-5  md:p-10 drop-shadow-md space-y-1">
                                <h1 className='font-semibold text-2xl'>Lolipop </h1>
                                <hr />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum a ratione beatae perspiciatis at, molestiae quaerat ipsum assumenda ipsa nobis suscipit totam et dolorum atque magni aliquam voluptate quam explicabo repellat. Ea mollitia maiores animi enim cumque aut totam repellat similique, error minus deleniti assumenda, dignissimos in labore a . Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae suscipit at cum sit neque eius similique, veritatis rerum.</p>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="User Reviews">
                            <div className="synopsis w-[100%] border p-5  md:p-10 drop-shadow-md space-y-1">
                                <h1 className='font-semibold text-2xl'>Macadonia </h1>
                                <hr />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum a ratione beatae perspiciatis at, molestiae quaerat ipsum assumenda ipsa nobis suscipit totam et dolorum atque magni aliquam voluptate quam explicabo repellat. Ea mollitia maiores animi enim cumque aut totam repellat similique, error minus deleniti assumenda, dignissimos in labore a . Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae suscipit at cum sit neque eius similique, veritatis rerum.</p>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="Cast & crew">
                            <div className="synopsis w-[100%] border p-5  md:p-10 drop-shadow-md space-y-1">
                                <h1 className='font-semibold text-2xl'>Synopsis </h1>
                                <hr />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum a ratione beatae perspiciatis at, molestiae quaerat ipsum assumenda ipsa nobis suscipit totam et dolorum atque magni aliquam voluptate quam explicabo repellat. Ea mollitia maiores animi enim cumque aut totam repellat similique, error minus deleniti assumenda, dignissimos in labore a . Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae suscipit at cum sit neque eius similique, veritatis rerum.</p>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            disabled={false}
                            title="Realeases"
                        >
                            <div className="synopsis w-[100%] border p-5  md:p-10 drop-shadow-md space-y-1">
                                <h1 className='font-semibold text-2xl'>Synopsis </h1>
                                <hr />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum a ratione beatae perspiciatis at, molestiae quaerat ipsum assumenda ipsa nobis suscipit totam et dolorum atque magni aliquam voluptate quam explicabo repellat. Ea mollitia maiores animi enim cumque aut totam repellat similique, error minus deleniti assumenda, dignissimos in labore a . Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae suscipit at cum sit neque eius similique, veritatis rerum.</p>
                            </div>
                        </Tabs.Item>
                    </Tabs.Group>
                </div> */}
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
