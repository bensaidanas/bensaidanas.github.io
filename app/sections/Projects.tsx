import Image from "next/image"
import AnimatedText from "../components/AnimatedText"
import Container from "../components/Container"
import { GitHub, NextJs } from "../components/Logos"
import projectImage from "../../public/RecipeHub Mockup.png"
import secondImage from "../../public/project.jpg"
import Link from "next/link"

const Projects = () => {
    return (
        <Container>
            <section className="w-full min-h-screen">
                <AnimatedText text="Projects" className="" />
                <div className="flex md:h-[60vh]  w-full items-center justify-center relative">
                    <div className="flex p-2 md:p-0 flex-col text-center md:text-start w-full items-center md:items-start justify-center z-10 gap-1 md:gap-4">
                        <div>
                            <h3 className="m-0 text-sm text-primary dark:text-primaryDark">Featured Project</h3>
                            <h2 className="m-0 text-2xl font-bold">RecipesHub</h2>
                        </div>
                        <div className="w-full md:max-w-[40vw] p-3 rounded-lg md:dark:bg-black md:bg-slate-500">
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus repudiandae ex eveniet quisquam veniam dolorem quaerat a aliquam doloremque error sapiente, vero, quo, ea cupiditate! Reiciendis non placeat a voluptates!
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 opacity-70">
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
                    <div className="absolute rounded-lg right-0 opacity-10 md:opacity-70 max-w-full md:max-w-[60%] max-h-full top-0 overflow-hidden">
                        <Image src={projectImage} alt={""} />
                    </div>
                </div>

                <div className="my-12" />

                <div className="flex md:h-[60vh]  w-full items-center justify-center relative">
                <div className="flex p-2 md:p-0 flex-col text-center md:text-end w-full items-center md:items-end justify-center z-10 gap-1 md:gap-4">
                        <div>
                            <h3 className="m-0 text-sm text-primary dark:text-primaryDark">Featured Project</h3>
                            <h2 className="m-0 text-2xl font-bold">RecipesHub</h2>
                        </div>
                        <div className="w-full md:max-w-[40vw] p-3 rounded-lg md:dark:bg-black md:bg-slate-500">
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus repudiandae ex eveniet quisquam veniam dolorem quaerat a aliquam doloremque error sapiente, vero, quo, ea cupiditate! Reiciendis non placeat a voluptates!
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 opacity-70">
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
                    <div className="absolute rounded-lg left-0 opacity-10 md:opacity-70 max-w-full md:max-w-[60%] max-h-full top-0 overflow-hidden">
                        <Image src={projectImage} alt={""} />
                    </div>
                </div>

                <div className="my-12" />

                <div className="flex md:h-[60vh]  w-full items-center justify-center relative">
                    <div className="flex p-2 md:p-0 flex-col text-center md:text-start w-full items-center md:items-start justify-center z-10 gap-1 md:gap-4">
                        <div>
                            <h3 className="m-0 text-sm text-primary dark:text-primaryDark">Featured Project</h3>
                            <h2 className="m-0 text-2xl font-bold">RecipesHub</h2>
                        </div>
                        <div className="w-full md:max-w-[40vw] p-3 rounded-lg md:dark:bg-black md:bg-slate-500">
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus repudiandae ex eveniet quisquam veniam dolorem quaerat a aliquam doloremque error sapiente, vero, quo, ea cupiditate! Reiciendis non placeat a voluptates!
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 opacity-70">
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
                    <div className="absolute rounded-lg right-0 opacity-10 md:opacity-70 max-w-full md:max-w-[60%] max-h-full top-0 overflow-hidden">
                        <Image src={projectImage} alt={""} />
                    </div>
                </div>


            </section>
            <section className="w-full min-h-screen my-8">
                <h1 className="text-center text-3xl font-bold my-8">
                    Other Noteworthy Projects
                </h1>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <NextJs className="flex justify-start !w-9 max-w-9 max-h-9 dark:fill-white fill-black" />
                            <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                        </div>
                        <h2 className="text-xl font-bold">
                            Iime To Have More Fun
                        </h2>
                        <p className="dark:text-white/70 text-black/70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis nemo natus atque quisquam beatae voluptate, officiis ipsam velit commodi ratione illo quae debitis iste culpa, doloremque harum. Quas, et?
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>Next.js 13</p>
                            <p>React 6</p>
                            <p>TailwindCSS</p>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <NextJs className="flex justify-start !w-9 max-w-9 max-h-9 dark:fill-white fill-black" />
                            <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                        </div>
                        <h2 className="text-xl font-bold">
                            Iime To Have More Fun
                        </h2>
                        <p className="dark:text-white/70 text-black/70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis nemo natus atque quisquam beatae voluptate, officiis ipsam velit commodi ratione illo quae debitis iste culpa, doloremque harum. Quas, et?
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>Next.js 13</p>
                            <p>React 6</p>
                            <p>TailwindCSS</p>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <NextJs className="flex justify-start !w-9 max-w-9 max-h-9 dark:fill-white fill-black" />
                            <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                        </div>
                        <h2 className="text-xl font-bold">
                            Iime To Have More Fun
                        </h2>
                        <p className="dark:text-white/70 text-black/70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis nemo natus atque quisquam beatae voluptate, officiis ipsam velit commodi ratione illo quae debitis iste culpa, doloremque harum. Quas, et?
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>Next.js 13</p>
                            <p>React 6</p>
                            <p>TailwindCSS</p>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <NextJs className="flex justify-start !w-9 max-w-9 max-h-9 dark:fill-white fill-black" />
                            <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                        </div>
                        <h2 className="text-xl font-bold">
                            Iime To Have More Fun
                        </h2>
                        <p className="dark:text-white/70 text-black/70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis nemo natus atque quisquam beatae voluptate, officiis ipsam velit commodi ratione illo quae debitis iste culpa, doloremque harum. Quas, et?
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>Next.js 13</p>
                            <p>React 6</p>
                            <p>TailwindCSS</p>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <NextJs className="flex justify-start !w-9 max-w-9 max-h-9 dark:fill-white fill-black" />
                            <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                        </div>
                        <h2 className="text-xl font-bold">
                            Iime To Have More Fun
                        </h2>
                        <p className="dark:text-white/70 text-black/70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis nemo natus atque quisquam beatae voluptate, officiis ipsam velit commodi ratione illo quae debitis iste culpa, doloremque harum. Quas, et?
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>Next.js 13</p>
                            <p>React 6</p>
                            <p>TailwindCSS</p>
                        </div>
                    </div>
                    <div className="flex flex-col min-h-full p-4 gap-3 dark:bg-black bg-white">
                        <div className="flex justify-between items-center">
                            <NextJs className="flex justify-start !w-9 max-w-9 max-h-9 dark:fill-white fill-black" />
                            <GitHub className="!w-7 max-w-7 max-h-7 dark:fill-white fill-black" />
                        </div>
                        <h2 className="text-xl font-bold">
                            Iime To Have More Fun
                        </h2>
                        <p className="dark:text-white/70 text-black/70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis nemo natus atque quisquam beatae voluptate, officiis ipsam velit commodi ratione illo quae debitis iste culpa, doloremque harum. Quas, et?
                        </p>
                        <div className="flex gap-2 dark:text-white/50 text-black/50 text-sm">
                            <p>Next.js 13</p>
                            <p>React 6</p>
                            <p>TailwindCSS</p>
                        </div>
                    </div>
                    
                    
                </div>
            </section>
        </Container>
    )
}

export default Projects