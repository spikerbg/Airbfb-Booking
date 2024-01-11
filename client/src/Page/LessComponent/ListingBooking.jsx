import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'



export default function ListingBooking() {
    const {id} = useParams()
    const [booking,setBookings] = useState(null)
    useEffect(()=>{
      axios.get('/booking').then(res => {
        const foundBooking = res.data.find(({_id}) => _id === id)
        setBookings(foundBooking)
      })
    },[id])
  return (
    <div>
      dsadsadsa{id}
    </div>
  )
}
