import Image from "next/image"
import handshake from '../../public/handshake.svg'
import blueprint from '../../public/blueprint.svg'
import mglass from '../../public/mglass.svg'

export default function WhySection() {
  return (
    <section className="py-28 px-4 sm:px-8 md:px-16 flex flex-col justify-center items-center">
        <div className=" max-w-[1920px] w-full flex flex-col justify-center items-center gap-20">
            <h2 className=" text-white text-5xl font-serif text-center">WHY CHOOSE ROSAMOND CONSTRUCTION</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center font-sans">
                <div className="flex flex-col justify-center items-center text-center">
                    <div className=" h-32 w-32 flex justify-center items-center  mb-10 rounded-full" style={{ backgroundColor: '#E3E3E3'}}>
                        <Image src={blueprint} height={94} alt="blueprint" />
                    </div>
                    <h6 className=" text-3xl pb-2 sm:pb-9">Southern Soul<br/> Modern Methods</h6>
                    <p className=" text-base sm:text-lg">At Rosamond, we respect tradition but aren't bound by it. Our techniques are state-of-the-art, ensuring homes that not only look great but are also structurally sound and energy efficient.</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className=" h-32 w-32 flex justify-center items-center mb-10 rounded-full" style={{ backgroundColor: '#E3E3E3'}}>
                        <Image src={handshake} height={46} alt="handshake" />
                    </div>
                    <h6 className=" text-3xl pb-2 sm:pb-9">Not Just Builders,<br/> We're Neighbors</h6>
                    <p className=" text-base sm:text-lg">Based in Springdale, our roots run deep in Arkansas soil. Every project we undertake isn't just a job; it's a commitment to our community. As your neighbors, your satisfaction is our reputation.</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className=" h-32 w-32 flex justify-center items-center  mb-10 rounded-full" style={{ backgroundColor: '#E3E3E3'}}>
                        <Image src={mglass} height={80} alt="magnifying glass" />
                    </div>
                    <h6 className=" text-3xl pb-2 sm:pb-9">Personalized Attention,<br/> Every Step of the Way</h6>
                    <p className=" text-base sm:text-lg">For us, every project is personal. We work closely with you, understanding your needs and preferences, guiding you through each stage, ensuring the end result is exactly what you envisioned (or even better).</p>
                </div>
            </div>
        </div>
    </section>
  )
}
