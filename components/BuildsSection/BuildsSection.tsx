import BuildsSwiper from "./BuildsSwiper";

export default function BuildsSection() {
  return (
        <section className=' flex gap-10 py-28 px-32 flex-col justify-center items-center w-full'>
          <h2 className=' text-4xl text-white'>Crafted Excellence: Our Proudest Builds</h2>
          <BuildsSwiper />
        </section>
  )
}
