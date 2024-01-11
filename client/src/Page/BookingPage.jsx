import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from 'axios'
import { differenceInCalendarDays, format } from "date-fns"
import { Link } from "react-router-dom";

export default function BookingPage() {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get('/booking').then(res => {
      setBookings(res.data)
    })
  }, [])

  return (
    <div className="mx-8">
      <AccountNav />
      <div>
        {bookings?.length > 0 && bookings.map(booking => (

          <Link to={`/account/bookings/${booking._id}`} key={booking._id} className="flex gap-4 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            {booking.place.photos.length > 0 && (
              <div className="w-60">
                <img className='object-cover ' src={'http://localhost:3000/uploads/' + booking.place.photos[0]} alt='photos' />
              </div>
            )}
            <div className="py-4 pr-3 grow">
              <h2 className="text-xl">{booking.place.title}</h2>
              <div className="flex gap-2 items-center border-t border-gray-300 mt-2 py-2">
              From
                <div className="flex gap-1 items-center">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                  {format(new Date(booking.checkIn), 'dd-MM-yyyy')}
                </div>
                to
                <div className="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>

                {format(new Date(booking.checkOut), 'dd-MM-yyyy')}
                </div>

              </div>
              <div className="">
                {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights <br />
                Total price: {booking.price} EUR
              </div>
            </div>

          </Link>
        ))}
      </div>
    </div>
  )
}
