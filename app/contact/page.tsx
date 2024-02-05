'use client'
import Image from "next/image"
import contact from '../../public/contact.png'
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection"
import DreamFormSection from "@/components/DreamFormSection/DreamFormSection"
import GoogleMap from "@/components/GoogleMap"
import GetInTouchForm from "@/components/GetInTouchForm"

export default function Contact() {
    
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className="w-full h-full px-4 sm:px-8 md:px-16 pb-24 flex justify-center items-center">
                <div className=" max-w-[1920px] mt-32 overflow-hidden w-full h-full rounded-3xl bg-white flex flex-row">
                    <GetInTouchForm />
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