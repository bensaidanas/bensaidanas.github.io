import AnimatedText from "../components/AnimatedText"
import Container from "../components/Container"
import Image from 'next/image'
import profilePic from '../../public/anas.jpg'


const About = () => {
    return (
        <Container>
            <section className="w-full min-h-screen py-1">
                <AnimatedText text="Passion Fuels Purpose!" className="" />
                <div className="flex flex-col items-center md:items-start py-12 md:flex-row md:px-12 gap-4 md:gap-12">
                    <div className="md:w-1/4  w-[75%] order-2 md:order-1 relative">
                        <div className="absolute -bottom-5 -left-5 -z-10 w-[115%] md:w-[100%] h-[100%]  bg-dark dark:bg-light" />
                        <Image src={profilePic} alt="Irelia" className="w-auto max-h-[85vh]" /> 
                    </div>
                    <div className="md:w-2/4  order-1 md:order-2">
                        <h2 className="text-3xl text-center md:text-start hidden md:block font-bold">About</h2>
                        <p className='my-6 text-base text-center md:text-left font-medium'>As a skilled full-stack developer, I’m dedicated to turning ideas into innovative web applications, Explore my latest projects and articles, showcasing my experience in Next Js and web development.</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default About