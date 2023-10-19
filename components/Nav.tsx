import Link from "next/link"

export default function Nav() {
  return (
    <header className=" z-30 fixed left-0 top-0 right-0 w-full flex justify-center items-center bg-transparent">
        <div className=" max-w-[1920px] flex w-full flex-row justify-between items-center py-11 px-4 sm:px-8 md:px-16">
            <div>
                <h1>ROSAMOND CONSTRUCTION</h1>
            </div>
            <nav className="flex flex-row gap-7">
                <Link href={'/'}>Home</Link>
                <Link href={'/aboutus'}>About Us</Link>
                <Link href={'/services'}>Services</Link>
                <Link href={'/portfolio'}>Portfolio</Link>
                <Link href={'/contact'}>Contact</Link>
            </nav>
            <div>S</div>
        </div>
    </header>
  )
}
