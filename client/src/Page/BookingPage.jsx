import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from 'axios'
import {format} from "date-fns"

export default function BookingPage() {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get('/booking').then(res => {
      setBookings(res.data)
    })
  }, [])
  console.log(bookings)
  return (
    <div className="mx-8">
      <AccountNav />
      <div>
      {bookings?.length > 0 && bookings.map(booking => (
  <div key={booking._id} className="flex gap-4 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
     {booking.place.photos.length > 0 && (
      <div className="w-48">
            <img className='object-cover ' src={'http://localhost:3000/uploads/'+booking.place.photos[0]} alt='photos' />
          </div>
          )}
          <div className="py-4">
            <h2 className="text-xl">{booking.place.title}</h2>
          From {format(new Date(booking.checkIn), 'dd-MM-yyyy')} to {format(new Date(booking.checkOut),'dd-MM-yyyy')}
          </div>
    
  </div>
))}
      </div>
    </div>
  )
}
