import Image from "next/image"
import AnimatedText from "../components/AnimatedText"
import Container from "../components/Container"
import { Android, DotNet, GitHub, JavaScript, NextJs, Python } from "../components/Logos"
import projectImage from "../../public/RecipeHub Mockup.png"
import anasGallery from "../../public/anas-gallery.png"
import secondImage from "../../public/portfolio-dark.png"
import thirdImage from "../../public/portfolio-light.png"
import Link from "next/link"
import {FiExternalLink} from "react-icons/fi";

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
                        <div className="w-full lg:max-w-[40vw] lg:p-3 rounded-lg md:dark:bg-black lg:bg-white">
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
                        <Link href="https://github.com/bensaidanas/recipeshub" target="_blank">
                            <GitHub className="!w-5 !h-5 md:w-7 md:h-7 fill-black dark:fill-white" />
                        </Link>
                    </div>
                    <div className="absolute rounded-lg   right-0 opacity-10 lg:opacity-70 max-w-full lg:max-w-[60%] max-h-full top-0 overflow-hidden">
                        <Image priority src={projectImage} alt={"RecipesHub"}  />
                    </div>
                </div>

                <div className="my-12" />

                <div className="flex lg:h-[60vh]  w-full items-center justify-center relative">
                    <div className="flex p-2 lg:p-0 flex-col text-center lg:text-end w-full items-center lg:items-end justify-center z-10 gap-1 lg:gap-4">
                        <div>
                            <h3 className="m-0 text-xs md:text-sm text-primary dark:text-primaryDark">Featured Project</h3>
                            <h2 className="m-0 text-xl md:text-2xl font-bold">My Personal Portfolio</h2>
                        </div>
                        <div className="w-full lg:max-w-[40vw] md:p-3 rounded-lg lg:dark:bg-black lg:bg-white">
                            <p className="text-xs md:text-lg">
                                This portfolio showcases my skills and experiences in the field of software development 
                                and networking technology. The design is simple yet elegant, with easy navigation to 
                                different sections. The purpose of this portfolio is to present my work and 
                                capabilities to potential employers or clients.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center text-xs md:text-[1rem] gap-2 md:gap-3 opacity-70">
                            <p>Next.js 13</p>
                            <p>React 18</p>
                            <p>TypeScript</p>
                            <p>TailWind CSS</p>
                            <p>Framer Motion</p>
                        </div>
                        <Link href="https://github.com/bensaidanas/bensaidanas.github.io" target="_blank">
                            <GitHub className="!w-5 !h-5 md:w-7 md:h-7 fill-black dark:fill-white" />
                        </Link>
                    </div>
                    <div className="absolute min-h-full lg:min-h-fit bg-black dark:hidden rounded-lg left-0 opacity-10 lg:opacity-70 max-w-full lg:max-w-[60%] max-h-full lg:top-[7%] overflow-hidden">
                        <Image priority src={secondImage} alt={"Anas Bensaid's Portoflio"} />
                    </div>
                    <div className="absolute min-h-full lg:min-h-fit bg-white hidden dark:block rounded-lg left-0 opacity-10 lg:opacity-70 max-w-full lg:max-w-[60%] max-h-full lg:top-[7%] overflow-hidden">
                        <Image priority src={thirdImage} alt={"Anas Bensaid's Portoflio"} />
                    </div>
                </div>

                <div className="my-12" />

                <div className="flex lg:h-[60vh]  w-full items-center justify-center relative">
                    <div className="flex p-2 lg:p-0 flex-col text-center lg:text-start w-full items-center lg:items-start justify-center z-10 gap-1 lg:gap-4">                    
                        <div>
                            <h3 className="m-0  text-xs md:text-sm text-primary dark:text-primaryDark">Featured Project</h3>
                            <h2 className="m-0 text-xl md:text-2xl font-bold">Anas Gallery</h2>
                        </div>
                        <div className="w-full lg:max-w-[40vw]  lg:p-3 lg:border-[1px] lg:border-black rounded-lg md:dark:bg-black lg:bg-white">
                            <p className="text-xs md:text-lg">
                                A visually stunning personal gallery for my AI art collection using Astro.js. This website showcases a captivating grid view, inviting visitors to explore and appreciate each unique artwork. With seamless navigation, smooth animations, and a clean design, the gallery offers an engaging and immersive experience.
                            </p>
                        </div>
                        <div className="flex flex-wrap text-xs md:text-[1rem] items-center justify-center gap-2 md:gap-3 opacity-70">
                            <p>Astro</p>
                            <p>React 18</p>
                            <p>TypeScript</p>
                            <p>TailwindCSS</p>
                            <p>Framer Motion</p>
                            <p>SVG</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Link href="https://github.com/bensaidanas/anas-art-collection" target="_blank">
                                <GitHub className="!w-5 !h-5 md:w-7 md:h-7 fill-black dark:fill-white" />
                            </Link>
                            <Link href="https://anas-art.vercel.app" target="_blank">
                                <FiExternalLink size={18} />
                            </Link>
                        </div>
                    </div>
                    <div className="absolute min-h-full lg:min-h-fit border-[1px] border-black bg-white  rounded-lg right-0 opacity-10 lg:opacity-80  max-w-full lg:max-w-[60%] max-h-full lg:top-[7%] overflow-hidden">
                        <Image priority src={anasGallery} alt={"Anas Gallery"}  />
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
                            <Android className="flex justify-start !w-9 max-w-9 max-h-9" />
                            <Link href="https://github.com/bensaidanas/wanderwise" target="_blank">
                                <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                            </Link>
                        </div>
                        <h2 className="text-xl font-bold min-h-[56px]">
                            WonderWise: Travel Explorer App
                        </h2>
                        <p className="dark:text-white/70 text-justify text-black/70 min-h-[192px]">
                            Travel Explorer App is a Java Android-based mobile application designed to provide users with 
                            a comprehensive guide to explore and discover various countries. With extensive information on 
                            hotels, restaurants, and places of interest, this app is a reliable companion for travelers seeking memorable adventures.
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>Java</p>
                            <p>Android</p>
                            <p>FireBase</p>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <Python className="flex justify-start !w-9 max-w-9 max-h-9" />
                            <Link href="https://github.com/bensaidanas/remove-bg" target="_blank">
                                <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                            </Link>
                        </div>
                        <h2 className="text-xl font-bold">
                            The Background Removal and Image Resizing
                        </h2>
                        <p className="dark:text-white/70 text-justify text-black/70 min-h-[192px]">
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
                            <JavaScript className="flex justify-start !w-9 max-w-9 max-h-9" />
                            <Link href="https://github.com/bensaidanas/Delivery-App" target="_blank">
                                <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                            </Link>
                        </div>
                        <h2 className="text-xl font-bold">
                            QuickDelivery - Efficient Delivery Web Page
                        </h2>
                        <p className="dark:text-white/70 text-justify text-black/70 min-h-[192px]">
                            QuickDelivery is a dynamic and user-friendly web application built using JavaScript and Sass, 
                            designed to streamline the delivery process and enhance the overall user experience. 
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>JavaScript ES6+</p>
                            <p>Sass</p>
                            <p>HTML</p>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <DotNet className="flex justify-start !w-9 max-w-9 max-h-9" />
                            <Link href="https://github.com/bensaidanas/movie-rental" target="_blank">
                                <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                            </Link>
                        </div>
                        <h2 className="text-xl font-bold">
                            RentalPro - Streamlined Video Rental Management Application
                        </h2>
                        <p className="dark:text-white/70 text-justify text-black/70 min-h-[192px]">
                            RentalPro is a comprehensive video rental management application developed using ASP.net and C#. 
                            Designed to simplify the rental process, RentalPro offers a user-friendly interface specifically 
                            tailored for cashiers, enabling them to efficiently manage and track rental videos in a store 
                            setting.
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>ASP.net Core 3+</p>
                            <p>SQL Server</p>
                            <p>Bootstrap 5+</p>
                        </div>
                    </div>    
                    
                </div>
            </section>
        </Container>
    )
}

export default Projects