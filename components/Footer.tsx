import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" pt-20 flex flex-row">
        <div className="p-20">
            <div className=" w-20 h-20 bg-gray-400 rounded-full"></div>
        </div>
        <div className="w-full h-full pl-20 flex flex-col justify-between">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/aboutus'}>About Us</Link>
                    <Link href={'/portfolio'}>Portfolio</Link>
                </div>
                <div className="flex flex-col">
                    <Link href={'/services'}>Services</Link>
                    <Link href={'/services'}>Custom Home Builds</Link>
                    <Link href={'/services'}>Cabinetry</Link>
                    <Link href={'/services'}>Woodworking</Link>
                </div>
                <div className="flex flex-col">
                    <Link href={'/contact'}>Customer Care</Link>
                    <Link href={'/aboutus'}>Contact Us</Link>
                </div>
            </div>
            <p className=" text-white">© 2023. Rosamond Construction</p>
        </div>
    </footer>
  )
}
