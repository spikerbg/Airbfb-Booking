import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

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
      <p>Start Date: {startDateParam}</p>
      <p>End Date: {endDateParam}</p>
      {filteredPlaces.map((place, index) => (
        <div>
          <img className='rounded-2xl object-fill' src={'http://localhost:3000/uploads/'+place.photos?.[0]} alt="photos" />
          <h3 className='text-sm font-bold'>{place.address}</h3>
        </div>
      ))}
    </div>
    </div>
  )
}
