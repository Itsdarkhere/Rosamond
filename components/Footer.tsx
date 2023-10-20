import Link from "next/link";
import logo from '../public/logo.svg'
import tiktok from '../public/tok.svg'
import facebook from '../public/fb.svg'
import linkedin from '../public/link.svg'
import instagram from '../public/ig.svg'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" pt-28 flex flex-row" style={{ backgroundColor: '#161616'}}>
        <div className="flex flex-row-reverse md:flex-row w-full pt-14 pb-12" style={{ backgroundColor: '#1C1C1E'}}>
            <div className="pb-20 px-20 flex flex-col justify-center items-center">
                <Image height={130} src={logo} alt="logo" />
                <div className="flex flex-row justify-center items-center gap-3 mt-8">
                    <Image src={facebook} height={21} alt="facebook logo" />
                    <Image src={instagram} height={21} alt="facebook logo" />
                    <Image src={linkedin} height={21} alt="facebook logo" />
                    <Image src={tiktok} height={21} alt="facebook logo" />
                </div>
            </div>
            <div className="w-full h-full gap-10 pl-5 md:pl-20 flex flex-col justify-between pr-24">
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                    <div className="flex flex-col gap-2">
                        <Link className="text-white  hover:text-gray-200 font-sans font-semibold text-lg" href={'/'}>Home</Link>
                        <Link className="text-white  hover:text-gray-200 font-sans font-semibold text-lg" href={'/aboutus'}>About Us</Link>
                        <Link className="text-white  hover:text-gray-200 font-sans font-semibold text-lg" href={'/portfolio'}>Portfolio</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link className="text-white  hover:text-gray-200 font-sans font-semibold text-lg" href={'/services'}>Services</Link>
                        <Link className="text-white  hover:text-gray-200 font-sans text-sm" href={'/services'}>Custom Home Builds</Link>
                        <Link className="text-white  hover:text-gray-200 font-sans text-sm" href={'/services'}>Cabinetry</Link>
                        <Link className="text-white  hover:text-gray-200 font-sans text-sm" href={'/services'}>Woodworking</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link className="text-white hover:text-gray-200 font-sans font-semibold text-lg" href={'/contact'}>Customer Care</Link>
                        <Link className="text-white hover:text-gray-200 font-sans text-sm" href={'/aboutus'}>Contact Us</Link>
                    </div>
                </div>
                <p className=" text-white text-sm">© 2023. Rosamond Construction</p>
            </div>
        </div>
    </footer>
  )
}
