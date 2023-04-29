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
}

const Details: React.FC<DetailsProps> = ({type, time, place, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref} />
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type: "spring"}}>
                <h3 className="capitalize font-bold text-2xl">
                    {type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                    {time} | {place}
                </span>
                <p className='font-medium w-full'>
                    {info}
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
            <section className="w-full min-h-screen">
                <AnimatedText text="Education" className="mb-16" />
                <div ref={ref} className="w-[75%] mx-auto relative">
                    <motion.div
                        style={{scaleY: scrollYProgress}}
                        className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top" />
                        <ul className="w-full flex flex-col items-start justify-between ml-4">
                            <Details 
                                type="Bachelor of Science In Computer Science"
                                time="2016-2020"
                                place="Massachusetts Institue Of Technology (MIT)"
                                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                                Intelligence."
                            />
                            <Details 
                                type="Bachelor of Science In Computer Science"
                                time="2016-2020"
                                place="Massachusetts Institue Of Technology (MIT)"
                                info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                                Intelligence."
                            />
                        </ul>
                </div>
            </section>
        </Container>
    )
}

export default Education