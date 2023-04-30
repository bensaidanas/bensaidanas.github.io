import React from 'react'
import Container from '../components/Container'
import AnimatedText from '../components/AnimatedText'
import { Anaconda, AndroidStudio, Angular, Bootstrap, CSS, CSharp, Canva, Docker, DotNet, Figma, Flask, GPT, Git, GitHub, HTML, Ionic, Java, JavaScript, MongoDB, MySQL, NextJs, NodeJs, Python, ReactLogo, RedHat, SQLServer, Sass, Spring, TailWindCSS, TypeScript, VSCode, VisualStudio } from '../components/Logos'

const Skills = () => {
    return (
        <Container>
            <section id="skills" className="w-full min-h-screen mb-12">
                <AnimatedText text="Skills" className="" />
                <div className="flex items-center justify-center text-xs">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-12">
                        <h1 className="inline-block col-span-4 md:col-span-8 w-full  text-dark dark:text-light font-bold capitalize text-3xl">
                            Languages
                        </h1>
                        <div className="flex flex-col items-center justify-center">
                            <HTML />
                            <p>HTML 5</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <CSS />
                            <p>CSS 3</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <JavaScript />
                            <p>JavaScript</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <TypeScript />
                            <p>TypeScript</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Java />
                            <p>Java</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Python />
                            <p>Python 3</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <CSharp />
                            <p>C#</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <MySQL />
                            <p>MySQL</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <SQLServer className="dark:fill-white fill-black" />
                            <p>SQL Server</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <MongoDB />
                            <p>MongoDB</p>
                        </div>
                        
                        <h1 className="inline-block col-span-4 md:col-span-8 w-full  text-dark dark:text-light font-bold capitalize text-3xl">
                            Frameworks & Libraries:
                        </h1>
                        <div className="flex flex-col items-center justify-center">
                            <NextJs className="dark:fill-white fill-black" />
                            <p>Next.js 13</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <DotNet />
                            <p>.Net Core</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <NodeJs />
                            <p>Node JS</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Spring />
                            <p>Spring</p>
                        </div>
                        
                        {/* <div className="flex flex-col items-center justify-center">
                            <Sass />
                            <p>Sass</p>
                        </div> */}

                        <div className="flex flex-col items-center justify-center">
                            <Bootstrap />
                            <p>Bootstrap 5</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <TailWindCSS />
                            <p>TailWindCSS</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center">
                            <Angular />
                            <p>Angular 13</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <ReactLogo />
                            <p>React 6</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Ionic />
                            <p>Ionic 6</p>
                        </div>
                        <h1 className="inline-block col-span-4 md:col-span-8 w-full text-dark dark:text-light font-bold capitalize text-3xl">
                            Technologies:
                        </h1>
                        <div className="flex flex-col items-center justify-center">
                            <Docker />
                            <p>Docker</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Git />
                            <p>Git</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <GitHub className="dark:fill-white fill-black" />
                            <p>GitHub</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <RedHat />
                            <p>RedHat 8</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Figma />
                            <p>Figma</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <VSCode />
                            <p>VS Code</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <VisualStudio />
                            <p className="text-xs">Visual Studio</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <AndroidStudio />
                            <p className="text-xs">Android Studio</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Canva />
                            <p>Canva</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Flask />
                            <p>Flask</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <Anaconda />
                            <p>Anaconda</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <GPT />
                            <p>GPT-3.5</p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Skills