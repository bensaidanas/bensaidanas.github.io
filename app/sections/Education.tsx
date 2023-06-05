"use client"

import React, { useRef } from 'react'
import Container from '../components/Container'
import AnimatedText from '../components/AnimatedText'
import LiIcon from '../components/LiIcon';
import { motion, useScroll } from 'framer-motion';

interface DetailsProps {
    type: string;
    time: string;
    place: string;
    info: string;
    details?: string
}

const Details: React.FC<DetailsProps> = ({type, time, place, info, details}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type: "spring"}}>
                <h3 className="capitalize font-bold text-lg md:text-2xl">
                    {type}
                </h3>
                <span className="capitalize text-xs font-medium text-dark/75 dark:text-light/75">
                    {time} | {place}
                </span>
                <p className='font-medium text-sm text-justify md:text-lg w-full'>
                    {info}
                </p>
                <p className='font-medium pt-4 text-justify text-sm md:text-lg w-full'>
                    {details}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <Container>
            <section id="education" className="w-full min-h-screen">
                <AnimatedText text="Education" className="" />
                <div ref={ref} className="md:mx-auto relative w-full xl:w-[75%]">
                    <motion.div
                        style={{scaleY: scrollYProgress}}
                        className="absolute left-[20px]  md:left-[30px] lg:left-9 top-1 w-[2px] lg:w-[4px] h-full bg-dark dark:bg-light origin-top" />
                        <ul className="w-full flex flex-col items-start justify-between md:ml-4 ml-2">
                            <Details 
                                type="Software Engineer Degree"
                                time="October 2021 - 2024"
                                place="Riad Al Andalos, Hay Riad Rabat, Morocco"
                                info="I am currently enrolled in the engineering program at ISMAGI. During my first 
                                year (CI 1), I gained knowledge in several programming languages including Java, C#, 
                                PHP, Python, and familiarized myself with MySQL and SQL Server, ASP .net, OPP, MVC 
                                pattern, and Cryptography. In my second year (CI 2), I learned about IONIC 6, Angular 13, 
                                BI, Math Machine Learning, Data Analysis, DevOps, Cloud Computing, and Virtualization, 
                                as well as R language, NLP, and Java Android. Although I still have one more year to 
                                graduate and become a software engineer, I have acquired a strong foundation in programming, 
                                software development, and technology that will help me excel in the industry."
                            />
                            <Details 
                                type="Specialized Technician in computer networking"
                                time="Novemenber 2018 - October 2020"
                                place="OFPPT, Hay Riad Rabat, Morocco"
                                info="
                                During my two-year program at the OFPPT school, I majored in Networking Technician and 
                                acquired a solid educational background in networking technology. The program covered 
                                computer components, and I obtained valuable skills in networking technology by 
                                studying for CompTIA A+ and Network+ certifications. I also learned about CCNA, 
                                CCNA security, and cryptography algorithms, as well as programming languages such as 
                                C++, Python, HTML, and CSS, and SGBD. These studies gave me a well-rounded 
                                understanding of software development and how it integrates with networking technology."
                                details="Additionally, I completed coursework on Windows Server 2019, 
                                which included learning how to configure an Active Directory, DNS, DHCP, VPN, Apache 
                                Server, SSH, and other related technologies. Although I did not learn about installing 
                                a Hadoop server in this program, I gained practical experience with this technology by 
                                installing one with different nodes for my graduation project, which further expanded 
                                my knowledge and skills in networking technology."
                            />
                        </ul>
                </div>
            </section>
        </Container>
    )
}

export default Education