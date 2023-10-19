
export default function DreamFormSection() {
  return (
    <section style={{ background: 'linear-gradient(120deg, #686810, #4C5A1C, #314B26, #173D2E)' }} className='w-full px-4 sm:px-8 md:px-16 pb-16 pt-16 flex flex-row justify-center items-center'>
        <div className=" max-w-[1920px] w-full flex flex-row gap-10">
            <div className=' w-1/3 flex flex-col gap-10'>
                <h4 className=' text-white text-6xl font-serif'>Pull Up a Chair & Share Your Dream With Us</h4>
                <p className=' text-white text-4xl font-sans'>At Rosamond Construction, we craft homes, cabinetry, and timeless spaces, but our true masterpiece is the enduring bond we forge with you. Share your vision, and together, let's shape dreams into reality.</p>
            </div>
            <form className=' w-2/3 bg-white font-sans shadow-sm rounded-lg flex flex-col justify-start items-start p-2 pb-10'>
                <h5 className=' text-3xl text-black font-semibold py-5 px-6 border-b w-full'>Begin Your Rosamond Journey</h5>
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
                        className="block w-full text-xl border-0 border-b-4 bg-transparent py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                        className="block w-full text-xl border-0 border-b-4 bg-transparent py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                        className="block w-full text-xl border-0 border-b-4 bg-transparent py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                    </div>
                </div>
                <h6 className=" block text-2xl font-medium text-gray-900 mx-6 mt-9 leading-10">Im interested in...</h6>
                <div className="flex flex-row flex-wrap gap-4 mx-6">
                    <button className=" py-3 px-5 text-center text-white bg-black rounded-2xl border">Custom Home Build</button>
                    <button className=" py-3 px-5 text-center text-gray-300 bg-white rounded-2xl border border-gray-300">Custom Home Build</button>
                    <button className=" py-3 px-5 text-center text-gray-300 bg-white rounded-2xl border border-gray-300">Interior Remodel</button>
                    <button className=" py-3 px-5 text-center text-gray-300 bg-white rounded-2xl border border-gray-300">Custom Woodworking</button>
                    <button className=" py-3 px-5 text-center text-gray-300 bg-white rounded-2xl border border-gray-300">Custom Cabinetry</button>
                    <button className=" py-3 px-5 text-center text-gray-300 bg-white rounded-2xl border border-gray-300">General Inquiry</button>
                    <button className=" py-3 px-5 text-center text-gray-300 bg-white rounded-2xl border border-gray-300">Other</button>
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
                        className="block w-full text-xl border-0 border-b-4 bg-transparent py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                        className="block w-full text-xl border-0 border-b-4 bg-transparent py-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                    <div className="mt-1">
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block max-w-[450px] w-full rounded-md border-0 py-4 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                    </div>
                </div>
                <div className="col-span-full w-full px-6 mt-9">
                    <label
                    htmlFor="about"
                    className="block text-2xl font-medium leading-10 text-gray-900"
                    >
                    More about my project
                    </label>
                    <div className="mt-1">
                    <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>
                <button className=' mx-6 px-8 py-4 rounded-xl mt-10 bg-black text-white' type='submit'>
                    Submit Inquiry
                </button>
            </form>
        </div>
    </section>
  )
}
