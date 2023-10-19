
export default function StepsSection() {
  return (
        <section className=' flex gap-10 py-28 px-4 sm:px-8 md:px-16 flex-col justify-center items-center w-full'>
            <div className=" max-w-[1920px] w-full flex flex-col justify-center items-center gap-10">
                <h2 className=' text-5xl text-white font-serif text-center'>How We Bring Your Vision To Life</h2>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='flex flex-col text-center items-center'>
                        <div className='w-24 h-24 font-bold text-5xl flex justify-center items-center mb-9 bg-gray-400 border-4 rounded-full' style={{borderColor: '#81864A', color: '#81864A', backgroundColor: '#F4F4F4'}}>
                            1
                        </div>
                        <h6 className='text-white text-4xl font-sans'>Initial Consultation</h6>
                        <p className=' text-white text-xl font-sans pt-2'>Sit with us and discuss your vision. With years of expertise and an attentive ear, we'll help map out the first steps of your dream.</p>
                    </div>
                    <div className='flex flex-col text-center items-center'>
                        <div className='w-24 h-24 font-bold text-5xl flex justify-center items-center mb-9 bg-gray-400 border-4 rounded-full' style={{borderColor: '#81864A', color: '#81864A', backgroundColor: '#F4F4F4'}}>
                            2
                        </div>
                        <h6 className='text-white text-4xl font-sans'>Design & Planning</h6>
                        <p className=' text-white text-xl font-sans pt-2'>Together, we'll refine and shape your ideas, ensuring they're both aesthetically pleasing and practically sound, drawing upon the best of design and modern innovation.</p>
                    </div>
                    <div className='flex flex-col text-center items-center'>
                        <div className='w-24 h-24 font-bold text-5xl flex justify-center items-center mb-9 bg-gray-400 border-4 rounded-full' style={{borderColor: '#81864A', color: '#81864A', backgroundColor: '#F4F4F4'}}>
                            3
                        </div>
                        <h6 className='text-white text-4xl font-sans'>Construction</h6>
                        <p className=' text-white text-xl font-sans pt-2'>Employing top-grade materials and unmatched craftsmanship, we build with precision and care. You'll be updated consistently, ensuring transparency throughout.</p>
                    </div>
                    <div className='flex flex-col text-center items-center'>
                        <div className='w-24 h-24 font-bold text-5xl flex justify-center items-center mb-9 bg-gray-400 border-4 rounded-full' style={{borderColor: '#81864A', color: '#81864A', backgroundColor: '#F4F4F4'}}>
                            4
                        </div>
                        <h6 className='text-white text-4xl font-sans'>Final Walkthrough</h6>
                        <p className=' text-white text-xl font-sans pt-2'>Experience the culmination of our shared journey. We'll review every detail together, guaranteeing your new space not only meets but exceeds expectations.</p>
                    </div>
                </div>
            </div>
        </section>
  )
}
