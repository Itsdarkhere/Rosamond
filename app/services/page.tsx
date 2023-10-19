import Image from "next/image"
import hero from '../../public/hero.jpg'
import DreamFormSection from "@/components/DreamFormSection/DreamFormSection"
import WhySection from "@/components/WhySection/WhySection"

export default function AboutUs() {
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className="w-full px-4 sm:px-8 md:px-16 h-full relative flex justify-center items-center">
                <Image priority fill className=' z-0 brightness-50 object-cover' src={hero} alt='Beautiful house' />
                <div className=' max-w-[1920px] relative z-20 flex flex-col justify-center items-center text-center py-96 text-white'>
                    <h1 className=' text-7xl'>Where Arkansas Dreams Meet Superior Craft</h1>
                    <h3 className=' mt-10 max-w-[966px] text-3xl'>Your dream, our craftsmanship.</h3>
                    <button className=' mt-10 text-2xl text-black py-3 px-4 rounded-full bg-white'>SHARE YOUR VISION</button>
                </div>
            </section>  
            <WhySection />
            <section  className="w-full pb-28 px-4 sm:px-8 md:px-16 flex flex-col justify-center items-center">
                <div className=" max-w-[1920px] w-full flex flex-col justify-center items-center gap-10">
                    <h2 className=" text-white text-3xl">Services We Offer</h2>
                    <div className="w-full py-96 overflow-hidden rounded-3xl relative">
                        <Image fill src={hero} alt="hero picture" />
                        <div className=" absolute left-0 top-0 bottom-0 bg-black bg-opacity-75 w-1/2 flex flex-col py-20 px-10">
                            <h5 className=" text-white text-5xl pb-9">INTERIOR REMODELS</h5>
                            <ul className=" text-2xl flex flex-col gap-3">
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
                    <div className="w-full py-96 overflow-hidden rounded-3xl relative">
                        <Image fill src={hero} alt="hero picture" />
                        <div className=" absolute right-0 top-0 bottom-0 bg-black bg-opacity-75 w-1/2 flex flex-col py-20 px-10">
                            <h5 className=" text-white text-5xl pb-9">CUSTOM HOMES</h5>
                            <ul className=" text-2xl flex flex-col gap-3">
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
                    <div className="w-full py-96 overflow-hidden rounded-3xl relative">
                        <Image fill src={hero} alt="hero picture" />
                        <div className=" absolute left-0 top-0 bottom-0 bg-black bg-opacity-75 w-1/2 flex flex-col py-20 px-10">
                            <h5 className=" text-white text-5xl pb-9">CABINETRY & WOODWORKING</h5>
                            <ul className=" text-2xl flex flex-col gap-3">
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
                    <button className=" py-4 px-8 rounded-2xl text-black bg-white">EXPLORE OUR PORTFOLIO</button>
                </div>
            </section>
            <DreamFormSection />
        </div>
    )
}