'use client'
import Link from "next/link"
import logo from '../public/logo.svg'
import Image from "next/image"
import BurgerMenu from "./BurgerMenu"
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className=" z-30 absolute px-4 sm:px-8 md:px-16 left-0 top-0 right-0 w-full flex justify-center items-center bg-transparent">
        <div className=" max-w-[1920px] flex w-full flex-row justify-between items-center py-11">
            <Link href="/" className="flex flex-row gap-3 items-baseline">
                <Image height={26} src={logo} alt="logo" />
                <h1 className=" text-xl sm:text-2xl font-serif">ROSAMOND CONSTRUCTION</h1>
            </Link>
            <nav className="hidden md:flex flex-row gap-7">
                <Link className={`${pathname === '/' && 'text-gray-400'} text-white hover:text-gray-200 text-base font-sans`} href={'/'}>Home</Link>
                <Link className={`${pathname === '/aboutus' && 'text-gray-400'} text-white hover:text-gray-200 text-base font-sans`} href={'/aboutus'}>About Us</Link>
                <Link className={`${pathname === '/services' && 'text-gray-400'} text-white hover:text-gray-200 text-base font-sans`} href={'/services'}>Services</Link>
                <Link className={`${pathname === '/portfolio' && 'text-gray-400'} text-white hover:text-gray-200 text-base font-sans`} href={'/portfolio'}>Portfolio</Link>
                <Link className={`${pathname === '/contact' && 'text-gray-400'} text-white hover:text-gray-200 text-base font-sans`} href={'/contact'}>Contact</Link>
            </nav>
            <BurgerMenu />
        </div>
    </header>
  )
}
