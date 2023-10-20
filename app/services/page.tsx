import Image from "next/image"
import services from '../../public/services.avif'
import serv1 from '../../public/serv1.avif'
import serv2 from '../../public/serv2.avif'
import serv3 from '../../public/serv3.avif'
import blackarrowright from '../../public/blackarrowright.svg'
import DreamFormSection from "@/components/DreamFormSection/DreamFormSection"
import WhySection from "@/components/WhySection/WhySection"

export default function AboutUs() {
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className="w-full px-4 sm:px-8 md:px-16 h-full relative flex justify-center items-center">
                <Image priority fill className=' z-0 brightness-50 object-cover' src={services} alt='Beautiful house' />
                <div className=' max-w-[1920px] relative z-20 flex flex-col justify-center items-center text-center py-60 sm:py-80 text-white'>
                    <h1 className=' text-4xl sm:text-7xl font-serif'>Where Arkansas Dreams Meet Superior Craft</h1>
                    <h3 className=' mt-3 sm:mt-10 max-w-[966px] text-xl sm:text-4xl font-sans'>Your dream, our craftsmanship.</h3>
                    <button className=' mt-10 text-lg sm:text-2xl text-black py-3 px-4 rounded-full bg-white hover:bg-gray-200 flex flex-row justify-center items-center gap-3'>
                        SHARE YOUR VISION
                        <Image src={blackarrowright} alt="arrow right" height={16} />
                    </button>
                </div>
            </section>  
            <WhySection />
            <section  className="w-full pb-28 pt-16 px-4 sm:px-8 md:px-16 flex flex-col justify-center items-center">
                <div className=" max-w-[1920px] w-full flex flex-col justify-center items-center gap-10">
                    <h2 className=" text-white text-5xl font-serif">Services We Offer</h2>
                    <div className="w-full py-80 overflow-hidden rounded-3xl relative">
                        <Image className=" object-cover" fill src={serv1} alt="hero picture" />
                        <div className=" absolute left-0 top-0 bottom-0 bg-black bg-opacity-75 w-4/5 lg:w-1/2 flex flex-col py-20 px-10">
                            <h5 id="interiorremodels" className=" text-white text-2xl md:text-5xl pb-9 font-serif">INTERIOR REMODELS</h5>
                            <ul className=" text-base md:text-2xl flex flex-col gap-3 font-sans">
                                <li>Kitchen upgrades and renovations</li>
                                <li>Bathroom makeovers and expansions</li>
                                <li>Living room redesigns</li>
                                <li>Bedroom refurbishments</li>
                                <li>Home office creation and updates</li>
                                <li>Basement and attic conversions</li>
                                <li>Flooring replacements</li>
                                <li>Lighting system enhancements</li>
                                <li>Acoustic improvements and soundprooding</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full py-80 overflow-hidden rounded-3xl relative">
                        <Image className=" object-cover" fill src={serv2} alt="hero picture" />
                        <div className=" absolute right-0 top-0 bottom-0 bg-black bg-opacity-75 w-4/5 lg:w-1/2 flex flex-col py-20 px-10">
                            <h5 id="customhomes" className=" text-white text-2xl md:text-5xl pb-9 font-serif">CUSTOM HOMES</h5>
                            <ul className=" text-base md:text-2xl flex flex-col gap-3 font-sans">
                                <li>Foundation and structural work</li>
                                <li>Exterior facades and finishes</li>
                                <li>Roofing and insulation</li>
                                <li>Custom interior finishes</li>
                                <li>Advanced electrical systems</li>
                                <li>Plumbing and sanitation solutions</li>
                                <li>HVAC installations and upgrades</li>
                                <li>Eco-friendly/energy-saving implementations</li>
                                <li>Landscaping and outdoor setups</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full py-80 overflow-hidden rounded-3xl relative">
                        <Image className=" object-cover" fill src={serv3} alt="hero picture" />
                        <div className=" absolute left-0 top-0 bottom-0 bg-black bg-opacity-75 w-4/5 lg:w-1/2 flex flex-col py-20 px-10">
                            <h5 id="cabinetrywoodworking" className=" text-white text-2xl md:text-5xl pb-9 font-serif">CABINETRY & WOODWORKING</h5>
                            <ul className=" text-base md:text-2xl flex flex-col gap-3 font-sans">
                                <li>Kitchen and bathroom cabinetry</li>
                                <li>Customized storage solutions</li>
                                <li>Architectural moldings and trims</li>
                                <li>Bespoke furniture crafting</li>
                                <li>Handcrafted wooden decor items</li>
                                <li>Functional shelving and racks</li>
                                <li>Staircases and railings</li>
                                <li>Outdoor woodwork and decking</li>
                                <li>Artisanal wood detailing</li>
                            </ul>
                        </div>
                    </div>
                    <button className=" py-4 px-8 rounded-full text-black font-semibold bg-white hover:bg-gray-200 font-sans flex flex-row justify-center items-center gap-3">
                        EXPLORE OUR PORTFOLIO
                        <Image src={blackarrowright} alt="arrow right" height={16} />
                    </button>
                </div>
            </section>
            <DreamFormSection />
        </div>
    )
}