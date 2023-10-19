import BuildsSwiper from "./BuildsSwiper";

export default function BuildsSection() {
  return (
        <section className=' flex gap-10 py-28 px-4 sm:px-8 md:px-16 flex-col justify-center items-center w-full'>
            <div className=" max-w-[1920px] w-full">
                <h2 className=' text-4xl text-white'>Crafted Excellence: Our Proudest Builds</h2>
                <BuildsSwiper />
            </div>
        </section>
  )
}
