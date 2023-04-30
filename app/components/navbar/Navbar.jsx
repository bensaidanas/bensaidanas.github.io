"use client"

import React from 'react'
import { useCallback, useState } from 'react';
import Container from '../Container'
import Logo from './Logo'
import Links from './Links'
import { MoonIcon, SunIcon } from '../Icon'
import useThemeSwitcher from '../hooks/useThemeSwitcher'
import Link from 'next/link';
import {GrClose} from "react-icons/gr"

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);
    
    return (
        <div className='w-full z-10'>
            <div className="pt-4">
                <Container>
                    <div className='flex items-center justify-between  md:gap-0'>
                        <button onClick={toggleOpen} className="md:hidden flex-col justify-center items-center  sm:flex">
                            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5`} ></span>
                            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                        </button>
                        <Logo />
                        {isOpen && (
                            <div className="w-full min-h-screen items-center z-50 justify-center bg-light dark:bg-dark absolute top-0 left-0 flex flex-col">
                                <GrClose style={{color: "white"}} onClick={toggleOpen} className="absolute top-10 right-10 cursor-pointer" />
                                <Link onClick={toggleOpen} href="/" className="p-4 text-lg">
                                    Home
                                    <span className={`h-[1px] inline-block w-full bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#about" className="p-4 text-lg">
                                    About
                                    <span className={`h-[1px] inline-block w-full bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#skills" className="p-4 text-lg">
                                    Skills
                                    <span className={`h-[1px] inline-block w-full bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#experience" className="p-4 text-lg">
                                    Experience
                                    <span className={`h-[1px] inline-block w-full bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#education" className="p-4 text-lg">
                                    Education
                                    <span className={`h-[1px] inline-block w-full bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#projects" className="p-4 text-lg">
                                    Projects
                                    <span className={`h-[1px] inline-block w-full bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>&nbsp;</span>
                                </Link>
                            </div>
                            )
                        }
                        <Links />
                        <button className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`} onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                            {
                                mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                            }
                        </button>
                    </div>
                </Container>
            </div>
        </div> 
    )
}

export default Navbar