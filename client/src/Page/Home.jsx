import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {

  const [places,setPlaces] = useState([])
useEffect(() =>{
  axios.get('/allplaces').then(response  =>{
  setPlaces(response.data)
  })

},[])

  return (
    <div className='my-8 gap-4 gap-y-8 px-8 grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4'>
    {places.length > 0 &&
        places.map((place, index) => (

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

        ))}
    </div>
  )
}
