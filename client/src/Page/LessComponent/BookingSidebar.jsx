

export default function BookingSidebar({place}) {
  return (
    <div>
    <div className="bg-white shadow p-4 rounded-2xl gap-4">
        <div className="text-2xl text-center">Price: {place.price}EUR per Night</div>
         <br />
         <div className="flex items-center">
         <div className="p-4">
            <label>Check in:</label>
            <input type="date"
                className='w-full border mb-2 text-2xl mt-4 bg-gray-100'
                // value={price}
                // onChange={e => setPrice(e.target.value)}
            />
        </div>
        <div className="p-4">
            <label>Check Out:</label>
            <input type="date"
                className='w-full border mb-2 text-2xl mt-4 bg-gray-100'
                // value={price}
                // onChange={e => setPrice(e.target.value)}
            />
        </div>
        </div>
        <div className="p-4">
            <label>Number of Guests:</label>
            <input type="number"
                className='w-full border mb-2 text-2xl mt-4 bg-gray-100'
                // value={1}
                // onChange={e => setPrice(e.target.value)}
            />
        </div>
        <button className="w-full mt-4 text-white bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Book this Place
        </button>

    </div>
    </div>
  )
}
