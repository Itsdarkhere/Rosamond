'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialsSwiper() {
  return (
    <Swiper
        modules={[Navigation]}
        direction={'horizontal'}
        loop={false}
        navigation={false}
        className=' h-80 w-full py-40 px-52'
        spaceBetween={25}
        slidesPerGroup={2}
        slidesPerView={2}
        speed={500}
        pagination={false}
        >
        <SwiperSlide className='w-full h-full'>
            <div className='w-full h-full bg-gray-400'></div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <div className='w-full h-full bg-gray-500'></div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <div className='w-full h-full bg-gray-600'></div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <div className='w-full h-full bg-gray-600'></div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <div className='w-full h-full bg-gray-600'></div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <div className='w-full h-full bg-gray-600'></div>
        </SwiperSlide>
    </Swiper>
  )
}
