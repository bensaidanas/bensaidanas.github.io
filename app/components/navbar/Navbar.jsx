"use client"

import React from 'react'
import { useCallback, useState, useRef, useEffect } from 'react';

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
    const [activeLink, setActiveLink] = useState("home");
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsTop(currentScrollPos <= 10);
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible, isTop]);

    

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            const skillsSection = document.getElementById('skills');
            const experienceSection = document.getElementById('experience');
            const educationSection = document.getElementById('education');
            const projectsSection = document.getElementById('projects');
            
            

            if (window.scrollY < aboutSection.offsetTop) {
                setActiveLink('');  
            } else if (window.scrollY >= aboutSection.offsetTop && window.scrollY < skillsSection.offsetTop) {
                setActiveLink('about');
                console.log("I'm about")
            } else if (window.scrollY >= skillsSection.offsetTop && window.scrollY < experienceSection.offsetTop) {
                setActiveLink('skills');
            } else if (window.scrollY >= experienceSection.offsetTop && window.scrollY < educationSection.offsetTop) {
                setActiveLink('experience');
            } else if (window.scrollY >= educationSection.offsetTop && window.scrollY < projectsSection.offsetTop) {
                setActiveLink('education');
            } else if (window.scrollY >= projectsSection.offsetTop) {
                setActiveLink('projects');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }, []);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);
    
    

    return (
        <div className={`w-full z-20 transition-all duration-300 ease-out fixed bg-light dark:bg-dark ${isTop ? "pt-3" : "py-1 shadow-md"}  ${visible ? 'top-0' : '-top-20'}`}>
            <div className="">
                <Container>
                    <div className='flex items-center justify-between  md:gap-0'>
                        <button onClick={toggleOpen} className="md:hidden flex-col justify-center items-center  sm:flex">
                            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1`} ></span>
                            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`}></span>
                        </button>
                        <Logo />
                        {isOpen && (
                            <div className="w-full min-h-screen items-center z-50 justify-center bg-light dark:bg-dark absolute top-0 left-0 flex flex-col">
                                <GrClose style={{color: "white"}} onClick={toggleOpen} className="absolute top-10 right-10 cursor-pointer" />
                                <Link onClick={toggleOpen} href="/" className={`${ activeLink === '' ? '' : '' } text-lg relative group`}>
                                    Home
                                    <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === '' ? "w-full" : "w-0"}`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#about" className={`${ activeLink === 'about' ? '' : '' } pt-4 text-lg relative group`}>
                                    About
                                    <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'about' ? "w-full" : "w-0"}`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#skills" className={`${ activeLink === 'skills' ? '' : '' } pt-4 text-lg relative group`}>
                                    Skills
                                    <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'skills' ? "w-full" : "w-0"}`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#experience" className={`${ activeLink === 'experience' ? '' : '' } pt-4 text-lg relative group`}>
                                    Experience
                                    <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'experience' ? "w-full" : "w-0"}`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#education" className={`${ activeLink === 'education' ? '' : '' } pt-4 text-lg relative group`}>
                                    Education
                                    <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'education' ? "w-full" : "w-0"}`}>&nbsp;</span>
                                </Link>
                                <Link onClick={toggleOpen} href="#projects" className={`${ activeLink === 'projects' ? '' : '' } pt-4 text-lg relative group`}>
                                    Projects
                                    <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'projects' ? "w-full" : "w-0"}`}>&nbsp;</span>
                                </Link>
                            </div>
                            )
                        }
                        {/* <Links /> */}
                        <div className="hidden md:flex justify-between items-center gap-[30px]">
                            <Link  href="/" className={`${ activeLink === '' ? '' : '' } text-lg relative group`}>
                                Home
                                <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === '' ? "w-full" : "w-0"}`}>&nbsp;</span>
                            </Link>
                            <Link  href="#about" className={`${ activeLink === 'about' ? '' : '' } text-lg relative group`}>
                                About
                                <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'about' ? "w-full" : "w-0"}`}>&nbsp;</span>
                            </Link>
                            <Link  href="#skills" className={`${ activeLink === 'skills' ? '' : '' } text-lg relative group`}>
                                Skills
                                <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'skills' ? "w-full" : "w-0"}`}>&nbsp;</span>
                            </Link>
                            <Link  href="#experience" className={`${ activeLink === 'experience' ? '' : '' } hidden lg:block  text-lg relative group`}>
                                Experience
                                <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'experience' ? "w-full" : "w-0"}`}>&nbsp;</span>
                            </Link>
                            <Link  href="#education" className={`${ activeLink === 'education' ? '' : '' } hidden lg:block text-lg relative group`}>
                                Education
                                <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'education' ? "w-full" : "w-0"}`}>&nbsp;</span>
                            </Link>
                            <Link  href="#projects" className={`${ activeLink === 'projects' ? '' : '' }  text-lg relative group`}>
                                Projects
                                <span className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${activeLink === 'projects' ? "w-full" : "w-0"}`}>&nbsp;</span>
                            </Link>
                        </div>

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