import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import ListingGallery from "./LessComponent/ListingGallery"
import { differenceInCalendarDays, format } from "date-fns"



export default function ListingBooking() {
  const { id } = useParams()
  const [booking, setBooking] = useState(null)
  useEffect(() => {
    if (id) {
      axios.get('/booking').then(response => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return '';
  }


  return (
    <div className="mt-4 mb-4 mx-8 px-8 py-8">
      <h1 className="text-3xl">{booking.place.title}</h1>
      <a className="flex gap-1 my-2 block font-semibold underline" target="_blank" href={'https://maps.google.com/?q=' + booking.place.address} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>

        {booking.place.address}</a>
      <div className="bg-gray-100 p-4 my-4 rounded-2xl shadow-sm flex items-center justify-between">
        <div>
          <h2 className="text-xl">Your booking information</h2>
          <div className="flex gap-2 items-center border-t border-gray-300 mt-2 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>

            {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights |
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
        </div>
        <div className="bg-primary p-4 text-white rounded-2xl">
          <div>
            Total price:
          </div>
          <div className="text-2xl">
            {booking.price} EUR
          </div>
        </div>

      </div>
      <ListingGallery place={booking.place} />
    </div>
  )
}
