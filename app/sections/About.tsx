import AnimatedText from "../components/AnimatedText"
import Container from "../components/Container"
import Image from 'next/image'
import profilePic from '../../public/anas.jpg'
import Link from "next/link"
import { GitHub, LinkedIn } from "../components/Logos"


const About = () => {
    return (
        <Container>
            <section id="about" className="w-full min-h-screen py-1">
                <div className="flex flex-col items-center lg:items-start py-12 lg:flex-row lg:px-12 gap-4 md:gap-12">
                    <div className="lg:w-1/4 md:w-2/4  w-[75%] order-2 lg:order-1 relative">
                        <div className="absolute -bottom-5 -left-5 -z-10 w-[100%] h-[100%]  bg-dark dark:bg-light" />
                        <Image src={profilePic} alt="Mr. Anas Bensaid" className="w-auto max-h-[85vh]" /> 
                    </div>
                    
                    <div className="lg:w-2/4  order-1 lg:order-2">
                        <h2 className="text-3xl text-center lg:text-start font-bold">About Me</h2>
                        <p className='my-6 text-base text-center lg:text-left font-medium'>
                            Hello! my name is Anas, as a fourth-year software engineering student at ISMAGI in Rabat, 
                            I am passionate about developing innovative applications that bring value to users. 
                            With experience in both front-end and back-end development, 
                            I am capable of building full-stack applications from scratch with a focus on 
                            providing the best user experience possible.
                        </p>
                        <p className='my-6 text-base text-center lg:text-left font-medium'>
                            Moving forward, my goal is to work on complex applications with expert teams that will 
                            help me take my skills to the next level. I am dedicated to delivering the best possible 
                            apps to my clients and users, and I am excited about the opportunities that lie ahead.
                        </p>
                    </div>

                    <div className="lg:w-1/4 self-center my-8 lg:my-0 order-3 w-[75%] relative">
                        <div className="flex lg:flex-col justify-center lg:justify-end items-center">
                            <Link href={"https://www.linkedin.com/in/anassbensaid/"} target="_blanck">
                                <LinkedIn className="dark:fill-white fill-black m-4 w-[60px] max-w-[60px]" />
                            </Link>
                            <Link href={"https://github.com/bensaidanas"} target="_blanck">
                                <GitHub className="dark:fill-white  fill-black my-4 min-w-[60px] max-w-[60px]" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default About