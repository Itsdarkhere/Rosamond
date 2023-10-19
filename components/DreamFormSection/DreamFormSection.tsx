
export default function DreamFormSection() {
  return (
    <section className='w-full px-4 sm:px-8 md:px-16 pb-16 flex flex-row justify-center items-center'>
        <div className=" max-w-[1920px] w-full flex flex-row gap-10">
            <div className=' w-1/3 flex flex-col gap-10'>
            <h4 className=' text-white text-2xl'>Pull Up a Chair & Share Your Dream With Us</h4>
            <p className=' text-white text-lg'>At Rosamond Construction, we craft homes, cabinetry, and timeless spaces, but our true masterpiece is the enduring bond we forge with you. Share your vision, and together, let's shape dreams into reality.</p>
            </div>
            <form className=' bg-white shadow-sm rounded-lg flex flex-col justify-start items-start p-4'>
            <h5 className=' text-3xl text-black'>Begin Your Rosamond Journey</h5>
            <div className="col-span-full">
                <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
                >
                My name is
                </label>
                <div className="mt-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                    type="text"
                    name="username"
                    id="Name Lastname"
                    required
                    autoComplete="username"
                    className="block w-full border-0 px-2 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    />
                </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                <label
                    htmlFor="location"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Im located in
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    name="location"
                    id="location"
                    autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div className="sm:col-span-3">
                <label
                    htmlFor="startdate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    My preferred start date is
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    name="last-name"
                    id="startdate"
                    autoComplete="family-name"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
            </div>
            <h6>Im interested in...</h6>
            {/* Something */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    My best number is
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    name="number"
                    id="number"
                    autoComplete="given-name"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>

                <div className="sm:col-span-3">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    My best email address is
                </label>
                <div className="mt-1">
                    <input
                    type="text"
                    name="last-name"
                    id="email"
                    autoComplete="family-name"
                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                </div>
            </div>
            <div className="mt-3 sm:col-span-3">
                <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
                >
                My estimated budget is
                </label>
                <div className="mt-1">
                <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md h-9 border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                </select>
                </div>
            </div>
            <div className="mt-3 col-span-full">
                <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
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
            <button className=' px-8 py-4 bg-black text-white' type='submit'>
                Submit Inquiry
            </button>
            </form>
        </div>
    </section>
  )
}
