import Image from "next/image"
import hero from '../../public/hero.jpg'

export default function AboutUs() {
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className="w-full h-full relative">
                <Image priority fill className=' z-0 brightness-50 object-cover' src={hero} alt='Beautiful house' />
                <div className=' relative z-20 flex flex-col justify-center items-center text-center py-96 px-32 text-white'>
                    <h1 className=' text-7xl'>Where Arkansas Dreams Meet Superior Craft</h1>
                    <h3 className=' mt-10 max-w-[966px] text-3xl'>Your dream, our craftsmanship.</h3>
                    <button className=' mt-10 text-2xl text-black py-3 px-4 rounded-full bg-white'>SHARE YOUR VISION</button>
                </div>
            </section>  
            <section className="py-28 px-32 flex flex-col justify-center items-center gap-20">
                <h2 className=" text-white text-3xl">WHY CHOOSE ROSAMOND CONSTRUCTION</h2>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className=" h-20 w-20 mb-10 bg-gray-300 rounded-full"></div>
                        <h6 className=" text-lg">Souther Soul Modern Methods</h6>
                        <p>At Rosamond, we respect tradition but aren't bound by it. Our techniques are state-of-the-art, ensuring homes that not only look great but are also structurally sound and energy efficient.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className=" h-20 w-20 mb-10 bg-gray-300 rounded-full"></div>
                        <h6 className=" text-lg">Not Just Builders, We're Neighbors</h6>
                        <p>Based in Springdale, our roots run deep in Arkansas soil. Every project we undertake isn't just a job; it's a commitment to our community. As your neighbors, your satisfaction is our reputation.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className=" h-20 w-20 mb-10 bg-gray-300 rounded-full"></div>
                        <h6 className=" text-lg">Personalized Attention, Every Step of the Way</h6>
                        <p>For us, every project is personal. We work closely with you, understanding your needs and preferences, guiding you through each stage, ensuring the end result is exactly what you envisioned (or even better).</p>
                    </div>
                </div>
            </section>
            <section  className="w-full pb-28 px-32 flex flex-col justify-center items-center gap-20">
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
            </section>
        </div>
    )
}