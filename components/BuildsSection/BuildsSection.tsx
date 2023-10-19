import BuildsSwiper from "./BuildsSwiper";

export default function BuildsSection() {
  return (
        <section className=' flex gap-10 py-28 flex-col justify-center items-center w-full'>
            <div className=" max-w-[1920px] w-full pl-4 sm:pl-8 md:pl-16">
                <h2 className=' text-4xl text-white'>Crafted Excellence: Our Proudest Builds</h2>
                <BuildsSwiper />
            </div>
        </section>
  )
}
