import Link from "next/link"
import logo from '../public/logo.svg'
import Image from "next/image"

export default function Nav() {
  return (
    <header className=" z-30 absolute px-4 sm:px-8 md:px-16 left-0 top-0 right-0 w-full flex justify-center items-center bg-transparent">
        <div className=" max-w-[1920px] flex w-full flex-row justify-between items-center py-11">
            <div className="flex flex-row gap-5 items-baseline">
                <Image height={26} src={logo} alt="logo" />
                <h1 className=" text-2xl">ROSAMOND CONSTRUCTION</h1>
            </div>
            <nav className="flex flex-row gap-7">
                <Link className=" text-white text-base" href={'/'}>Home</Link>
                <Link className=" text-white text-base" href={'/aboutus'}>About Us</Link>
                <Link className=" text-white text-base" href={'/services'}>Services</Link>
                <Link className=" text-white text-base" href={'/portfolio'}>Portfolio</Link>
                <Link className=" text-white text-base" href={'/contact'}>Contact</Link>
            </nav>
        </div>
    </header>
  )
}
