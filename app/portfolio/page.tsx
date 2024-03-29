'use client'
import Image from "next/image"
import portfolio from '../../public/portfolio.png'
import portfolio2 from '../../public/portfolio2.png'
import arrowright from '../../public/arrowright.svg'
import WhySection from "@/components/WhySection/WhySection"
import DreamFormSection from "@/components/DreamFormSection/DreamFormSection"
import Link from "next/link"

export default function Portfolio() {
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className="w-full py-52 h-full relative flex flex-col justify-center items-start">
                <Image priority className=' w-4/5' src={portfolio} alt='Beautiful house' />
                <div className="w-full lg:mt-10 flex flex-col lg:flex-row justify-start items-start lg:items-center">
                    <Image priority className=' w-3/4 lg:w-1/2' src={portfolio2} alt='Beautiful house' />
                    <div className=" relative px-5 lg:px-0 lg:pr-5 mx-auto mt-3 lg:mt-0 lg:mx-0 flex flex-col justify-start items-center max-w-[560px] gap-4">
                        <h6 className=" text-white text-xl font-sans text-center">
                            Respecting the intimacy of our clients' personal spaces, we've chosen to keep our portfolio exclusive. To view our craftsmanship, 
                            &nbsp;<Link href={'/request'} className=" underline">please request privileged access.</Link>
                        </h6>
                        <form onSubmit={() => console.log('')} className=' h-14 flex flex-row w-full max-w-xs px-9 bg-transparent border-2 border-white rounded-full gap-2'>
                            <input type="password" className="placeholder:text-zinc-300 placeholder:font-sans placeholder:text-md text-white flex-1 focus:ring-0 focus:outline-none focus:border-none bg-transparent" placeholder="Enter password" />
                            <button type="submit">
                                <Image src={arrowright} alt='Search' height={12} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>  
            <WhySection />
            <DreamFormSection />
        </div>
    )
}