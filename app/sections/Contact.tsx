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
                            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
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