'use client'
import Image from "next/image"
import phone from '../../public/phone.svg'
import mail from '../../public/mail.svg'
import contact from '../../public/contact.png'
import arrowright from '../../public/arrowright.svg'
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection"
import DreamFormSection from "@/components/DreamFormSection/DreamFormSection"
import Link from "next/link"
import GoogleMap from "@/components/GoogleMap"
import { useState } from "react"

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();

        console.log("Submit");
        setSubmitted(true);
    }
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className="w-full h-full px-4 sm:px-8 md:px-16 pb-24 flex justify-center items-center">
                <div className=" max-w-[1920px] mt-32 overflow-hidden w-full h-full rounded-3xl bg-white flex flex-row">
                    <form onSubmit={handleSubmit} className=" flex flex-col justify-start items-center w-full lg:w-1/2 py-20 px-5 md:px-20 lg:px-28">
                        <div className="flex flex-col w-full max-w-[475px]">
                            { submitted ? 
                            <div className="flex flex-col">
                                <h5 className=" text-5xl text-black font-serif pb-5">Thank you!</h5>
                                <p className=" text-sm text-black font-sans pb-7">We will reach out within 24 to 48 hours. To connect with us sooner, call us or email us directly to the contact information listed below.</p>
                            </div>
                            :
                            <div className="flex flex-col">
                                <h5 className=" text-5xl text-black font-serif pb-5">Get in Touch</h5>
                                <p className=" text-sm text-black font-sans pb-7">Whether you're an existing customer with inquiries or someone new with a dream project in mind, we're here to listen, assist, and guide. Get in touch with Rosamond Construction today.</p>
                            </div>
                            }
                            <div className={`${submitted && 'hidden'} w-full flex flex-col`}>
                                <div className="flex mb-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-formfocus">
                                    <input
                                        type="text"
                                        name="username"
                                        id="Name Lastname"
                                        required
                                        autoComplete="username"
                                        className="block w-full outline-none border-0 px-2 bg-transparent py-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="flex mb-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-formfocus">
                                    <input
                                        type="text"
                                        name="username"
                                        id="Name Lastname"
                                        required
                                        autoComplete="Email"
                                        className="block w-full outline-none border-0 px-2 bg-transparent py-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="flex mb-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-formfocus">
                                    <input
                                        type="text"
                                        name="username"
                                        id="Name Lastname"
                                        required
                                        autoComplete="username"
                                        className="block w-full outline-none border-0 px-2 bg-transparent py-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <div className="w-full flex mb-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-formfocus">
                                    <input
                                        type="text"
                                        name="username"
                                        id=""
                                        required
                                        autoComplete="username"
                                        className="block w-full outline-none border-0 px-2 bg-transparent py-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="How did you find us?"
                                    />
                                </div>
                            </div>
                            <button disabled={submitted} type="submit" className=" rounded-full flex flex-row justify-center items-center gap-2 bg-black disabled:bg-gray-300 w-full py-3 font-sans">
                                SUBMIT
                                <Image src={arrowright} alt="arrow right" height={15} />
                            </button>
                            <Link style={{color: '#828282'}} className="font-sans mt-3 leading-5 text-sm underline w-full text-center" href={'/submit'}>Want to submit a construction idea?</Link>
                            <div className="flex flex-row justify-start flex-wrap items-center text-black gap-10 mt-12">
                                <div className="flex flex-row gap-3">
                                    <Image src={phone} alt="phone" height={23} />
                                    <div className="flex flex-col text-xs">
                                        <h6 className=" font-sans font-semibold">PHONE</h6>
                                        <p className=" font-sans">(479) 957-2611</p>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-3">
                                    <Image src={mail} alt="email" height={23} />
                                    <div className="flex flex-col text-xs">
                                        <h6 className=" font-sans font-semibold">EMAIL</h6>
                                        <p className=" font-sans">CONTACT@ROSAMONDCONSTRUCTION.COM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="relative flex-1 w-1/2 hidden lg:flex justify-start items-center">
                        <GoogleMap />
                        <Image className=" object-cover" src={contact} alt="hero" fill />
                    </div>
                </div>
            </section>  
            <TestimonialSection />
            <DreamFormSection />
        </div>
    )
}