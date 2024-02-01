import Link from "next/link";
import logo from '../public/logo.svg'
import twitter from '../public/twitter2.svg'
import instagram from '../public/instagram.svg'
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" mt-28 flex flex-row justify-center" style={{ backgroundColor: '#1C1C1E'}}>
        <div className="max-w-[1920px] flex flex-col justify-center items-start sm:items-center w-full pb-12">
            <div className="flex flex-row-reverse md:flex-row w-full pt-14">
                <div className="pb-20 px-20 flex flex-col justify-center items-center">
                    <Image height={130} src={logo} alt="logo" />
                    <div className="flex flex-row justify-center items-center gap-3 mt-5">
                        <Link href={"https://twitter.com/rosamondhomes"} target="_blank" className=" bg-zinc-200 rounded-full p-2">
                            <Image src={twitter} height={15} alt="twitter logo" />
                        </Link>
                        <Link href={"https://www.instagram.com/rosamondconstruction"} target="_blank" className=" bg-zinc-200 rounded-full p-2">
                            <Image src={instagram} height={15} alt="instagram logo" />
                        </Link>
                    </div>
                </div>
                <div className="w-full h-full gap-10 pl-5 md:pl-20 flex flex-col justify-between md:pr-24">
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
                            <Link className="text-white hover:text-gray-200 font-sans text-sm" href={'/contact'}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className=" text-white pl-5 sm:pl-0 text-sm mt-10 sm:mt-0">© 2024. Rosamond Construction</p>
        </div>
    </footer>
  )
}
