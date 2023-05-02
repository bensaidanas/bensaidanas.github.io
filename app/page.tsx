import Image from 'next/image'
import homePic from '../public/owl.png'
import { Inter } from 'next/font/google'
import Container from './components/Container'
import Link from 'next/link'
import AnimatedText from './components/AnimatedText'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Section from './components/Section'
import Quote from './components/Quote'

const inter = Inter({ subsets: ['latin'] })

export default function Home() { 
  return (
    <>
      <main>
        <Container>
          <Section className="flex flex-col lg:flex-row justify-center items-center mt-4 md:mt-11 w-full">
            <div className="lg:w-1/2">
              <h3 className="m-0 text-center lg:text-start">
                Hi, my name is <span className="text-primary dark:text-primaryDark italic font-bold">Anas Bensaid</span>
              </h3>
              <AnimatedText 
                text="I Turn Vision Into Reality With Code And Design" 
                className=' !pt-0 !text-center lg:!text-left'
              />
              <p className='my-4 text-base text-center lg:text-left font-medium'>
                I’m a full-stack software engineer specializing in building (and occasionally designing) exceptional digital experiences.
              </p>
              <div className="flex flex-col gap-4 lg:flex-row items-center lg:self-start self-end mt-11 md:mt-11">
                  <Link  target={"_blank"} href="mailto:bensaidanas0@gmail.com"
                  className="flex items-center bg-dark dark:bg-light p-2.5 px-6 rounded-lg text-light dark:text-dark text-lg font-semibold hover:text-dark hover:dark:text-light hover:bg-light hover:dark:bg-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light"
                  >
                    Get In Touch
                  </Link>
                  <Link href="/anasbensaid.pdf" className="text-lg font-medium capitalize underline"  target={"_blank"} download={false}>
                    Resume
                  </Link>
              </div>
            </div>
            <div className="lg:w-1/2 hidden lg:flex justify-end">
              <Image src={homePic} alt="Owl" className="w-auto max-h-[85vh]" />
            </div>
          </Section>
        </Container>
      </main>
      <Quote text="Always Say Less Than Nessesary"/>
      <About />
      <Quote text="Do What You Love, Love What You Do"/>
      <Skills />
      <Quote text='"Ever Positive, Never Negative"'/>
      <Experience />
      <Quote text='"Work Smarter Not Harder"'/>
      <Education />
      <Quote text="Code Is Poetry"/>
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
