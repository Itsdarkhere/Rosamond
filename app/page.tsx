import Image from 'next/image'
import hero from '../public/hero.jpg'
import Link from 'next/link'
import BuildsSwiper from '@/components/BuildsSwiper'
import TestimonialsSwiper from '@/components/TestimonialsSwiper'

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
       <section className=' flex gap-10 py-28 px-32 flex-col justify-center items-center w-full'>
          <h2 className=' text-4xl text-white'>Crafted Excellence: Our Proudest Builds</h2>
          <BuildsSwiper />
       </section>
       <section className=' flex gap-10 px-32 flex-col justify-center items-center w-full'>
          <h2 className=' text-4xl text-white'>Hear It From Our Arkansas Family</h2>
          <TestimonialsSwiper />
       </section>
       <section className=' flex gap-10 py-28 px-32 flex-col justify-center items-center w-full'>
        <h2 className=' text-4xl text-white'>How We Bring Your Vision To Life</h2>
        <div className=' flex flex-row gap-6'>
          <div className='flex flex-col text-center items-center p-4'>
            <div className='w-20 h-20 mb-9 bg-gray-400 rounded-full'></div>
            <h6 className='text-white text-2xl'>Initial Consultation</h6>
            <p className=' text-white text-lg'>Sit with us and discuss your vision. With years of expertise and an attentive ear, we'll help map out the first steps of your dream.</p>
          </div>
          <div className='flex flex-col text-center items-center p-4'>
            <div className='w-20 h-20 mb-9 bg-gray-400 rounded-full'></div>
            <h6 className='text-white text-2xl'>Design & Planning</h6>
            <p className=' text-white text-lg'>Together, we'll refine and shape your ideas, ensuring they're both aesthetically pleasing and practically sound, drawing upon the best of design and modern innovation.</p>
          </div>
          <div className='flex flex-col text-center items-center p-4'>
            <div className='w-20 h-20 mb-9 bg-gray-400 rounded-full'></div>
            <h6 className='text-white text-2xl'>Construction</h6>
            <p className=' text-white text-lg'>Employing top-grade materials and unmatched craftsmanship, we build with precision and care. You'll be updated consistently, ensuring transparency throughout.</p>
          </div>
          <div className='flex flex-col text-center items-center p-4'>
            <div className='w-20 h-20 mb-9 bg-gray-400 rounded-full'></div>
            <h6 className='text-white text-2xl'>Final Walkthrough</h6>
            <p className=' text-white text-lg'>Experience the culmination of our shared journey. We'll review every detail together, guaranteeing your new space not only meets but exceeds expectations.</p>
          </div>
        </div>
       </section>
       <section className='w-full flex flex-row gap-10'>
        <div className=' w-1/3 flex flex-col gap-10'>
          <h4 className=' text-white text-2xl'>Pull Up a Chair & Share Your Dream With Us</h4>
          <p className=' text-white text-lg'>At Rosamond Construction, we craft homes, cabinetry, and timeless spaces, but our true masterpiece is the enduring bond we forge with you. Share your vision, and together, let's shape dreams into reality.</p>
        </div>
        <form className=' bg-white shadow-sm rounded-lg flex flex-col justify-start items-start p-4'>
          <h5 className=' text-3xl text-black'>Begin Your Rosamond Journey</h5>
          <div className="col-span-full">
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              My name is
            </label>
            <div className="mt-1">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="Name Lastname"
                  required
                  autoComplete="username"
                  className="block w-full border-0 px-2 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Im located in
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                My preferred start date is
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <h6>Im interested in...</h6>
          {/* Something */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                My best number is
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                My best email address is
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-3 sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              My estimated budget is
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md h-9 border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div className="mt-3 col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              More about my project
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button className=' px-8 py-4 bg-black text-white' type='submit'>
            Submit Inquiry
          </button>
        </form>
       </section>
    </main>
  )
}
