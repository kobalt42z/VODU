import { Button, Rating, Tabs } from 'flowbite-react'
import React, { useState } from 'react'

export const ItemLayout = (props) => {
    const [stars, setStars] = useState(3);
    return (<>
        {/* fetch content from props.itemUrl  */}
        <div className='container md:flex  justify-center dark:text-white'>
            <div className="leftcol md:w-[40%]   ">
                <div className="poster flex justify-end">
                    <img className='lg:w-[70%]' src="https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" alt="poster" />
                </div>
                <div className="tbtns flex justify-end w-[100%] pt-2">
                    <button className="w-[50%] lg:w-[35%] h-[5vh] hover:bg-slate-200 border font-semibold">Watch Trailer</button>
                    <button className="w-[50%] lg:w-[35%] h-[5vh] hover:bg-slate-200 border font-semibold">Watch Trailer</button>
                </div>
                <div className="flex justify-end">
                    <div className="sinfo w-[100%] lg:w-[70%] drop-shadow border mt-5 h-[20vh] flex justify- items-center">

                        <div className='p-5  space-y-2'>
                            <p><span className='font-bold pr-5 '>Release Date:</span> 2021-09-29</p>
                            <p><span className='font-bold pr-5'>Release Date:</span> 2021-09-29</p>
                            <p><span className='font-bold pr-5 '>Release Date:</span> 2021-09-29</p>
                            <p><span className='font-bold pr-5 '>Release Date:</span> 2021-09-29</p>

                        </div>

                    </div>
                </div>

            </div>
            <div className="rightcol w-[100%] md:w-[60%] p-10">
                <div className="title capitalize space-y-1">
                    <h1 className='text-2xl py-2'>{props.title}</h1>
                    <p className=''><span className='font-bold '>directed by:</span> <span className='text-sky-600'> {props.directedBy}</span></p>
                </div>
                <div className="gener pb-5">
                    <p className=''>
                        <span className='font-bold '> lorem:</span> ipsum | <span className='font-bold'> lorem:</span> ipsum | <span className='font-bold'> lorem:</span> ipsum | <span className='font-bold'> lorem:</span> ipsum |
                        <span className='font-bold'> lorem</span> ipsum
                    </p>
                </div>
                <div className="rating  max-lg:flex-col lg:flex  w-[100%]" >
                    <div className='flex items-center justify-center lg:flex-col xl:flex-row lg:w-[33.3%] px-2 border px- py-4 '> <h3 className='font-semibold'>Lorem, ipsum :</h3>
                        <Rating size="sm">
                            {stars >= 1 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 2 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 3 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 4 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 5 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                        </Rating>
                    </div>
                    <div className='flex items-center justify-center lg:flex-col xl:flex-row lg:w-[33.3%] px-2 border px- py-4 '> <h3 className='font-semibold'>Lorem, ipsum :</h3>
                        <Rating size="sm">
                            {stars >= 1 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 2 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 3 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 4 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 5 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                        </Rating>
                    </div>
                    <div className='flex items-center justify-center lg:flex-col xl:flex-row lg:w-[33.3%] px-2 border px- py-4 '> <h3 className='font-semibold'>Lorem, ipsum :</h3>
                        <Rating size="sm">
                            {stars >= 1 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 2 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 3 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 4 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                            {stars >= 5 ? <Rating.Star filled={true} /> : <Rating.Star filled={false} />}
                        </Rating>
                    </div>
                   
             



                </div>
                <div className="theoutlet border ">
                    <Tabs.Group
                        aria-label="Tabs with underline"
                        style="underline"
                    >
                        <Tabs.Item title="Overview">
                            <div className="synopsis w-[100%] border p-5  md:p-10 drop-shadow-md space-y-1">
                                <h1 className='font-semibold text-2xl '>Synopsis </h1>
                                <hr />
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore rerum a ratione beatae perspiciatis at, molestiae quaerat ipsum assumenda ipsa nobis suscipit totam et dolorum atque magni aliquam voluptate quam explicabo repellat. Ea mollitia maiores animi enim cumque aut totam repellat similique, error minus deleniti assumenda, dignissimos in labore a . Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reprehenderit vitae suscipit at cum sit neque eius similique, veritatis rerum.</p>
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
                    <p><span className='font-bold pr-5 '>Release Date:</span> 2021-09-29</p>
                    <hr />
                    <p><span className='font-bold pr-5'>Release Date:</span> 2021-09-29</p>
                    <hr />
                    <p><span className='font-bold pr-5 '>Release Date:</span> 2021-09-29</p>
                    <hr />
                    <p><span className='font-bold pr-5 '>Release Date:</span> 2021-09-29</p>
                </div>
            </div>
        </div>

    </>)
}
