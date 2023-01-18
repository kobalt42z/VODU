import { HomeIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { Breadcrumb, Button, Dropdown, Rating, Tabs } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { MainGrid } from '../components/MainGrid/MainGrid'
import { API_KEY, BASE_URL, LANGUAGE, SEASON, TV_URL } from '../constant/constant'

export const SeasonLayout = () => {
    // const { seasons,serie_id } = props
    const location = useLocation()
    const navigate = useNavigate()
    const [episodes, setEpisodes] = useState([])
    const [seasons, setSeasons] = useState([])
    const [data, setData] = useState({})
    const [selectedSeason, setSelectedSeason] = useState(1)
    const params = useParams()
    const tv_id = params.tv_id

    const bringTvInfo = async (id) => {
        try {

            const resp = await axios.get(TV_URL + id + API_KEY + LANGUAGE)

            if (resp.data.seasons) {
                console.log(resp.data.seasons);
                setSeasons(resp.data.seasons)
                setData(resp.data)
            } else console.log('no data');


        } catch (err) {
            console.log(err)
            console.log(params);
        }



    }

    const bringEpisodes = async (_season_number) => {
        try {
            // tofix
            const stringo = TV_URL + tv_id + SEASON + _season_number + API_KEY + LANGUAGE
            console.log(stringo);
            const resp = await axios.get(stringo)
            if (resp.data.episodes) {
                console.log(resp.data);
                setEpisodes(resp.data.episodes)


            } else console.log('no episodes');
            console.log(resp)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        params.season_id ? setSelectedSeason(params.season_id) : setSelectedSeason(1)

        console.log(params.season_id);
        bringEpisodes(selectedSeason)

        console.log(location);


        location.state?._seasons ? setSeasons(location.state._seasons) : bringTvInfo(tv_id)


    }, [params.season_id, selectedSeason])




    return (<div className='container min-h-[80vh] pt-5'>
        <div className="pl-2">
            <Dropdown
                className='overflow-y-scroll h-[30vh] '
                label="choose season"
                placement="right-start"
            >

                {seasons &&
                    seasons.map((item, index) => {
                        return (
                            <Dropdown.Item key={index} onClick={() => {
                                navigate(`/tv/${tv_id}/seasons/${item.season_number}`)


                            }
                            }>

                                {item.name}

                            </Dropdown.Item>
                        )
                    })
                }


            </Dropdown>
        </div>
        <div className="px-5 py-3">
            <Breadcrumb aria-label="Default breadcrumb example">
                {/* <Breadcrumb.Item

                        icon={HomeIcon}
                    >
                        <Link to={'/home'} >Home</Link>
                    </Breadcrumb.Item> */}
                <Breadcrumb.Item >
                    <Link to={'/tvs'} >Tv & show</Link>

                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={`/tv/${tv_id}}`} > {data.name} </Link>

                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to={`/tv/${tv_id}}/seasons/`} >Season {params.season_id}</Link>

                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
        {episodes[1] ? <MainGrid episodes={episodes} season={selectedSeason} tvName={data.name} /> :

            <div>there is no episode yet</div>
        }
    </div>)

}
