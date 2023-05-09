import React from 'react'
import Container from '../components/Container'
import AnimatedText from '../components/AnimatedText'
import { Anaconda, AndroidStudio, Angular, Bootstrap, CSS, CSharp, Canva, Docker, DotNet, Figma, GPT, Git, GitHub, HTML, Ionic, Java, JavaScript, MongoDB, MySQL, NextJs, NodeJs, Python, ReactLogo, RedHat, SQLServer, Sass, Slack, Spring, TailWindCSS, TypeScript, VSCode, VisualStudio } from '../components/Logos'

const Skills = () => {
    return (
        <Container>
            <section id="skills" className="w-full min-h-screen mb-12">
                <AnimatedText text="Skills" className="" />
                <div className="flex flex-col  justify-center gap-8">
                    <div className="flex flex-col items-center justify-center gap-3 relative">
                        <h3 className="md:text-[9rem] text-center md:absolute top-0 left-0 md:opacity-10 md:-z-1">Languages </h3>
                        <div className="grid grid-cols-3 text-xs md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-5 lg:gap-8">
                            <div className="flex flex-col gap-1 min-w-[70px] min-h-[70px] md:min-w-[80px] md:min-h-[80px] items-center justify-center">
                                <HTML />
                                <p>HTML 5</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <CSS />
                                <p>CSS 3</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <JavaScript />
                                <p>JavaScript ES6+</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <TypeScript />
                                <p>TypeScript</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Java />
                                <p>Java</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Python />
                                <p>Python 3</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <CSharp />
                                <p>C#</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <MySQL />
                                <p>MySQL</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <SQLServer className="dark:fill-white fill-black" />
                                <p>SQL Server</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <MongoDB />
                                <p>MongoDB</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 relative">
                        <h3 className="md:text-[9rem] text-center md:absolute top-0 right-0 md:opacity-10 md:-z-1">
                            Frameworks 
                        </h3>
                        <div className="grid grid-cols-3 text-xs md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-5 lg:gap-8">
                            <div className="flex flex-col gap-1 min-w-[70px] min-h-[70px] md:min-w-[80px] md:min-h-[80px] items-center justify-center">
                                <NextJs className="dark:fill-white fill-black" />
                                <p>Next.js 13</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <DotNet />
                                <p>.Net Core 3+</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <NodeJs />
                                <p>Node JS</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Spring />
                                <p>Spring 3+</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Bootstrap />
                                <p>Bootstrap 4+</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <TailWindCSS />
                                <p>TailWindCSS</p>
                            </div>
                            
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Angular />
                                <p>Angular 12+</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <ReactLogo />
                                <p>React 18</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Ionic />
                                <p>Ionic 6</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 relative">
                        <h3 className="md:text-[9rem] text-center md:absolute top-0 left-0 md:opacity-10 md:-z-1">
                            Tools 
                        </h3>
                        <div className="grid grid-cols-3 text-xs md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-5 lg:gap-8">
                            <div className="flex flex-col gap-1 min-w-[70px] min-h-[70px] md:min-w-[80px] md:min-h-[80px] items-center justify-center">
                                <Docker />
                                <p>Docker</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Git />
                                <p>Git</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <GitHub className="dark:fill-white fill-black" />
                                <p>GitHub</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <RedHat />
                                <p>RedHat 8</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Figma />
                                <p>Figma</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <VSCode />
                                <p>VS Code</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <VisualStudio />
                                <p className="text-xs">Visual Studio</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <AndroidStudio />
                                <p className="text-xs">Android Studio</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Canva />
                                <p>Canva</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Slack />
                                <p>Slack</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <Anaconda />
                                <p>Anaconda</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <GPT />
                                <p>GPT-3.5</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Skills