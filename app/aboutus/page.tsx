import Image from "next/image"
import contactus from '../../public/contactus.png'
import BuildsSection from "@/components/BuildsSection/BuildsSection"
import StepsSection from "@/components/StepsSection/StepsSection"
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection"
import DreamFormSection from "@/components/DreamFormSection/DreamFormSection"

export default function AboutUs() {
    return (
        <div style={{ backgroundColor: '#161616'}} className="flex relative flex-col items-center justify-between">
            <section className=" w-full pt-52 px-24 flex flex-col justify-center items-center">
                <div className=" w-full py-96 rounded-3xl bg-gray-400 relative">
                    <Image className="z-0 object-cover" fill src={contactus} alt="Family picture" />
                </div>
                <h2 className=" z-10 relative text-7xl -mt-10 text-white">We Build Legacies</h2>
            </section>
            <section className=" py-48 px-24 flex flex-col text-center">
                <h3 className=" text-white text-4xl pb-16">YOUR HOME, OUR HEARTBEAT</h3>
                <p className=" text-white">
                    Rosamond Construction was founded in 2018 in Springdale, Arkansas. Led by Savannah and Todd Rosamond, Rosamond Construction champions the Rosamond family's storied legacy of custom construction, cabinetry and woodwork in Arkansas and the Southern USA. As genuine Arkansans, we are deeply rooted in this land and its traditions. We're not a faceless corporation; we're a family, and we cherish the personal touch and understanding that only a local, family-owned business can bring. This rich heritage, combined with our modern sensibilities, has enabled us to reinvent Southern craftsmanship for today's homes. In the South, we know that a home is more than just bricks and beams—it's the laughter of Sunday dinners, the family stories shared on front porches, and the gentle buzz of evening gatherings with friends and family. Every nail, beam, and brush stroke in our projects exudes Southern grace, luxury, integrity, and quality. We understand the essence of Arkansas, and we pour that love and knowledge into every endeavor. While big companies may lose sight of individual dreams within their vast operations, our family-centered approach ensures that you always come first. These elements are a testament to our commitment, intertwining dreams and aspirations with cherished memories. With Rosamond Construction, you're investing in a home of unparalleled comfort, a lasting legacy that stands the test of time, ensuring a foundation of trust and quality for generations to come. But our promise goes even deeper. At Rosamond Construction, honesty and integrity aren’t mere words—they’re the bedrock of our operations. We’re proud to offer unparalleled craftsmanship that not only meets, but surpasses our competitors, all while ensuring that our clients receive the best value for their investment. Choosing us means opting for the personal touch, local understanding, and commitment that only a family business can provide. When you choose us, you're not just getting a home—you're getting luxury, quality, and integrity, all wrapped up in an unbeatable package. This is our commitment: unmatched luxury and quality for your hard-earned money, every single time.
                </p>
            </section>
            <BuildsSection />
            <StepsSection />
            <TestimonialSection />
            <DreamFormSection />
        </div>
    )
}