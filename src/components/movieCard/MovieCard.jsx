import React, { useEffect } from 'react'
import './movieCard.css'
export const MovieCard = (props) => {
    // const { imgUrl, title, alt } = props
    // const imgg = `${imgUrl}` 
    useEffect(() => {
        console.log(props.imgUrl)
    }, [])
    return (
        <div style={{background: `url(${props.imgUrl})`,backgroundSize:'cover'}} className={` center rounded-md   w-[200px] h-[300px] hover:h-[320px] hover:w-[220px] duration-[1s] `} >

            <div className=" rounded-md custom-shaddow h-[100%] w-[100%] opacity-0 hover:opacity-100 flex items-end px-5 py-5 " >
               
                    <p className="text-white font-bold">{props.title}</p>
                
            </div>
        </div>
    )
}
