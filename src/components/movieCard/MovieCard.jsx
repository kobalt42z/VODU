import React, { useEffect } from 'react'
import './movieCard.css'
export const MovieCard = (props) => {
    // const { imgUrl, title, alt } = props
    // const imgg = `${imgUrl}` 


    useEffect(() => {
        console.log(props.imgUrl)
    }, [])
    return (
        <div style={{background: `url(${props.imgUrl })`,backgroundSize:'cover' , backgroundPosition:'center' ,backgroundRepeat:'no-repeat'}} className={`  center rounded-md 
        drop-shadow-lg
        h-[12vh] w-[18vh]
        md:h-[16vh] md:w-[22vh] 
        lg:h-[22vh] lg:w-[32vh] 
        xl:h-[26vh] xl:w-[38vh] 

        ${props.grow?`
        
        md:hover:w-[24vh] md:hover:h-[18vh]
        lg:hover:w-[34vh] lg:hover:h-[24vh]
        xl:hover:w-[40vh] xl:hover:h-[28vh]
        `
        :
        ''
    }
        duration-[1s] `} >

            <div className=" rounded-md custom-shaddow h-[100%] w-[100%] opacity-0 hover:opacity-100 flex items-end px-5 py-5 " >
               
                    <p className="text-white font-bold">{props.title}</p>
                
            </div>
        </div>
    )
}
