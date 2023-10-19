import Image from "next/image"
import hero from '../../public/hero.jpg'
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection"
import DreamFormSection from "@/components/DreamFormSection/DreamFormSection"
import Link from "next/link"

export default function Contact() {
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className="w-full h-full px-24 pb-24">
                <div className=" mt-32 overflow-hidden w-full h-full rounded-3xl bg-white flex flex-row">
                    <form className=" flex flex-col w-1/2 py-20 px-28">
                        <h5 className=" text-5xl text-black">Get in Touch</h5>
                        <p className=" text-sm text-black">Whether you're an existing customer with inquiries or someone new with a dream project in mind, we're here to listen, assist, and guide. Get in touch with Rosamond Construction today.</p>
                        <div className="flex mb-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                            type="text"
                            name="username"
                            id="Name Lastname"
                            required
                            autoComplete="username"
                            className="block w-full border-0 px-2 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Name"
                            />
                        </div>
                        <div className="flex mb-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                            type="text"
                            name="username"
                            id="Name Lastname"
                            required
                            autoComplete="Email"
                            className="block w-full border-0 px-2 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="janesmith"
                            />
                        </div>
                        <div className="flex mb-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                            type="text"
                            name="username"
                            id="Name Lastname"
                            required
                            autoComplete="username"
                            className="block w-full border-0 px-2 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Phone Number"
                            />
                        </div>
                        <div className="flex mb-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                            type="text"
                            name="username"
                            id="Name Lastname"
                            required
                            autoComplete="username"
                            className="block w-full border-0 px-2 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="How did you find us?"
                            />
                        </div>
                        <button type="submit" className=" rounded-3xl bg-black w-full py-6">SUBMIT</button>
                        <Link href={'/submit'}>Want to submit a construction idea?</Link>
                        <div className="flex flex-row justify-start items-center text-black">
                            <div className="flex flex-row">
                                <div className=" h-10 w-10 rounded-full bg-gray-400"></div>
                                <div className="flex flex-col">
                                    <h6>PHONE</h6>
                                    <p>(479) 957-2611</p>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className=" h-10 w-10 rounded-full bg-gray-400"></div>
                                <div className="flex flex-col">
                                    <h6>EMAIL</h6>
                                    <p>CONTACT@ROSAMONDCONSTRUCTION.COM</p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="relative flex-1 w-1/2">
                        <Image src={hero} alt="hero" fill />
                    </div>
                </div>
            </section>  
            <TestimonialSection />
            <DreamFormSection />
        </div>
    )
}