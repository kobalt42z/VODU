import { HomeIcon } from '@heroicons/react/24/outline';
import axios from 'axios'
import { Breadcrumb, Button, Rating, Tabs } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom'
;

import { API_KEY, BACK_DROP_BASE_URL, BASE_URL, IMG_BASE_URL, LANGUAGE, POSTER_BASE_URL, TV_URL } from '../constant/constant'
import './backdrop.css'

/*
* 
* add a button to navigate to the season & episodes page 
*      the navigate shuld pass a state withe seasons [] otherwise the page
*      will go back to the series page (this)
* build a bringTvInfo function to fetch the serie info
*      the function should be called on the render of the page
* replace the props with the fetched data
* have fun :)
 */


export const SeriesLayout = (props) => {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    
    
   
    
    const {backdrop_path,first_air_date,genres ,homepage,name,number_of_episodes,number_of_seasons,original_language,overview,popularity,poster_path,status,origin_country,vote_average,vote_count,networks,seasons} = data || {}

    const params = useParams()
    const tv_id = params.tv_id
  
    const bringTvInfo = async (id) => {
        
        try{

            const resp = await axios.get(TV_URL + id + API_KEY + LANGUAGE)
            
            if (resp.data) {
                console.log(resp.data);
                setData(resp.data)
                if(typeof vote_average !== 'undefined'){
                    setImbd(resp.data.vote_average)
                }
            }else console.log('no data');
                
            
        }catch(err){
            console.log(err)
        }
       
        

    }

    const [stars, setImbd] = useState(6);


    useEffect(() => {
       bringTvInfo(tv_id)
    
       
    }, []);



    return (<>
        {/* fetch content from props.itemUrl  */}
        
           <div className="px-5 py-3">
           <Breadcrumb aria-label="Default breadcrumb example">
                    {/* <Breadcrumb.Item

                        icon={HomeIcon}
                    >
                        <Link to={'/home'} >Home</Link>
                    </Breadcrumb.Item> */}
                    <Breadcrumb.Item >
                        <Link to={'/tvs'} >Tv Shows</Link>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={`/tv/${tv_id}}`} > {name} </Link>

                    </Breadcrumb.Item>

                </Breadcrumb>
           </div>
        <div className="Mbackdrop container bg-no-repeat"
            style={{ background: `url(${BACK_DROP_BASE_URL+backdrop_path})`}}>


            <div className={`container md:flex  justify-center dark:text-white  bg-opacity-50 backdrop-filter backdrop-blur-sm  rounded-lg  md:p-5 `}>


                <div className="leftcol md:w-[40%] pt-5 ">
                    <div className="poster max-md:p-5 ">
                        <Link to={'/seasons'} className="flex justify-end " >
                            <img className='lg:w-[70%] rounded-t-lg  ' src={POSTER_BASE_URL + poster_path} alt="poster" />

                        </Link>
                    </div>
                    <div className="tbtns flex justify-end w-[100%] pt-2">
                        <button className="w-[50%] lg:w-[35%] h-[5vh] hover:bg-slate-200 border font-semibold"> <i claseName="fa-brands fa-google-play"></i> Watch</button>
                        <button className="w-[50%] lg:w-[35%] h-[5vh] hover:bg-slate-200 border font-semibold"><i claseName="fa-brands fa-amazon"></i> Watch</button>
                    </div>
                    <div className="flex justify-end">
                        <div className="sinfo w-[100%] lg:w-[70%]   mt-5 h-[20vh] flex justify- items-center
                         border  dark:border-0 drop-shadow-lg bg-white dark:bg-gray-800 rounded-lg
                        ">

                            <div className='p-5  space-y-2'>
                                <p><span className='font-bold pr-2 '>Seasons: </span>{number_of_seasons}</p>
                                <p><span className='font-bold pr-2'>Episodes: </span> {number_of_episodes}</p>
                                <p><span className='font-bold pr-2 '> Status :</span>{status}</p>
                                <p><span className='font-bold pr-2 '>Popularity:</span> {popularity}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="rightcol w-[100%] md:w-[60%] md:p-10 drop-shadow-lg ">
                    <div className="topof  bg-white rounded-t-md p-5  dark:bg-gray-800">
                        <div className="title capitalize space-y-1 ps-5">
                            <h1 className='text-4xl py-2'>{name}</h1>

                        </div>
                        <div className="gener pb-5 flex justify-between pt-3">
                            <p className=''>
                                <span className='font-bold '> Gener:</span> {"genres"}  | <span className='font-bold'> contry:</span> {"origin_country[0]"}  <span className='font-bold'> <br /> Langage:</span> {original_language} |
                                <span className='font-bold'>Release Date:</span> {first_air_date}
                            </p>
                            
                                <Button onClick={()=>navigate(`/tv/${tv_id}/seasons/`,{state:{seasons:seasons}
                                })} className=''>Episodes <i claseName="fa-solid fa-arrow-right ml-5"></i></Button>
                           
                        </div>
                        <div className="rating  flex w-[100%] pb-5" >

                            <div className='flex items-center justify-center   space-x-4   '> <h3 className='font-semibold text-xl'>stars: </h3>
                                <Rating size="sm">
                                    {stars >= 2 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                                    {stars >= 4 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                                    {stars >= 6 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                                    {stars >= 8 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                                    {stars >= 10 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                                </Rating>
                                <span className="ml-5 ">{vote_average} | {vote_count}</span>
                            </div>
                        </div>
                    </div>
                    <div className="theoutlet  dark:border-0  bg-white  dark:bg-gray-800">
                        {/* <Tabs.Group
                            aria-label="Tabs with underline"
                            style="underline"
                        >
                            <Tabs.Item title="Overview">
                             
                            </Tabs.Item>
                            <Tabs.Item
                                active={true}
                                title="Review"
                            >
                                <div className="synopsis w-[100%]  p-5  md:p-10 drop-shadow-md space-y-1">
                                    <h1 className='font-semibold text-2xl'>Lolipop </h1>
                                    <hr />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum a ratione beatae perspiciatis at, molestiae quaerat ipsum assumenda ipsa nobis suscipit totam et dolorum atque magni aliquam voluptate quam explicabo repellat. Ea mollitia maiores animi enim cumque aut totam repellat similique, error minus deleniti assumenda, dignissimos in labore a . Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae suscipit at cum sit neque eius similique, veritatis rerum.</p>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="User Reviews">
                                <div className="synopsis w-[100%]  p-5  md:p-10 drop-shadow-md space-y-1">
                                    <h1 className='font-semibold text-2xl'>Macadonia </h1>
                                    <hr />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum a ratione beatae perspiciatis at, molestiae quaerat ipsum assumenda ipsa nobis suscipit totam et dolorum atque magni aliquam voluptate quam explicabo repellat. Ea mollitia maiores animi enim cumque aut totam repellat similique, error minus deleniti assumenda, dignissimos in labore a . Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae suscipit at cum sit neque eius similique, veritatis rerum.</p>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item title="Cast & crew">
                                <div className="synopsis w-[100%]  p-5  md:p-10 drop-shadow-md space-y-1">
                                    <h1 className='font-semibold text-2xl'>Synopsis </h1>
                                    <hr />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum a ratione beatae perspiciatis at, molestiae quaerat ipsum assumenda ipsa nobis suscipit totam et dolorum atque magni aliquam voluptate quam explicabo repellat. Ea mollitia maiores animi enim cumque aut totam repellat similique, error minus deleniti assumenda, dignissimos in labore a . Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae suscipit at cum sit neque eius similique, veritatis rerum.</p>
                                </div>
                            </Tabs.Item>
                            <Tabs.Item
                                disabled={false}
                                title="Realeases"
                            >
                                <div className="synopsis w-[100%]  p-5  md:p-10 drop-shadow-md space-y-1">
                                    <h1 className='font-semibold text-2xl'>Synopsis </h1>
                                    <hr />
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum a ratione beatae perspiciatis at, molestiae quaerat ipsum assumenda ipsa nobis suscipit totam et dolorum atque magni aliquam voluptate quam explicabo repellat. Ea mollitia maiores animi enim cumque aut totam repellat similique, error minus deleniti assumenda, dignissimos in labore a . Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae suscipit at cum sit neque eius similique, veritatis rerum.</p>
                                </div>
                            </Tabs.Item>
                        </Tabs.Group> */}
                        <div className="synopsis w-[100%]  p-5  md:p-10 drop-shadow-md space-y-1">
                            <h1 className='font-semibold text-2xl '>Overview </h1>
                            <hr />
                            <p>{overview}</p>
                        </div>
                    </div>

                    <div className="caracteristhics  p-10   w-[100%] shadow-lg flex-col space-y-4  bg-white dark:bg-gray-800 rounded-b-lg">
                        <h1 className='text-lg font-bold'> Caracteristhics </h1>
                        <hr />
                        <p className='flex justify-start'><span className='font-bold pr-5 '>Network:</span> {networks&&networks[0].name}</p>
                        <hr />
                        <p className='flex justify-start '><span className='font-bold pr-5'>Network origin:</span> <span>{networks&&networks[0].origin_country}</span></p>
                        <hr />
                        <p className='flex justify-start '><span className='font-bold pr-5 '>Status :</span> {status}</p>
                        <hr />
                        <p className='flex justify-start'><span className='font-bold pr-5 '>HomePage :</span> <a className='text-blue-600 truncate ' href={homepage? homepage : 'N/A'}>{homepage? homepage : 'N/A'} </a></p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
