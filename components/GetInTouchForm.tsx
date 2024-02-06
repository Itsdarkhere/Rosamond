'use client'
import { useState } from "react";
import phone from '../public/phone.svg'
import downicon from '../public/downicon.svg'
import mail from '../public/mail.svg'
import arrowright from '../public/arrowright.svg'
import Image from "next/image";
import Link from "next/link";

export default function GetInTouchForm() {
    const [submitted, setSubmitted] = useState(false);
    const [selectValue, setSelectValue] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                message: event.target.howdidyoufindus.value
            })
        })

        console.log(res);
        setSubmitted(true);
    }

    return (
        <form onSubmit={handleSubmit} className=" flex flex-col justify-start items-center w-full lg:w-1/2 py-20 px-5 md:px-20 lg:px-28">
            <div className="flex flex-col w-full max-w-[475px]">
                { submitted ? 
                    <div className="flex flex-col">
                        <h5 className=" text-5xl text-black font-serif pb-5">Thank you!</h5>
                        <p className=" text-sm text-black font-sans pb-7">We will reach out within 24 to 48 hours. To connect with us sooner, call us or email us directly to the contact information listed below.</p>
                    </div>
                    :
                    <div className="flex flex-col">
                        <h5 className=" text-5xl text-black font-serif pb-5">Get in Touch</h5>
                        <p className=" text-sm text-black font-sans pb-7">Whether you're an existing customer with inquiries or someone new with a dream project in mind, we're here to listen, assist, and guide. Get in touch with Rosamond Construction today.</p>
                    </div>
                }
                <div className={`${submitted && 'hidden'} w-full flex flex-col`}>
                    <div className="flex mb-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-formfocus">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            autoComplete="name"
                            className="block w-full outline-none border-0 px-2 bg-transparent py-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Name"
                        />
                    </div>
                    <div className="flex mb-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-formfocus">
                        <input
                            type="email" id="email" name="email"
                            required
                            autoComplete="Email"
                            className="block w-full outline-none border-0 px-2 bg-transparent py-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex mb-4 rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-formfocus">
                        <input
                            type="tel" id="phone" name="phone"
                            required
                            className="block w-full outline-none border-0 px-2 bg-transparent py-2.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className="flex flex-row justify-center items-center relative mb-4 ">
                        <select
                            id="howdidyoufindus"
                            name="howdidyoufindus"
                            required
                            defaultValue={''}
                            onChange={(e) => setSelectValue(e.target.value)}
                            className={`${selectValue === '' ? 'text-gray-400' : 'text-gray-900'} appearance-none rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-formfocus w-full h-full py-2.5 px-3 sm:text-sm sm:leading-6 border-0 outline-none`}
                        >
                            <option value="" disabled>How did you find us?</option>
                            <option value='sss' className="">Referral</option>
                            <option value='s' className="">Internet Search</option>
                            <option value='ss' className="">Social Media</option>
                            <option value='ss' className="">Advertising</option>
                            <option value='ss' className="">Website</option>
                            <option value='ss' className="">Review Sites</option>
                            <option value='ss' className="">Word of Mouth</option>
                            <option value='ss' className="">Other</option>
                        </select>
                        <Image className=" absolute touch-none right-5" src={downicon} alt="arrow down" height={10} />
                    </div>
                </div>
                <button disabled={submitted} type="submit" className=" rounded-full flex flex-row justify-center items-center gap-2 bg-black disabled:bg-gray-300 w-full py-3 font-sans">
                    SUBMIT
                    <Image src={arrowright} alt="arrow right" height={15} />
                </button>
                <Link style={{color: '#828282'}} className="font-sans mt-3 leading-5 text-sm underline w-full text-center" href={'#dreamform'}>Want to submit a construction idea?</Link>
                <div className="flex flex-row justify-start flex-wrap items-center text-black gap-10 mt-12">
                    <div className="flex flex-row gap-3">
                        <Image src={phone} alt="phone" height={23} />
                        <div className="flex flex-col text-xs">
                            <h6 className=" font-sans font-semibold">PHONE</h6>
                            <p className=" font-sans">(479) 957-2611</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3">
                        <Image src={mail} alt="email" height={23} />
                        <div className="flex flex-col text-xs">
                            <h6 className=" font-sans font-semibold">EMAIL</h6>
                            <p className=" font-sans">todd@rosamondconstruction.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}