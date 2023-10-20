import BuildsSwiper from "./BuildsSwiper";

export default function BuildsSection() {
  return (
        <section className=' flex gap-10 py-28 pl-4 sm:pl-8 md:pl-16 2xl:px-16 flex-col justify-center items-center w-full'>
            <div className=" max-w-[1920px] w-full flex flex-col justify-center items-center gap-10">
                <h2 className=' text-5xl text-white font-serif text-center'>Crafted Excellence: Our Proudest Builds</h2>
                <BuildsSwiper />
            </div>
        </section>
  )
}
