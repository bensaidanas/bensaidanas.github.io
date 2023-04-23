"use client"

import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Links from './Links'
import { MoonIcon, SunIcon } from '../Icon'
import useThemeSwitcher from '../hooks/useThemeSwitcher'

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    
    return (
        <div className='w-full z-10'>
            <div className="pt-4">
                <Container>
                    <div className='flex items-center justify-between  md:gap-0'>
                        <button className="md:hidden flex-col justify-center items-center  sm:flex">
                            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5`} ></span>
                            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                        </button>
                        <Logo />
                        <Links />
                        <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`} onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                            {
                                mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                            }
                        </button>
                        {/* <button>
                            <MoonIcon className={"fill-black"} />
                        </button> */}
                    </div>
                </Container>
            </div>
        </div> 
    )
}

export default Navbar