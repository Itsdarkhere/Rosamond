import Image from 'next/image'
import hero from '../public/hero.jpg'
import Link from 'next/link'
import BuildsSwiper from '@/components/BuildsSection/BuildsSwiper'
import TestimonialsSwiper from '@/components/TestimonialSection/TestimonialsSwiper'
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection'
import BuildsSection from '@/components/BuildsSection/BuildsSection'
import StepsSection from '@/components/StepsSection/StepsSection'
import DreamFormSection from '@/components/DreamFormSection/DreamFormSection'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
       <section className="w-full h-full relative">
          <Image priority fill className=' z-0 brightness-50 object-cover' src={hero} alt='Beautiful house' />
          <div className=' relative z-20 flex flex-col justify-center items-center text-center py-96 px-32 text-white'>
            <h1 className=' text-7xl'>Arkansas Diamond Standard Homes & Interiors</h1>
            <h3 className=' mt-10 max-w-[966px] text-3xl'>Where unparalleled craftsmanship meets Southern charm. Dive into a legacy of luxury - affordable, honest and uniquely yours.</h3>
            <button className=' mt-10 text-2xl text-black py-3 px-4 rounded-full bg-white'>GET STARTED</button>
          </div>
       </section>
       <section className=' py-28 px-32 flex flex-col justify-center items-center'>
          <div className='max-w-[800px] text-center'>
            <h6 className=' text-2xl text-white'>about</h6>
            {/* SVG HERE */}
            <h4 className=' text-white text-5xl mt-9'>ROSAMOND CONSTRUCTION</h4>
            <p className=' text-white text-xl mt-9'>From the heart of Springdale, Arkansas, Rosamond Construction upholds the essence of Southern craftsmanship and values. We're more than just builders; we're neighbors dedicated to integrity and community. We offer more than upscale, quality construction; we provide homes where families can grow, and memories are forged. From our family to yours, we promise affordability without compromising on luxury. At Rosamond Construction, your dream home isn't just a project—it's a commitment, a legacy. Let's craft homes filled with heart and soul, together.</p>
          </div>
       </section>
       <section className=' flex flex-col w-full justify-center items-center gap-4'>
          <h3>Where Arkansas Dreams Meet Superior Craft</h3>
          <div className='w-full flex flex-row justify-between'>
            <Link className=' rounded-3xl bg-blue-200 px-16 py-36 flex flex-col' href={'/services'}>
              <div className=' h-10 w-10 rounded-full bg-black'></div>
              <h5 className='max-w-250px text-white'>CUSTOM HOMES</h5>
            </Link>
            <Link className=' rounded-3xl bg-blue-200 px-16 py-36 flex flex-col' href={'/services'}>
              <div className=' h-10 w-10 rounded-full bg-black'></div>
              <h5 className='max-w-250px text-white'>INTERIOR REMODELS</h5>
            </Link>
            <Link className=' rounded-3xl bg-blue-200 px-16 py-36 flex flex-col' href={'/services'}>
              <div className=' h-10 w-10 rounded-full bg-black'></div>
              <h5 className=' max-w-250px text-white'>CABINETRY & WOODWORKING</h5>
            </Link>
          </div>
       </section>
       <BuildsSection />
       <TestimonialSection />
       <StepsSection />
       <DreamFormSection />
    </main>
  )
}
