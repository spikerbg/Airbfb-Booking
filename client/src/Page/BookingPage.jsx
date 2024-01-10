import { useEffect, useState } from "react";
import AccountNav from "../AccountNav";
import axios from 'axios'

export default function BookingPage() {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    axios.get('/booking').then(res => {
      setBookings(res.data)
    })
  }, [])
  console.log(bookings)
  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 && bookings.map((booking, index) => {
          <div>
            {booking.checkIn} s {booking.checkOut}
          </div>
        })}
      </div>
    </div>
  )
}
