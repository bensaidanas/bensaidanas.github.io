import AnimatedText from "../components/AnimatedText"
import Container from "../components/Container"
import Image from 'next/image'
import profilePic from '../../public/anas.jpg'


const About = () => {
    return (
        <Container>
            <section className="w-full min-h-screen py-1">
                <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
                <div className="flex px-12 gap-12">
                    <div className="w-1/4 relative  rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8">
                        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            {/* <Image src={profilePic} alt="anas bensaid" className="w-full h-auto rounded-2xl" /> */}
                        <Image src={profilePic} alt="Irelia" className="w-auto max-h-[85vh] rounded-2xl" /> 
                    </div>
                    <div className="w-2/4 ">
                        <h2 className="text-2xl font-bold">About</h2>
                        <p className='my-8 text-base text-center md:text-left font-medium'>As a skilled full-stack developer, I’m dedicated to turning ideas into innovative web applications, Explore my latest projects and articles, showcasing my experience in Next Js and web development.</p>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default About