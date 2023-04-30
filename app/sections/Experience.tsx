'use client'

import React, { useRef } from 'react'
import Container from '../components/Container'
import AnimatedText from '../components/AnimatedText'
import LiIcon from '../components/LiIcon';
import { motion, useScroll } from 'framer-motion';

interface DetailsProps {
    position: string
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
}

const Details: React.FC<DetailsProps> = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type: "spring"}}>
                <h3 className="capitalize font-bold text-lg md:text-2xl">
                    {position} &nbsp; <a href={companyLink} className="text-primary capitalize" target="_blank">@ {company}</a>
                </h3>
                <span className="capitalize text-xs font-medium text-dark/75 dark:text-light/75">
                    {time} | {address}
                </span>
                <p className='font-medium text-sm md:text-lg w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <Container>
            <section id="experience" className="w-full min-h-screen">
                <AnimatedText text="Experience" className="" />
                <div ref={ref} className=" md:mx-auto relative w-full xl:w-[75%]">
                <motion.div
                    style={{scaleY: scrollYProgress}}
                    className="absolute left-[20px]  md:left-[30px] lg:left-9 top-1 w-[2px] lg:w-[4px] h-full bg-dark dark:bg-light origin-top" />
                <ul className="w-full flex flex-col items-start justify-between md:ml-4 ml-2">
                    <Details 
                        position="Software Engineer"
                        company="Google"
                        companyLink="www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                    <Details 
                        position="Software Engineer"
                        company="Google"
                        companyLink="www.google.com"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                    />
                </ul>
            </div>
            </section>
        </Container>
    )
}

export default Experience