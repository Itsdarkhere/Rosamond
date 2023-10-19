'use client'
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import hamburger from '../public/hamburger.svg'

{/* <Link className=" text-white text-base font-sans" href={'/'}>Home</Link>
                <Link className=" text-white text-base font-sans" href={'/aboutus'}>About Us</Link>
                <Link className=" text-white text-base font-sans" href={'/services'}>Services</Link>
                <Link className=" text-white text-base font-sans" href={'/portfolio'}>Portfolio</Link>
                <Link className=" text-white text-base font-sans" href={'/contact'}>Contact</Link> */}

export default function BurgerMenu() {
    return (
      <div className='md:hidden relative'>
        <Menu>
            <Menu.Button className='focus:outline-none focus:ring-2 focus:ring-blue-500'>
                <Image src={hamburger} alt='hamburger menu' height={25} />
            </Menu.Button>
            <Menu.Items className="z-20 mt-2 w-64 bg-white font-serif shadow-lg absolute top-5 right-0 flex flex-col border border-gray-200 divide-y divide-gray-100 rounded-md">
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`block px-4 py-4 text-lg ${active ? 'bg-blue-500 text-white' : 'text-gray-900'} hover:bg-blue-400 hover:text-white`}
                    href="/"
                    >
                        Home
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`block px-4 py-4 text-lg ${active ? 'bg-blue-500 text-white' : 'text-gray-900'} hover:bg-blue-400 hover:text-white`}
                    href="/aboutus"
                    >
                        About Us
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`block px-4 py-4 text-lg ${active ? 'bg-blue-500 text-white' : 'text-gray-900'} hover:bg-blue-400 hover:text-white`}
                    href="/services"
                    >
                        Services
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`block px-4 py-4 text-lg ${active ? 'bg-blue-500 text-white' : 'text-gray-900'} hover:bg-blue-400 hover:text-white`}
                    href="/portfolio"
                    >
                        Portfolio
                    </a>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                    <a
                    className={`block px-4 py-4 text-lg ${active ? 'bg-blue-500 text-white' : 'text-gray-900'} hover:bg-blue-400 hover:text-white`}
                    href="/contact"
                    >
                        Contact
                    </a>
                )}
                </Menu.Item>
            </Menu.Items>
        </Menu>
      </div>
    )
}
