import Link from "next/link"
import AnimatedText from "../components/AnimatedText"
import Container from "../components/Container"


const Contact = () => {
    return (
        <Container>
            <section id="contact" className="w-full min-h-[80vh]">
                    <div className="flex flex-col items-center justify-center gap-8 md:gap-11">
                        <AnimatedText text="Get In Touch" className="" />
                        <p className="w-[90%] md:w-[40%] text-center">
                            Thank you for taking the time to view my portfolio! If you have any questions, comments, or opportunities you would like to discuss, please feel free to contact me using the button below.
                        </p>
                        <p className="w-[90%] md:w-[40%] py-4 text-center">
                            I am currently seeking job opportunities as a software engineer, and I am also available for freelance work. If you are interested in working together, please don&apos;t hesitate to reach out.
                        </p>
                        <Link  target={"_blank"} href="mailto:bensaidanas0@gmail.com"
                            className="flex items-center justify-center bg-dark dark:bg-light p-2.5 px-6 rounded-lg text-light dark:text-dark text-lg font-semibold hover:text-dark hover:dark:text-light hover:bg-light hover:dark:bg-dark border-2 border-solid border-transparent hover:border-dark hover:dark:border-light"
                        >
                            Say Hi!
                        </Link>
                    </div>
            </section>
        </Container>
    )
}

export default Contact