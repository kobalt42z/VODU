import axios from 'axios'
import { Button, Dropdown, Rating, Tabs } from 'flowbite-react'
import React, { useState } from 'react'
import { MainGrid } from '../components/MainGrid/MainGrid'
import { API_KEY, BASE_URL, LANGUAGE, SEASON, TV_URL } from '../constant/constant'

export const SeasonLayout = (props) => {
    // const { seasons,serie_id } = props

    // for testing :
    const serie_id = 119051
    const seasons = [
        {
            "air_date": "2022-11-23",
            "episode_count": 8,
            "id": 182137,
            "name": "Season 1",
            "overview": "",
            "poster_path": "/ajACh2JtjPOS2jJFhuD30gI1o8a.jpg",
            "season_number": 1
        },
        {
            "air_date": null,
            "episode_count": 0,
            "id": 323145,
            "name": "Season 2",
            "overview": "",
            "poster_path": null,
            "season_number": 2
        }
    ]
    const bringEpisodes = async (id) => {
        try {
            // tofix
            const stringo = TV_URL + serie_id + SEASON + id +API_KEY+LANGUAGE
            console.log(stringo);
             const data = await axios.get(stringo)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    // seasons[] is an array of objects

    // const { poster_path, name, original_name, genres, episodes, sesons } = data
    // ! geners[] {id,name} 
    // ! episodes[] 
    return (<>
        <Dropdown
            label="Dropdown right start"
            placement="right-start"
        >

            {seasons &&
                seasons.map((item, index) => {
                    return (
                        <Dropdown.Item key={index} onClick={() => bringEpisodes(item.id)}>

                            {item.name}

                        </Dropdown.Item>
                    )
                })
            }

        </Dropdown>
        <MainGrid />
    </>)

}
