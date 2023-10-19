import Link from "next/link";
import logo from '../public/logo.svg'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" pt-20 flex flex-row">
        <div className="pb-20 px-20 flex flex-col justify-center items-center">
            <Image height={130} src={logo} alt="logo" />
            <div className="flex flex-row gap-3 mt-6">
                <div className=" w-5 h-5 bg-gray-300 rounded-full"></div>
                <div className=" w-5 h-5 bg-gray-300 rounded-full"></div>
                <div className=" w-5 h-5 bg-gray-300 rounded-full"></div>
                <div className=" w-5 h-5 bg-gray-300 rounded-full"></div>
            </div>
        </div>
        <div className="w-full h-full pl-20 flex flex-col justify-between">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <Link className=" font-sans font-semibold" href={'/'}>Home</Link>
                    <Link className=" font-sans font-semibold" href={'/aboutus'}>About Us</Link>
                    <Link className=" font-sans font-semibold" href={'/portfolio'}>Portfolio</Link>
                </div>
                <div className="flex flex-col">
                    <Link className=" font-sans font-semibold" href={'/services'}>Services</Link>
                    <Link className=" font-sans" href={'/services'}>Custom Home Builds</Link>
                    <Link className=" font-sans" href={'/services'}>Cabinetry</Link>
                    <Link className=" font-sans" href={'/services'}>Woodworking</Link>
                </div>
                <div className="flex flex-col">
                    <Link className=" font-sans font-semibold" href={'/contact'}>Customer Care</Link>
                    <Link className=" font-sans" href={'/aboutus'}>Contact Us</Link>
                </div>
            </div>
            <p className=" text-white">© 2023. Rosamond Construction</p>
        </div>
    </footer>
  )
}
