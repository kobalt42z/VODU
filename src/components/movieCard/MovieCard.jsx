import React, { useEffect } from 'react'
import './movieCard.css'
export const MovieCard = (props) => {
    // const { imgUrl, title, alt } = props
    // const imgg = `${imgUrl}` 
    useEffect(() => {
        console.log(props.imgUrl)
    }, [])
    return (
        <div style={{background: `url(${props.imgUrl})`,backgroundSize:'cover', backgroundPosition:'center'}} className={`  center rounded-md 
        drop-shadow-lg
        w-[12vh] h-[18vh]
        md:w-[16vh] md:h-[22vh] 
        lg:w-[22vh] lg:h-[32vh] 
        xl:w-[25vh] xl:h-[36vh] 

        ${props.grow?`
        
        md:hover:h-[24vh] md:hover:w-[18vh]
        lg:hover:h-[34vh] lg:hover:w-[24vh]
        xl:hover:h-[39vh] xl:hover:w-[27vh]
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
