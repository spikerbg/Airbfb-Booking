import React from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

export default function SearchPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  // Access query parameters
  const locationParam = searchParams.get('location');
  const startDateParam = searchParams.get('startDate');
  const endDateParam = searchParams.get('endDate');
  const noOfGuestsParam = searchParams.get('noOfGuests');

  const formattedStartDate = format(new Date(startDateParam), "dd MMMM yy")
  const formattedEndDate = format(new Date(endDateParam), "dd MMMM yy")
  const range = `${formattedStartDate} to ${formattedEndDate}`
  return (
    <div className='mt-2'>
      <div>
      <p className='text-sm mx-6'>Stays from {range} for {noOfGuestsParam} guests</p>
      <h1 className='text-xl font-semibold mt-2 mb-6 mx-6'>Stay in {locationParam}</h1>
      <p>Start Date: {startDateParam}</p>
      <p>End Date: {endDateParam}</p>
    </div>
    </div>
  )
}
