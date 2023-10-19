import BuildsSwiper from "./BuildsSwiper";

export default function BuildsSection() {
  return (
        <section className=' flex gap-10 py-28 px-4 sm:px-8 md:px-16 flex-col justify-center items-center w-full'>
            <div className=" max-w-[1920px] w-full flex flex-col justify-center items-center gap-5">
                <h2 className=' text-4xl text-white font-serif'>Crafted Excellence: Our Proudest Builds</h2>
                <BuildsSwiper />
            </div>
        </section>
  )
}
