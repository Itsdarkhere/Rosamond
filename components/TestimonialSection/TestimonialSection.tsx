import TestimonialsSwiper from "./TestimonialsSwiper";

export default function TestimonialSection() {
  return (
        <section className=' flex gap-10 pb-32 pl-4 sm:pl-8 md:pl-16 2xl:px-16 flex-col justify-center items-center w-full'>
            <div className=" max-w-[1920px] w-full flex flex-col justify-center items-center gap-10">
                <h2 className=' text-5xl text-white font-serif text-center'>Hear It From Our Arkansas Family</h2>
                <TestimonialsSwiper />
             </div>
        </section>
  )
}
