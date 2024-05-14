import Image from "next/image";
import GetInTouch from "@/components/shared/contact/get-in-touch";
import HomeImage from "./home-image.svg"
import ServiceContainer from "@/components/shared/contact/service-container";
import {MdMenu} from "react-icons/md";
import {services} from "@/app/(client)/services";


export default function Home() {

    return (
        <>
            <div className="w-full">
                <nav className="w-full flex flex-row items-center justify-between container py-4">
                    <Image
                        className="relative w-[100px] md:w-[200px] object-contain"
                        src="/k-full.svg"
                        alt="Klinfuture Logo"
                        width={200}
                        height={200}
                        priority
                    />

                    <ul className={"w-1/2 hidden md:flex flex-row items-center justify-center gap-6 font-bold text-slate-800"}>
                        <li>About</li>
                        <li>Services</li>
                    </ul>

                    <MdMenu className={`h-6 w-6 md:hidden`}/>

                </nav>
            </div>

            <main className="flex min-h-screen flex-col gap-10 items-center container">

                <div className={`w-full flex flex-col md:flex-row gap-4 justify-center items-center`}>

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

                    <div className={`w-full flex flex-col gap-10 md:items-start p-5`}>
                        <p className={`text-2xl text-center md:text-start md:text-4xl font-bold text-slate-800`}>
                            Establish your online presence with confidence!
                        </p>
                        <GetInTouch/>
                    </div>
                </div>

                <div className={`w-full flex flex-col gap-10 items-center mb-20`}>
                    <h1 className={`font-extrabold text-center text-3xl md:text-4xl text-primary`}>Our Services</h1>
                    <div className={"w-full grid grid-cols-1 md:grid-cols-2 gap-4"}>
                        {services.map(service => <ServiceContainer key={service.title} {...service}/>)}
                    </div>
                </div>

            </main>
        </>
    );
}
