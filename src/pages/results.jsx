import { Card, Pagination } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MainGrid } from '../components/MainGrid/MainGrid'
import { ResGrid } from '../components/MainGrid/ResGrid'
import { search } from '../search/search'

export const Results = () => {
    const [res, setRes] = React.useState([])
    const [totalPages, setTotalPages] = React.useState(1)
    const [page, setPage] = React.useState(1)
    const params = useParams() ;


    const depackRes = async (q,page) => {
        const data = await search(q,page)
        setRes(data.results)
        setTotalPages(data.total_pages)
        setPage(data.page)
    }

    useEffect(() => {
        depackRes(params.search,page)

    }, [page,params.search]);

    return (
        <div className="container min-h-[90vh] ">
            
            <h2 className=' capitalize  text-2xl font-thin dark:text-white py-5'>Results :</h2>
            <div className='flex justify-center'>
            <ResGrid res={res} />
            </div>

            <div className='flex justify-center m-5'>
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={(page)=>depackRes('suits',page)}
                    
                />
            </div>
        </div>

    )
}
