import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { Link } from 'react-router-dom'

export default function SearchPage() {
  const location = useLocation();
  const [places,setPlaces] = useState([])
  const searchParams = new URLSearchParams(location.search);
  useEffect(() =>{
    axios.get('/allplaces').then(response  =>{
    setPlaces(response.data)
    })
  
  },[])
  
  // Access query parameters
  const locationParam = searchParams.get('location');
  const startDateParam = searchParams.get('startDate');
  const endDateParam = searchParams.get('endDate');
  const noOfGuestsParam = searchParams.get('noOfGuests');

  const formattedStartDate = format(new Date(startDateParam), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDateParam), "dd MMMM yy")
  const range = `${formattedStartDate} to ${formattedEndDate}`
  const filteredPlaces = places.filter(
    place => place.address.includes(locationParam) || locationParam.includes(place.address)
  );
  return (
    <div className='mt-2'>
      <div>
      <p className='text-sm mx-6'>Stays from {range} for {noOfGuestsParam} guests</p>
      <h1 className='text-xl font-semibold mt-2 mb-6 mx-6'>Stay in {locationParam}</h1>
      {/* <p>Start Date: {startDateParam}</p>
      <p>End Date: {endDateParam}</p> */}
      {filteredPlaces.map((place, index) => (
        <div className='my-8 gap-4 gap-y-8 px-8 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4'>
  <Link to={'/place/'+place._id} key={index}>
            <div className='bg-gray-300 rounded-2xl flex mb-2'>
            <img className='rounded-2xl object-fill' src={'http://localhost:3000/uploads/'+place.photos?.[0]} alt="photos" />

            </div>
            <div></div>
            <h3 className='text-sm font-bold'>{place.address}</h3>
            <h2 className='text-md text-gray-500'>{place.title}</h2>
            <div>
             <span className='font-bold'>{place.price}EUR</span> per night
            </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}
