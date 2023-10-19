import Image from "next/image"
import hero from '../../public/hero.jpg'
import WhySection from "@/components/WhySection/WhySection"
import DreamFormSection from "@/components/DreamFormSection/DreamFormSection"
import Link from "next/link"

export default function Portfolio() {
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className="w-full py-96 px-32 h-full relative flex justify-center items-center">
                <Image priority fill className=' z-0 brightness-50 object-cover' src={hero} alt='Beautiful house' />
                <div className=" relative flex flex-col justify-center items-center max-w-[560px] gap-4">
                    <h6 className=" text-white text-xl font-sans">
                        Respecting the intimacy of our clients' personal spaces, we've chosen to keep our portfolio exclusive. To view our craftsmanship, 
                        <Link href={'/request'} className=" underline"> please request privileged access.</Link>
                    </h6>
                    <input type="text" className=" rounded-3xl px-5 py-2 bg-black border-2 border-white" placeholder="Enter password" />
                </div>
            </section>  
            <WhySection />
            <DreamFormSection />
        </div>
    )
}