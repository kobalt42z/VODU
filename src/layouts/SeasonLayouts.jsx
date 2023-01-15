import axios from 'axios'
import { Button, Dropdown, Rating, Tabs } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { MainGrid } from '../components/MainGrid/MainGrid'
import { API_KEY, BASE_URL, LANGUAGE, SEASON, TV_URL } from '../constant/constant'

export const SeasonLayout = () => {
    // const { seasons,serie_id } = props
    const location = useLocation()
    const navigate = useNavigate()
    const [episodes, setEpisodes] = useState([])
    const { seasons } = location.state || []




    const bringEpisodes = async (_season_number) => {
        try {
            // tofix
            const stringo = TV_URL + serie_id + SEASON + _season_number + API_KEY + LANGUAGE
            console.log(stringo);
            const resp = await axios.get(stringo)
            if (resp.data.episodes) {
                console.log(resp.data.episodes);
                setEpisodes(resp.data.episodes)

            } else console.log('no episodes');
            console.log(resp)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
      
        if (!seasons) {
            console.log('missing seasons');
            navigate('/series')
        }



    }, [])

    // seasons[] is an array of objects

    // const { poster_path, name, original_name, genres, episodes, sesons } = data
    // ! geners[] {id,name} 
    // ! episodes[] 
    return (<div className='container lg:min-h-[80vh]'>
        <Dropdown
            label="Dropdown right start"
            placement="right-start"
        >

            {seasons &&
                seasons.map((item, index) => {
                    return (
                        <Dropdown.Item key={index} onClick={() => bringEpisodes(item.season_number)}>

                            {item.name}

                        </Dropdown.Item>
                    )
                })
            }


        </Dropdown>
        {episodes[1] ? <MainGrid episodes={episodes} /> :

            <div>there is no episode yet</div>
        }
    </div>)

}
