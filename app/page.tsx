import Image from 'next/image'
import { Inter } from 'next/font/google'
import Container from './components/Container'
import homePic from '../public/home.jpg'
import Link from 'next/link'
import AnimatedText from './components/AnimatedText'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="w-full min-h-[100vh - 96px] flex items-center">
      <Container>
        <div className="flex flex-col  md:flex-row  items-center  w-full">
          <div className="md:w-1/2 order-2 md:order-1">
            {/* <h1 className="text-[62px] leading-[65px] font-bold">Turning Vision Into Reality With Code And Design.</h1> */}
            <AnimatedText text="Turning Vision Into Reality With Code And Design" className='!text-5xl !text-center md:!text-left'/>
            <p className='my-4 text-base text-center md:text-left font-medium'>As a skilled full-stack developer, I’m dedicated to turning ideas into innovative web applications, Explore my latest projects and articles, showcasing my experience in Next Js and web development.</p>
            <div className="flex flex-col gap-4 md:flex-row items-center md:self-start my-4">
                <Link  target={"_blank"} href="mailto:bensaidanas0@gmail.com"
                className="flex items-center bg-dark dark:bg-light p-2.5 px-6 rounded-lg text-light dark:text-dark text-lg font-semibold hover:text-dark hover:dark:text-light hover:bg-light hover:dark:bg-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light"
                >
                  Get In Touch
                </Link>
                <Link href="/dummy.pdf" className="md:ml-4 text-lg font-medium capitalize underline"  target={"_blank"} download={true}>
                  Resume
                </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex order-1 md:order-2 justify-end">
            <Image src={homePic} alt="Irelia" className="w-auto max-h-[85vh]" />
          </div>
        </div>
      </Container>
    </main>
  )
}
