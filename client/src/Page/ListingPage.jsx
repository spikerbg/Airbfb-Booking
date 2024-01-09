import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import BookingSidebar from "./LessComponent/BookingSidebar"


export default function ListingPage() {
    const { id } = useParams()
    const [place, setPlace] = useState('')
    const [showAllPhotos, setShowAllPhotos] = useState(false)
    useEffect(() => {
        if (!id) {
            return
        }
        axios.get(`/places/${id}`).then(res => {
            setPlace(res.data)
        })
    }, [id])

    if (showAllPhotos) {
        return (
            <div className="absolute inset-0 bg-black min-h-screen items-center text-white">
                <div className="bg-black p-32 grid gap-2">
                    <div>
                        <h2 className="text-3xl">Photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className="fixed right-12 top-4 flex gap-1 py-2 px-4 rounded-2xl bg-white text-black shadow shadow-md ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                            Close photos</button>
                    </div>
                    {place?.photos?.length > 0 && place.photos.map(photo =>
                        <div>
                            <img src={'http://localhost:3000/uploads/' + photo} alt="photos" />
                            <span>dsadsadsa</span>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="mt-4 mb-4 mx-8 px-8 py-8">
            <h1 className="text-3xl">{place.title}</h1>
            <a className="flex gap-1 my-2 block font-semibold underline" target="_blank" href={'https://maps.google.com/?q=' + place.address} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                {place.address}</a>
            <div className="relative">
                <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
                    <div>
                        {place.photos?.[0] && (
                            <div>
                                <img className="aspect-square object-cover" src={'http://localhost:3000/uploads/' + place.photos[0]} alt=""></img>
                            </div>
                        )}
                    </div>
                    <div className="grid gap-2 overflow-hidden">
                        {place.photos?.[1] && (
                            <img src={'http://localhost:3000/uploads/' + place.photos[1]} alt=""></img>
                        )}
                        {place.photos?.[2] && (
                            <img src={'http://localhost:3000/uploads/' + place.photos[2]} alt=""></img>
                        )}
                    </div>
                    <button onClick={() => setShowAllPhotos(true)} className="absolute buttom-8 right-0 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-300">Show more photos</button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 mt-8">
                <div>
                <div className="my-4">
                <h2 className="font-semibold text-2xl">Description</h2>
                {place.description}
            </div>
                Check in {place.checkIn} <br />
                Check out {place.checkOut}  <br />
                Max Number of guests: {place.maxGuests}
                
                </div>
                <BookingSidebar place={place} />
            </div>
            <div className="text-2xl font-semibold">
                Extra info
            </div>
            <div className="my-4 text-sm text-gray-500 leading-4">
                    {place.extraInfo}
                </div>
        </div>
    )
}
