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
            <section>

            </section>
            <section>

            </section>
        </div>
    )
}