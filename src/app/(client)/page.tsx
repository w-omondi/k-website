import Image from "next/image";
import GetInTouch from "@/components/shared/contact/get-in-touch";
import HomeImage from "./home-image.svg"
import {services} from "@/app/(client)/services";
import ServiceCard from "@/components/shared/service-card";
import Head from "next/head";
import NavDesktop from "@/components/shared/navigation/nav-desktop";
import NavMobile from "@/components/shared/navigation/nav-mobile";
import MessageForm from "@/components/shared/contact/message-form";
import {Card, CardContent} from "@/components/ui/card";

export default function Home() {

    return (
        <>
            <div className="w-full z-10">
                <nav className="w-full flex flex-row items-center justify-between container py-4">
                    <Image
                        className="relative w-[100px] md:w-[200px] object-contain"
                        src="/k-full.svg"
                        alt="Klinfuture Logo"
                        width={200}
                        height={200}
                        priority
                    />

                    <div className={"w-1/2 hidden md:block"}><NavDesktop/></div>

                    <div className={`h-6 w-6 md:hidden`}><NavMobile/></div>

                </nav>
            </div>

            <main className="flex min-h-screen flex-col items-center container py-20 md:text-xl">

                <Head>
                    <title>About Us - Klinfuture</title>
                    <meta name="description" content="Learn more about Klinfuture and our services."/>
                </Head>

                <div className={`w-full flex flex-col md:flex-row gap-4 justify-center items-center min-h-[80vh]`}>

                    <div className={`w-full flex flex-col gap-4 items-center`}>
                        <Image
                            className="relative object-contain"
                            src={HomeImage}
                            alt="Klinfuture Logo"
                            width={400}
                            height={200}
                            priority
                        />
                    </div>

                    <div className={`w-full flex flex-col gap-10 md:items-start`}>
                        <p className={`text-2xl text-center md:text-start md:text-6xl font-bold text-slate-800`}>
                            Establish your online presence with confidence!
                        </p>
                        <GetInTouch/>
                    </div>
                </div>

                <div className={`w-full flex flex-col place-items-center space-y-10 py-10 min-h-screen`}
                     id={`about-us`}>

                    <h2 className={`text-4xl font-semibold  text-primary`}>About Us</h2>
                    <p className={"text-center"}>
                        At Klinfuture, we are passionate about crafting cutting-edge digital experiences that help
                        businesses thrive in the online world. With a commitment to innovation and excellence, we
                        offer a
                        comprehensive suite of services designed to meet all your web needs.
                    </p>

                    <h2 className={`text-4xl font-semibold  text-primary`}>Why Choose Us?</h2>

                    <ul className="list-disc pl-5 flex flex-col items-center gap-2">
                        <li><strong>Expert Team:</strong> Our team comprises seasoned professionals
                            with
                            extensive experience in web development, design, and hosting. We stay abreast of the
                            latest
                            industry trends to deliver innovative solutions.
                        </li>
                        <li><strong>Customer-Centric Approach:</strong> We prioritize your needs
                            and work
                            collaboratively to achieve your business goals. Your satisfaction is our top priority.
                        </li>
                        <li><strong>End-to-End Solutions:</strong> From conceptualizing your
                            website to
                            maintaining its performance, we offer end-to-end services that cover every aspect of
                            your online
                            presence.
                        </li>
                        <li><strong>Quality Assurance:</strong> We adhere to the highest standards
                            of
                            quality in all our projects, ensuring that you receive a product that exceeds your
                            expectations.
                        </li>
                    </ul>

                    <p className={"text-center"}>Join us at Klinfuture and let us help you navigate the digital
                        landscape
                        with ease
                        and confidence. Together, we can build a strong online presence that drives your business
                        forward.</p>

                </div>

                <div className={`w-full flex flex-col place-items-center space-y-10 py-5 min-h-screen`} id={"services"}>
                    <h2 className={`w-full text-4xl font-semibold  text-primary text-center`}>Our Services</h2>
                    <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-10"}>
                        {services.map(service => <ServiceCard key={service.title} {...service}/>)}
                    </div>
                </div>

                <div id={"contact-us"} className={`w-full flex flex-col justify-center items-center gap-10 py-5 min-h-screen`}>
                    <h2 className="text-4xl font-semibold  text-primary">Contact Us</h2>
                    <p className={"text-center"}>Ready to take your online presence to the next level? <br/> Get in touch with us today!</p>
                    <Card className={"w-full py-4 md:w-1/2"}>
                        <CardContent>
                            <MessageForm/>
                        </CardContent>
                    </Card>
                </div>

            </main>
        </>
    );
}
