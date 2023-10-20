'use client'
import Image from "next/image";
import submit from '../../public/submit.svg';
import { Dispatch, SetStateAction } from "react"
import chevrondown from '../../public/chevrondown.svg'
import { useState } from "react";

export default function DreamFormSection() {
    const [selectedValue, setSelectedValue] = useState('Custom Home Build');
    const [selectValue, setSelectValue] = useState('')
    const options = [
        'Custom Home Build',
        'Interior Remodel',
        'Custom Woodworking',
        'Custom Cabinetry',
        'General Inquiry',
        'Other'
    ];

  return (
    <section style={{ background: 'linear-gradient(120deg, #686810, #4C5A1C, #314B26, #173D2E)' }} className='w-full px-4 sm:px-8 md:px-16 pb-16 pt-16 flex flex-row justify-center items-center'>
        <div className=" max-w-[1920px] w-full flex flex-col md:flex-row justify-center gap-10">
            <div className=' w-full md:w-1/3 flex flex-col gap-5 sm:gap-10'>
                <h4 className=' text-white text-6xl font-serif text-center md:text-start'>Pull Up a Chair & Share Your Dream With Us</h4>
                <p className=' text-white text-xl sm:text-4xl font-sans text-center md:text-start'>At Rosamond Construction, we craft homes, cabinetry, and timeless spaces, but our true masterpiece is the enduring bond we forge with you. Share your vision, and together, let's shape dreams into reality.</p>
            </div>
            <form className='w-full  md:w-2/3 max-w-[800px] bg-white font-sans shadow-sm rounded-lg flex flex-col justify-start items-start p-2 pb-10'>
                <h5 className=' text-4xl text-black font-semibold py-7 px-6 border-b w-full'>Begin Your Rosamond Journey</h5>
                <div className="col-span-full w-full px-6 mt-4">
                    <label
                    htmlFor="title"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                    >
                    My name is
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="Name Lastname"
                        required
                        autoComplete="username"
                        className="block w-full border-0 border-b-2 outline-none py-2 text-gray-900 placeholder:text-gray-400 focus:border-b-formfocus sm:text-sm sm:leading-6"
                        placeholder="Name Lastname"
                    />
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full px-6 mt-9">
                    <div className="sm:col-span-3">
                    <label
                        htmlFor="location"
                        className="block text-2xl font-medium leading-10 text-gray-900"
                    >
                        Im located in
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="location"
                        id="location"
                        autoComplete="given-name"
                        placeholder="City, State"
                        className="block w-full border-0 border-b-2 outline-none py-2 text-gray-900 placeholder:text-gray-400 focus:border-b-formfocus sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label
                        htmlFor="startdate"
                        className="block text-2xl font-medium leading-10 text-gray-900"
                    >
                        My preferred start date is
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="last-name"
                        id="startdate"
                        placeholder="01/03/2024"
                        autoComplete="family-name"
                        className="block w-full border-0 border-b-2 outline-none py-2 text-gray-900 placeholder:text-gray-400 focus:border-b-formfocus sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>
                <h6 className=" block text-2xl font-medium text-gray-900 mx-6 mt-9 pb-2 leading-10">Im interested in...</h6>
                <div className="flex flex-row flex-wrap gap-4 mx-6">
                    {options.map((option) => (
                        <RadioButton
                            key={option}
                            label={option}
                            value={option}
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue}
                        />
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full px-6 mt-9">
                    <div className="sm:col-span-3">
                        <label
                            htmlFor="number"
                            className="block leading-10	text-2xl font-medium text-gray-900"
                        >
                            My best number is
                        </label>
                        <div className="mt-1">
                            <input
                            type="text"
                            name="number"
                            id="number"
                            placeholder="+1 (407) 123-3211"
                            autoComplete="given-name"
                            className="block w-full border-0 border-b-2 outline-none py-2 text-gray-900 placeholder:text-gray-400 focus:border-b-formfocus sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                    <label
                        htmlFor="email"
                        className="block text-2xl font-medium leading-10 text-gray-900"
                    >
                        My best email address is
                    </label>
                    <div className="mt-1">
                        <input
                        type="text"
                        name="last-name"
                        id="email"
                        placeholder="Email"
                        autoComplete="family-name"
                        className="block w-full border-0 border-b-2 outline-none py-2 text-gray-900 placeholder:text-gray-400 focus:border-b-formfocus sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>
                <div className="sm:col-span-3 w-full px-6 mt-9">
                    <label
                    htmlFor="country"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                    >
                    My estimated budget is
                    </label>
                    <div className="mt-2 max-w-[450px] relative flex flex-row justify-center items-center w-full">
                        <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            defaultValue={''}
                            onChange={(e) => setSelectValue(e.target.value)}
                            className={`${selectValue === '' ? 'text-gray-400' : 'text-gray-900'} appearance-none rounded-2xl ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-formfocus w-full h-full py-4 px-3 sm:text-sm sm:leading-6 border-0 outline-none`}
                        >
                            <option value="" disabled>Select budget</option>
                            <option value='sss' className="">United States</option>
                            <option value='s' className="">Canada</option>
                            <option value='ss' className="">Mexico</option>
                        </select>
                        <Image className=" absolute touch-none right-5" src={chevrondown} alt="arrow down" height={9} />
                    </div>
                </div>
                <div className="col-span-full w-full px-6 mt-9">
                    <label
                    htmlFor="about"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                    >
                        More about my project
                    </label>
                    <div className="mt-2">
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            placeholder="Optional"
                            className="block w-full h-40 px-2 rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-formfocus sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <button className=' mx-6 px-8 py-4 flex flex-row items-center justify-center gap-2 rounded-xl mt-10 bg-black text-white' type='submit'>
                    <Image src={submit} height={16} alt="submit icon" />
                    Submit Inquiry
                </button>
            </form>
        </div>
    </section>
  )
}

const RadioButton = ({label, value, selectedValue, setSelectedValue}: {label: string, value: string, selectedValue: string, setSelectedValue: Dispatch<SetStateAction<string>>}) => {
    return (
        <label className={`${selectedValue === value ? 'bg-black text-white border-formfocus' : ' bg-white text-gray-400 border-gray-400'} inline-flex items-center cursor-pointer py-3 px-5 text-center rounded-2xl border-2`}>
            <input
                type="radio"
                className="hidden"
                value={value}
                checked={selectedValue === value}
                onChange={() => setSelectedValue(value)}
            />
            <span className="touch-none">{label}</span>
        </label>
    )
}
