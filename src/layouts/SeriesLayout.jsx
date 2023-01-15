import { Button, Rating, Tabs } from 'flowbite-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_KEY, BASE_URL, LANGUAGE, TV_URL } from '../constant/constant'

export const SeriesLayout = (props) => {
    const { poster_path, name, original_name, genres, seasons, vote_average,vote_count } = props
    // ! geners[] {id,name} 
    // ! seasons[] {air_date,episode_count,name,overview,poster_path,season_number}

    const bringTvInfo = async (id) =>{
        const resp =  await axios.get(TV_URL+id+API_KEY+LANGUAGE)
        console.log(resp.data)
        
    }
    
    const [stars, setImbd] = useState(6);

    




    return (<>
        {/* fetch content from props.itemUrl  */}
        <div className='container md:flex  justify-center dark:text-white'>
            <div className="leftcol md:w-[40%]   ">
                <div className="poster flex justify-end">
                    <Link to={'/anime'}>
                    <img className='lg:w-[70%]' src="https://image.tmdb.org/t/p/w500/AZy82ouYJFZ5ZY86TKH13AlSVb.jpg" alt="poster" />
                    </Link>
                </div>
                <div className="tbtns flex justify-end w-[100%] pt-2">
                    <button className="w-[50%] lg:w-[35%] h-[5vh] hover:bg-slate-200 border font-semibold"> <i class="fa-brands fa-google-play"></i> Watch</button>
                    <button className="w-[50%] lg:w-[35%] h-[5vh] hover:bg-slate-200 border font-semibold"><i class="fa-brands fa-amazon"></i> Watch</button>
                </div>
                <div className="flex justify-end">
                    <div className="sinfo w-[100%] lg:w-[70%] drop-shadow border mt-5 h-[20vh] flex justify- items-center">

                        <div className='p-5  space-y-2'>
                            <p><span className='font-bold pr-5 '>Contry: </span>{props.Country}</p>
                            <p><span className='font-bold pr-5'>Langage: </span> {props.Language}</p>
                            <p><span className='font-bold pr-5 '>Rated: </span>{props.Rated}</p>
                            <p><span className='font-bold pr-5 '>Awards:</span> {props.Awards}</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className="rightcol w-[100%] md:w-[60%] p-10">S
                <div className="title capitalize space-y-1">
                    <h1 className='text-2xl py-2'>{props.Title}</h1>
                    <p className=''><span className='font-bold '>Directed by:</span> <span className='text-sky-600'> {props.Director}</span></p>
                </div>
                <div className="gener pb-5">
                    <p className=''>
                        <span className='font-bold '> Gener:</span> {props.Genre} | <span className='font-bold'> Runtime:</span> {props.Runtime} | <span className='font-bold'> contry:</span> {props.Country} | <span className='font-bold'> Langage:</span> {props.Language} |
                        <span className='font-bold'>Release Date:</span> {props.Released}
                    </p>
                </div>
                <div className="rating  flex w-[100%] mb-5" >

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
                <div className="theoutlet border ">
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
                </div>
                <div className="caracteristhics  p-10 border w-[100%] shadow-lg flex-col space-y-4 ">
                    <h1 className='text-lg font-bold'> Caracteristhics </h1>
                    <hr />
                    <p><span className='font-bold pr-5 '>Writer:</span> {props.Writer}</p>
                    <hr />
                    <p><span className='font-bold pr-5'>Actors:</span> {props.Actors}</p>
                    <hr />
                    <p><span className='font-bold pr-5 '>Box Office:</span> {props.BoxOffice}</p>
                    <hr />
                    <p><span className='font-bold pr-5 '>Year:</span> {props.Year}</p>
                </div>
            </div>
        </div>

    </>)
}
