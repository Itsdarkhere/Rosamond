import TestimonialsSwiper from "./TestimonialsSwiper";

export default function TestimonialSection() {
  return (
        <section className=' flex gap-10 pb-32 pl-4 sm:pl-8 md:pl-16 flex-col justify-center items-center w-full'>
            <div className=" max-w-[1920px] w-full flex-col justify-center items-center">
                <h2 className=' text-4xl text-white font-serif'>Hear It From Our Arkansas Family</h2>
                <TestimonialsSwiper />
             </div>
        </section>
  )
}
