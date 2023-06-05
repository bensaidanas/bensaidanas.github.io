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
    details?: string;
    outcome?: string;
}

const Details: React.FC<DetailsProps> = ({position, company, companyLink, time, address, work, details, outcome}) => {
    const ref = useRef(null);
    
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type: "spring"}}>
                <h3 className="capitalize font-bold text-lg md:text-2xl">
                    {position} &nbsp; <a href={companyLink} className="text-primaryDark capitalize" target="_blank">@{company}</a>
                </h3>
                <span className="capitalize text-xs font-medium text-dark/75 dark:text-light/75">
                    {time} | {address}
                </span>
                <p className='font-medium text-sm text-justify md:text-lg w-full'>
                    {work}
                </p>
                <p className='font-medium py-4 text-justify text-sm md:text-lg w-full'>
                    {details}
                </p>
                <p className='font-medium text-sm text-justify md:text-lg w-full'>
                    {outcome}
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
                            position="Intern - Software Engineer"
                            company="INGECYS TELECOME"
                            companyLink="www.ingecystelecom.com"
                            time="June 2022 - August 2022"
                            address="Hay Riad, Rabat Morocco"
                            work="As a software engineer intern, I gained valuable experience working in a professional 
                            environment and collaborating with a team to develop a material management system. 
                            Using Spring Boot, Angular 13, and MySQL, I learned how to build a scalable, efficient 
                            application from scratch, and gained a deep understanding of the Spring Boot framework 
                            and Angular 13."
                            details='During my internship, I worked closely with my colleagues to develop new features, 
                            troubleshoot issues, and improve the overall performance of the application. This experience 
                            taught me the importance of effective communication and teamwork, as well as how to manage my 
                            time effectively to meet project deadlines.'
                            outcome="I'm proud of the work I accomplished during my internship, and I'm grateful for 
                            the skills and experience I gained. I'm excited to apply what I learned to new projects 
                            in the future, and to continue to grow and develop as a software engineer."
                        />
                        <Details 
                            position="Intern - Network Support"
                            company="SNRT - Rabat"
                            companyLink="http://snrt.ma"
                            time="March 2020 - August 2020"
                            address="Hassan, Rabat Morocco"
                            work="My previous internship at SNRT provided me with hands-on experience in the networking 
                            industry. During my time there, I worked with switches, servers, IP phones, network 
                            printers, and learned how to diagnose and repair various network-related issues. I also 
                            gained experience in network security and helped to ensure that SNRT's network was secure 
                            and well-protected."
                            details="As a project, I had the opportunity to install a VoIP server for the company. This allowed me to gain a 
                            deep understanding of VoIP technology and its application in a business setting. 
                            I also learned about network administration, server installation and configuration, 
                            and how to work with a variety of different hardware and software components."
                            outcome="Overall, this internship provided me with a broad range of skills and experience that have been 
                            invaluable in my career as a software engineer. I'm grateful for the opportunity to have worked with 
                            such a respected company in the industry, and I'm excited to continue building on what I learned 
                            during my time there."
                        />
                    </ul>
                </div>
            </section>
        </Container>
    )
}

export default Experience