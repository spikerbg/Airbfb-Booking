import { useState } from "react"
import { differenceInCalendarDays } from "date-fns";
import axios from 'axios'


export default function BookingSidebar({place}) {
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [redirect, setRedirect] = useState('')
    let numberOfNight = 0
    if (checkIn && checkOut) {
        numberOfNight = differenceInCalendarDays(new Date(checkOut),new Date (checkIn))
    }

    const bookPlace = async (e) =>{
        e.preventDefault()
        const response = await axios.post('/booking', {checkIn,checkOut,numberOfGuests,
            name,phone,
            place:place._id, 
            price:numberOfNight * place.price,
        })
            const bookingId = response.data._id
            setRedirect(`/account/bookings/${bookingId}`)
    }
    if(redirect) {
        return <Navigate to={redirect} />
    }


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
                value={checkIn}
                onChange={e => setCheckIn(e.target.value)}
            />
        </div>
        <div className="p-4">
            <label>Check Out:</label>
            <input type="date"
                className='w-full border mb-2 text-2xl mt-4 bg-gray-100'
                value={checkOut}
                onChange={e => setCheckOut(e.target.value)}
            />
        </div>
        </div>
        <div className="p-4">
            <label>Number of Guests:</label>
            <input type="number"
                className='w-full border mb-2 text-2xl mt-4 bg-gray-100'
                value={numberOfGuests}
                onChange={e => setNumberOfGuests(e.target.value)}
            />
        </div>
        {numberOfNight >0 && (
            <div className="p-4">
            <label>Full name:</label>
            <input type="text"
                className='w-full border mb-2 text-2xl mt-4 bg-gray-100'
                placeholder="Ivan Ivanov"
                value={name}
                onChange={e => setName(e.target.value)}
            />
             <label>Phone:</label>
            <input type="text"
                className='w-full border mb-2 text-2xl mt-4 bg-gray-100'
                placeholder="089532142"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
        </div>
        
        )}
        <button onClick={bookPlace} className="w-full mt-4 text-white bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            Book this Place
            {numberOfNight > 0 &&(
              <span> {numberOfNight * place.price}EUR</span>
            )}
        </button>

    </div>
    </div>
  )
}
