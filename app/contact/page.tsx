import Image from "next/image"
import hero from '../../public/hero.jpg'

export default function Contact() {
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className="w-full h-full relative">
                <Image priority fill className=' z-0 brightness-50 object-cover' src={hero} alt='Beautiful house' />
                
            </section>  
        </div>
    )
}