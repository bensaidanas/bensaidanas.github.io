"use client"

import React, { useEffect, useState } from 'react'
import Section from './Section'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation,  } from 'framer-motion';
import { Courgette } from "next/font/google"
import Container from './Container';

const font = Courgette({
    weight: "400",
    preload: false,
})

interface QuoteProps {
    text: string;
    author?: string;
}

const Quote: React.FC<QuoteProps> = ({text}) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
        setShouldAnimate(true);
        }
    }, [inView]);
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };
    return (
        <Container>
            <Section  className="flex items-center justify-center pb-4">
                <div ref={ref}>
                    <motion.h2
                        className={`${font.className} text-4xl md:text-6xl lg:text-8xl text-center font-bold`}
                        initial="hidden"
                        animate={shouldAnimate ? "visible" : "hidden"}
                        variants={variants}
                    >
                        {text}
                    </motion.h2>
                </div>
            </Section>
        </Container>
    )
}

export default Quote