// pages/about.js
import Head from 'next/head';

export default function About() {
    return (
        <div>
            <Head>
                <title>About Us - Klinfuture</title>
                <meta name="description" content="Learn more about Klinfuture and our services."/>
            </Head>
            <main className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="mb-4">Welcome to Klinfuture!</p>
                <p className="mb-4">
                    At Klinfuture, we are passionate about crafting cutting-edge digital experiences that help
                    businesses thrive in the online world. With a commitment to innovation and excellence, we offer a
                    comprehensive suite of services designed to meet all your web needs.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Our Services</h2>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>

                <ul className="list-disc pl-5 mb-4">
                    <li className="mb-2"><strong>Expert Team:</strong> Our team comprises seasoned professionals with
                        extensive experience in web development, design, and hosting. We stay abreast of the latest
                        industry trends to deliver innovative solutions.
                    </li>
                    <li className="mb-2"><strong>Customer-Centric Approach:</strong> We prioritize your needs and work
                        collaboratively to achieve your business goals. Your satisfaction is our top priority.
                    </li>
                    <li className="mb-2"><strong>End-to-End Solutions:</strong> From conceptualizing your website to
                        maintaining its performance, we offer end-to-end services that cover every aspect of your online
                        presence.
                    </li>
                    <li className="mb-2"><strong>Quality Assurance:</strong> We adhere to the highest standards of
                        quality in all our projects, ensuring that you receive a product that exceeds your expectations.
                    </li>
                </ul>

                <p className="mb-4">Join us at Klinfuture and let us help you navigate the digital landscape with ease
                    and confidence. Together, we can build a strong online presence that drives your business
                    forward.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
                <p>Ready to take your online presence to the next level? Get in touch with us today!</p>
            </main>
        </div>
    );
}
