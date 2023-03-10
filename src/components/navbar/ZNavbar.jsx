
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, DarkThemeToggle, Navbar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Search } from '../search/Search';

export const ZNavbar = () => {
    const [searchModal, setSearchModal] = useState(false);
    const location = useLocation();
    const closeIt = () => {
        setSearchModal(!searchModal)
    }

    useEffect(() => {
        console.log(location);
    }, [location]);
    return (
        <div className='capitalize  '>
            <Search shownState={searchModal} closeModal={closeIt} />
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand >
                    <Link to={'/' }>
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white mr-2">
                            VODU
                        </span>
                    </Link>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    <Button gradientMonochrome={'info'}
                        onClick={() => setSearchModal(!searchModal)}
                    >
                        <span className="hidden lg:block">Search</span> <i className="lg:pl-5  fa-solid fa-magnifying-glass"></i>

                    </Button>
                    <div className="ml-5">
                        <DarkThemeToggle />
                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link


                        active={location.pathname === '/movies'}
                    >
                        <Link to={
                            '/movies'
                        }>
                            Movies
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link
                        active={location.pathname === '/tvs'}
                    >
                        <Link to={
                            '/tvs'
                        }>
                            TV Shows
                        </Link>
                    </Navbar.Link>
                    {/* <Navbar.Link
                     active={location.pathname === '/series'}>
                    <Link to={
                            '/tv'
                        }>
                        genres
                        </Link>
                    </Navbar.Link> */}


                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
