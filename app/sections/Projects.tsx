import Image from "next/image"
import AnimatedText from "../components/AnimatedText"
import Container from "../components/Container"
import { DotNet, GitHub, JavaScript, NextJs, Python } from "../components/Logos"
import projectImage from "../../public/RecipeHub Mockup.png"
import secondImage from "../../public/personal-portfolio.png"
import thirdImage from "../../public/white-mode.png"
import Link from "next/link"

const Projects = () => {
    return (
        <Container>
            <section id="projects" className="w-full min-h-screen">
                <AnimatedText text="Projects" className="" />
                <div className="flex lg:h-[60vh]  w-full items-center justify-center relative">
                    <div className="flex p-2 lg:p-0 flex-col text-center lg:text-start w-full items-center lg:items-start justify-center z-10 gap-1 lg:gap-4">                    
                        <div>
                            <h3 className="m-0  text-xs md:text-sm text-primary dark:text-primaryDark">Featured Project</h3>
                            <h2 className="m-0 text-xl md:text-2xl font-bold">RecipesHub</h2>
                        </div>
                        <div className="w-full lg:max-w-[40vw] lg:p-3 rounded-lg md:dark:bg-black lg:bg-slate-500">
                            <p className="text-xs md:text-lg">
                                RecipesHub is a user-friendly mobile app that provides access to a variety of recipes 
                                from different categories and cuisines. It includes detailed information about each 
                                recipe, such as ingredients, cooking steps, and nutritional values. Users can also 
                                save their favorite recipes to access them offline.
                            </p>
                        </div>
                        <div className="flex flex-wrap text-xs md:text-[1rem] items-center justify-center gap-2 md:gap-3 opacity-70">
                            <p>Ionic 6</p>
                            <p>Angular 13</p>
                            <p>Node.js</p>
                            <p>Express</p>
                            <p>MongoDB</p>
                            <p>RestAPI</p>
                        </div>
                        <a href="google.com" target="_blank">
                            <GitHub className="!w-5 !h-5 md:w-7 md:h-7 fill-black dark:fill-white" />
                        </a>
                    </div>
                    <div className="absolute rounded-lg   right-0 opacity-10 lg:opacity-70 max-w-full lg:max-w-[60%] max-h-full top-0 overflow-hidden">
                        <Image src={projectImage} alt={"RecipesHub"}  />
                    </div>
                </div>

                <div className="my-12" />

                <div className="flex lg:h-[60vh]  w-full items-center justify-center relative">
                <div className="flex p-2 lg:p-0 flex-col text-center lg:text-end w-full items-center lg:items-end justify-center z-10 gap-1 lg:gap-4">
                        <div>
                            <h3 className="m-0 text-xs md:text-sm text-primary dark:text-primaryDark">Featured Project</h3>
                            <h2 className="m-0 text-xl md:text-2xl font-bold">My Personal Porfolio</h2>
                        </div>
                        <div className="w-full lg:max-w-[40vw] md:p-3 rounded-lg lg:dark:bg-black lg:bg-slate-500">
                            <p className="text-xs md:text-lg">
                                This portfolio showcases my skills and experiences in the field of software development 
                                and networking technology. The design is simple yet elegant, with easy navigation to 
                                different sections. The purpose of this portfolio is to present my work and 
                                capabilities to potential employers or clients.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center text-xs md:text-[1rem] gap-2 md:gap-3 opacity-70">
                            <p>Next.js 13</p>
                            <p>TypeScript</p>
                            <p>TailWind CSS</p>
                            <p>Framer Motion</p>
                            <p>Vercel</p>
                        </div>
                        <a href="google.com" target="_blank">
                            <GitHub className="!w-5 !h-5 md:w-7 md:h-7 fill-black dark:fill-white" />
                        </a>
                    </div>
                    <div className="absolute min-h-full lg:min-h-fit bg-black dark:hidden rounded-lg left-0 opacity-10 lg:opacity-70 max-w-full lg:max-w-[60%] max-h-full lg:top-[7%] overflow-hidden">
                        <Image src={secondImage} alt={"Anas Bensaid's Portoflio"} />
                    </div>
                    <div className="absolute min-h-full lg:min-h-fit bg-white hidden dark:block rounded-lg left-0 opacity-10 lg:opacity-70 max-w-full lg:max-w-[60%] max-h-full lg:top-[7%] overflow-hidden">
                        <Image src={thirdImage} alt={"Anas Bensaid's Portoflio"} />
                    </div>
                </div>
            </section>
            <section className="w-full min-h-screen my-8">
                <h1 className="text-center text-3xl font-bold my-8">
                    Other Noteworthy Projects
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <Python className="w-9 h-9" />
                            <Link href="https://github.com/bensaidanas/remove-bg" target="_blank">
                                <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                            </Link>
                        </div>
                        <h2 className="text-xl font-bold">
                            The Background Removal and Image Resizing
                        </h2>
                        <p className="dark:text-white/70 text-black/70 min-h-[192px]">
                            The Background Removal and Image Resizing Program is a powerful Python application 
                            designed to simplify the process of removing backgrounds from pictures and resizing 
                            them with ease. It empowers users to enhance their images by seamlessly isolating the 
                            subject and adjusting its dimensions according to their requirements.
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>Python</p>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <JavaScript className="w-9 max-w-9 max-h-9" />
                            <Link href="https://github.com/bensaidanas/Delivery-App" target="_blank">
                                <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                            </Link>
                        </div>
                        <h2 className="text-xl font-bold">
                            QuickDelivery - Efficient Delivery Web Page
                        </h2>
                        <p className="dark:text-white/70 text-black/70 min-h-[192px]">
                            QuickDelivery is a dynamic and user-friendly web application built using JavaScript and Sass, 
                            designed to streamline the delivery process and enhance the overall user experience. 
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>JavaScript</p>
                            <p>Sass</p>
                            <p>HTML</p>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <DotNet className="w-9" />
                            <Link href="https://github.com/bensaidanas/Delivery-App">
                                <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                            </Link>
                        </div>
                        <h2 className="text-xl font-bold">
                            RentalPro - Streamlined Video Rental Management Application
                        </h2>
                        <p className="dark:text-white/70 text-black/70 min-h-[192px]">
                            RentalPro is a comprehensive video rental management application developed using ASP.net and C#. 
                            Designed to simplify the rental process, RentalPro offers a user-friendly interface specifically 
                            tailored for cashiers, enabling them to efficiently manage and track rental videos in a store 
                            setting.
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>ASP.net Core 3</p>
                            <p>SQL Server</p>
                            <p>Bootstrap 4</p>
                        </div>
                    </div>
                
                </div>
            </section>
        </Container>
    )
}

export default Projects