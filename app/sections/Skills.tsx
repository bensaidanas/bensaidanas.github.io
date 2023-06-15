import React from 'react'
import Container from '../components/Container'
import AnimatedText from '../components/AnimatedText'
import { Anaconda, Android, AndroidStudio, Angular, Bootstrap, CSS, CSharp, Canva, Dart, Docker, DotNet, Figma, FireBase, Flutter, GPT, Git, GitHub, HTML, Ionic, Java, JavaScript, MongoDB, MySQL, NextJs, NodeJs, Python, ReactLogo, RedHat, SQLServer, Sass, Slack, Spring, TailWindCSS, TypeScript, VSCode, VisualStudio } from '../components/Logos'

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
                            <div className="flex flex-col gap-1 items-center justify-between">
                                <Dart />
                                <p>Dart</p>
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
                                <Android />
                                <p>Android</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center justify-center">
                                <FireBase />
                                <p>Firebase</p>
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
                            <div className="flex flex-col gap-1 items-center justify-between">
                                <Flutter className='w-full' />
                                <p>Flutter</p>
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
                            <div className="flex flex-col gap-1 pt-1 items-center justify-between">
                                <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="iconify iconify--logos" width="70" height="70" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 257"><defs><linearGradient id="IconifyId1813088fe1fbc01fb466" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%"><stop offset="0%" stop-color="#41D1FF"></stop><stop offset="100%" stop-color="#BD34FE"></stop></linearGradient><linearGradient id="IconifyId1813088fe1fbc01fb467" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%"><stop offset="0%" stop-color="#FFEA83"></stop><stop offset="8.333%" stop-color="#FFDD35"></stop><stop offset="100%" stop-color="#FFA800"></stop></linearGradient></defs><path fill="url(#IconifyId1813088fe1fbc01fb466)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"></path><path fill="url(#IconifyId1813088fe1fbc01fb467)" d="M185.432.063L96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"></path></svg>
                                <p>Vite</p>
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