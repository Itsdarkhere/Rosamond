
export default function StepsSection() {
  return (
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
  )
}