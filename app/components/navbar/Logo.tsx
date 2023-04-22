'use client';
import { motion } from "framer-motion";
import { Courgette } from "next/font/google"
import Link from "next/link";
import { useRouter } from "next/navigation"

const MotionLink = motion(Link);


const font = Courgette({
    weight: "400",
    preload: false,
})

const Logo = () => {
    const router = useRouter();
    return (
        <div>
            <MotionLink href="/" 
                className={`w-16 h-16 border border-solid border-transparent dark:border-light bg-black text-white flex items-center justify-center rounded-full text-xl font-bold ${font.className}`}
                whileHover={{
                    backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
                    transition:{duration: 1, repeat: Infinity}
                }}
                >
                Anas
            </MotionLink>
        </div>
        // <h1 className={`cursor-pointer  font-bold text-2xl ${font.className}`}>Anas</h1>
    )
}

export default Logo