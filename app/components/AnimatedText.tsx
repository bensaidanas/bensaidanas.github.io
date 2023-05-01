"use client"

import { motion } from 'framer-motion'
import React from 'react'

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}


const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

interface AnimatedTextProps {
    text: string;
    className: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({text, className=""}) => {
    const words = text.split(" ");
    return (
        <div className='w-full mx-auto pb-4 pt-2 flex items-center justify-center text-center overflow-hidden'>
            <motion.h1 
                className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-6xl md:text-8xl ${className}`}
                variants={quote}
                initial="initial"
                animate="animate">
                {words.map((word, index) => 
                    <React.Fragment key={word + '-' + index}>
                        <motion.span className="inline-block"
                            variants={singleWord}
                            >
                                {word}
                        </motion.span>
                        {index < words.length - 1 && <>&nbsp;</>}
                    </React.Fragment>
                )}
            </motion.h1>
        </div>
    )
}

export default AnimatedText