'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import quot from '../../public/quot.svg'
import star from '../../public/star.svg'
import Image from 'next/image';

export default function TestimonialsSwiper() {
  return (
    <Swiper
        modules={[Navigation]}
        direction={'horizontal'}
        loop={false}
        navigation={false}
        grabCursor={true}
        className=' w-full px-52'
        spaceBetween={25}
        slidesPerGroup={1}
        slidesPerView={1.2}
        speed={500}
        pagination={false}
        breakpoints={{
            600: {
                slidesPerView: 1.2,
                slidesPerGroup: 1,
                spaceBetween: 50
            },
            1000: {
                slidesPerView: 2.2,
                slidesPerGroup: 2,
                spaceBetween: 50
            },
        }}
        >
        <SwiperSlide className='w-full h-full'>
            <Testimonial 
            text='Rosamond Construction transformed our vision into reality. Their meticulous attention to detail and Southern craftsmanship gave our home an elegance we never thought possible. Every day feels like luxury living.' 
            from='The Harrison Family' location='Fayetteville, AR' starCount={5}  />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <Testimonial text='Building a custom home can be overwhelming, but with Rosamond Construction, it felt effortless. Their expertise and genuine care made our home-building journey unforgettable.' 
            from='Carlos & Maria Gutierrez' location='Hot Springs, AR' starCount={5}  />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <Testimonial 
            text='Rosamond Construction transformed our vision into reality. Their meticulous attention to detail and Southern craftsmanship gave our home an elegance we never thought possible. Every day feels like luxury living.' 
            from='The Harrison Family' location='Fayetteville, AR' starCount={5}  />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <Testimonial text='Building a custom home can be overwhelming, but with Rosamond Construction, it felt effortless. Their expertise and genuine care made our home-building journey unforgettable.' 
            from='Carlos & Maria Gutierrez' location='Hot Springs, AR' starCount={5}  />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <Testimonial 
            text='Rosamond Construction transformed our vision into reality. Their meticulous attention to detail and Southern craftsmanship gave our home an elegance we never thought possible. Every day feels like luxury living.' 
            from='The Harrison Family' location='Fayetteville, AR' starCount={5}  />
        </SwiperSlide>
        <SwiperSlide className='w-full h-full'>
            <Testimonial text='Building a custom home can be overwhelming, but with Rosamond Construction, it felt effortless. Their expertise and genuine care made our home-building journey unforgettable.' 
            from='Carlos & Maria Gutierrez' location='Hot Springs, AR' starCount={5}  />
        </SwiperSlide>
    </Swiper>
  )
}

function Testimonial({text, from, location, starCount}: {text: string, from: string, location: string, starCount: number}) {
    return (
        <div className='w-full relative min-h-[250px] h-full bg-white rounded-3xl px-12 py-10 flex flex-col justify-center items-center text-center'>
            <p className=' font-sans text-base pb-3' style={{ color: '#5F5C60'}}>{text}</p>
            <div className='flex flex-row justify-center items-center gap-2'>
                <Image height={24} src={star} alt='star' />
                <Image height={24} src={star} alt='star' />
                <Image height={24} src={star} alt='star' />
                <Image height={24} src={star} alt='star' />
                <Image height={24} src={star} alt='star' />
            </div>
            <Image className='absolute bottom-10 right-10' height={32} src={quot} alt='quotation mark' />
            <p className=' font-sans font-bold text-base pt-2' style={{ color: '#263238' }}>{from}</p>
            <p className=' font-sans font-medium text-base pt-1.5' style={{ color: '#263238' }}>{location}</p>
        </div>
    )
}