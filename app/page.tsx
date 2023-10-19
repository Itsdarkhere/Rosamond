import Image from 'next/image'
import hero from '../public/hero.jpg'
import Link from 'next/link'
import line from '../public/line.svg'
import ch from '../public/ch.png'
import cw from '../public/cw.avif'
import ir from '../public/ir.avif'
import arrowright from '../public/arrowright.svg'
import blackarrowright from '../public/blackarrowright.svg'
import TestimonialSection from '@/components/TestimonialSection/TestimonialSection'
import BuildsSection from '@/components/BuildsSection/BuildsSection'
import StepsSection from '@/components/StepsSection/StepsSection'
import DreamFormSection from '@/components/DreamFormSection/DreamFormSection'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
       <section className="w-full h-full relative">
          <Image priority fill className=' z-0 brightness-50 object-cover' src={hero} alt='Beautiful house' />
          <div className=' relative z-20 flex flex-col justify-center items-center text-center py-96 px-4 sm:px-8 md:px-16 text-white'>
            <h1 className=' text-7xl font-serif'>Arkansas Diamond Standard Homes & Interiors</h1>
            <h3 className=' mt-10 max-w-[966px] text-3xl font-sans'>Where unparalleled craftsmanship meets Southern charm. Dive into a legacy of luxury - affordable, honest and uniquely yours.</h3>
            <button className=' mt-10 text-2xl text-black py-3 px-4 gap-3 flex flex-row justify-center items-center rounded-full bg-white font-sans font-semibold'>
              GET STARTED
              <Image src={blackarrowright} alt='black arrow pointing right' height={18} />
            </button>
          </div>
       </section>
       <section className=' py-28 px-32 flex flex-col justify-center items-center'>
          <div className='max-w-[800px] flex flex-col justify-center items-center text-center'>
            <h6 className=' text-2xl text-white font-sans pb-5'>about</h6>
            <Image height={35} src={line} alt='line' />
            <h4 className=' text-white text-5xl mt-9 font-serif'>ROSAMOND CONSTRUCTION</h4>
            <p className=' text-white text-xl mt-9 font-sans'>From the heart of Springdale, Arkansas, Rosamond Construction upholds the essence of Southern craftsmanship and values. We're more than just builders; we're neighbors dedicated to integrity and community. We offer more than upscale, quality construction; we provide homes where families can grow, and memories are forged. From our family to yours, we promise affordability without compromising on luxury. At Rosamond Construction, your dream home isn't just a project—it's a commitment, a legacy. Let's craft homes filled with heart and soul, together.</p>
            <button className=' mt-10 border-2 border-white text-xl text-white py-3 px-4 gap-3 flex flex-row justify-center items-center rounded-full bg-transparent font-sans font-semibold'>
              LEARN MORE
              <Image src={arrowright} alt='arrow pointing right' height={18} />
            </button>
          </div>
       </section>
       <section className=' flex px-4 sm:px-8 md:px-16  flex-col w-full justify-center items-center'>
        <div className=" max-w-[1920px] w-full flex pt-6 pb-10 flex-col justify-center items-center gap-10">
          <h3 className=' text-5xl text-white font-serif'>Where Arkansas Dreams Meet Superior Craft</h3>
          <div className='w-full flex flex-row justify-between gap-10'>
            <Link className=' w-1/3 rounded-3xl overflow-hidden aspect-[11/12] flex flex-col relative' href={'/services'}>
              <Image className=' object-cover brightness-75' src={ch} fill alt='interior of a house' />
              <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center'>
                <div className=' h-16 w-16 rounded-full bg-black mb-14 flex justify-center items-center'>
                  <Image height={20} src={arrowright} alt='arrow right' />
                </div>
                <h5 className='max-w-250px text-3xl text-white font-sans font-semibold'>CUSTOM HOMES</h5>
              </div>
            </Link>
            <Link className=' w-1/3 rounded-3xl overflow-hidden aspect-[11/12]  flex flex-col relative' href={'/services'}>
              <Image className=' object-cover brightness-50' src={ir} fill alt='interior of a house' />
              <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center'>
                <div className=' h-16 w-16 rounded-full bg-black mb-14 flex justify-center items-center'>
                  <Image height={20} src={arrowright} alt='arrow right' />
                </div>
                <h5 className='max-w-250px text-3xl text-white font-sans font-semibold'>INTERIOR REMODELS</h5>
              </div>
            </Link>
            <Link className=' w-1/3 rounded-3xl overflow-hidden aspect-[11/12] flex flex-col relative' href={'/services'}>
              <Image className=' object-cover brightness-50' src={cw} fill alt='interior of a house' />
              <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center'>
                <div className=' h-16 w-16 rounded-full bg-black flex justify-center items-center'>
                  <Image height={20} src={arrowright} alt='arrow right' />
                </div>
                <h5 className=' max-w-250px text-3xl text-white font-sans font-semibold mt-14'>CABINETRY & WOODWORKING</h5>
              </div>
            </Link>
          </div>
        </div>
       </section>
       <BuildsSection />
       <TestimonialSection />
       <StepsSection />
       <DreamFormSection />
    </main>
  )
}
