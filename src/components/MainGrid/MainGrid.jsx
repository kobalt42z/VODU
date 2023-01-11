import React from 'react'
import { MovieCard } from '../movieCard/MovieCard'

export const MainGrid = () => {
    return (<>
        <h2 className=' capitalize font-bold'>uplowded last :</h2>
        <div className="grid  justify-items-center
        grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5
         
          gap-y-5 grid-flow-row p-5">
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
                <MovieCard imgUrl={'https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg'} title="hello world" alt="hello world" />
        </div>

    </>)
}
