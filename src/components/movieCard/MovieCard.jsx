import React from 'react'
import './movieCard.css'
export const MovieCard = (props) => {
    return (
        <div className={` snap center rounded  w-[300px] h-[180px] hover:h-[200px] hover:w-[320px] bg-[url(${props.imgUrl})] bg-cover duration-[1s]`}>

            <div className=" custom-shaddow h-[100%] w-[100%] opacity-0 hover:opacity-100 flex items-end px-5 py-5 " >
               
                    <p className="text-white font-bold">{props.title}</p>
                
            </div>
        </div>
    )
}
