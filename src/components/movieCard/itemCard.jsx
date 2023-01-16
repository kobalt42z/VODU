import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './movieCard.css'

export const ItemCard = (props) => {
    // const { imgUrl, title, alt } = props
    // const imgg = `${imgUrl}` 
    const navigate = useNavigate()

    useEffect(() => {
      
    }, [])
    return (
        <div style={{background: `url(${props.imgUrl })`,backgroundSize:'cover' , backgroundPosition:'center' ,backgroundRepeat:'no-repeat'}} className={`  center rounded-md 
         
        drop-shadow-lg 
        w-[18vh] h-[28vh]
        md:w-[18vh] md:h-[26vh] 
        lg:w-[22vh] lg:h-[30vh] 
        xl:w-[25vh] xl:h-[35vh] 

        ${props.grow?`

       ${props.absolute && "hover:absolute"} 
        transition-all duration-1000 ease-in-out
        md:hover:h-[24vh] md:hover:w-[18vh]
        lg:hover:h-[34vh] lg:hover:w-[24vh]
        xl:hover:h-[37vh] xl:hover:w-[28vh]
        `
        :
        ''
    }
         `} 
         onClick={()=>{{props.mv&& navigate(`/movie/${props.mId}`)}{props.tv&& navigate(`/tv/${props.mId}`)}}}  
         >

            <div className=" rounded-md custom-shaddow h-[100%] w-[100%] opacity-0 max-md:opacity-100 hover:opacity-100 flex items-end px-5 py-5 " >
               
                    <p className="text-white font-bold truncate ">{props.title}</p>
                
            </div>
          
        </div>
    )
}
