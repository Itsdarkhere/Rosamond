'use client'
import Image from 'next/image';
import build from '../../public/builds.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function BuildsSwiper() {
  return (
    <Swiper
        modules={[Navigation]}
        direction={'horizontal'}
        loop={false}
        navigation={false}
        className=' w-full py-40 px-52'
        spaceBetween={25}
        slidesPerGroup={1}
        slidesPerView={1.2}
        speed={500}
        pagination={false}
        grabCursor={true}
        breakpoints={{
          600: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 50
          },
        }}
        >
        <SwiperSlide className='w-full h-full relative rounded-3xl overflow-hidden'>
            <Image className=' object-cover brightness-50' fill src={build} alt='Picture of a house' />
            <div className='w-full h-full text-center pb-14 pt-48 xl:pt-72 relative font-sans flex flex-col justify-end items-center'>
              <h6 className=' text-4xl font-semibold pb-4'>Custom Family Home</h6>
              <p className=' text-3xl'>Completed in 2022 | Little Rock, Arkansas</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full relative rounded-3xl overflow-hidden'>
            <Image className=' object-cover brightness-50' fill src={build} alt='Picture of a house' />
            <div className='w-full h-full text-center  pb-14 pt-48 xl:pt-72 relative font-sans flex flex-col justify-end items-center'>
              <h6 className=' text-4xl font-semibold pb-4'>Custom Family Home</h6>
              <p className=' text-3xl'>Completed in 2022 | Little Rock, Arkansas</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full relative rounded-3xl overflow-hidden'>
            <Image className=' object-cover brightness-50' fill src={build} alt='Picture of a house' />
            <div className='w-full h-full text-center pb-14 pt-48 xl:pt-72 relative font-sans flex flex-col justify-end items-center'>
              <h6 className=' text-4xl font-semibold pb-4'>Custom Family Home</h6>
              <p className=' text-3xl'>Completed in 2022 | Little Rock, Arkansas</p>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}
