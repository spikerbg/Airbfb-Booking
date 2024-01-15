import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import BookingSidebar from "./LessComponent/BookingSidebar"
import ListingGallery from "./LessComponent/ListingGallery"
import PerkIcon from "./LessComponent/PerkIcon"


export default function ListingPage() {
    const { id } = useParams()
    const [place, setPlace] = useState('')

    useEffect(() => {
        if (!id) {
            return
        }
        axios.get(`/places/${id}`).then(res => {
            setPlace(res.data)
        })
    }, [id])



    return (
        <div className="mt-4 mb-4 mx-8 px-12 py-8 ">
            <h1 className="text-3xl">{place.title}</h1>
            <a className="flex gap-1 my-2 block font-semibold underline" target="_blank" href={'https://maps.google.com/?q=' + place.address} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                {place.address}</a>
            <ListingGallery place={place} />

            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 mt-8">
                <div>
                    <div className="my-4">
                        <h2 className="font-semibold text-2xl">Description</h2>
                        {place.description}
                    </div>
                    Check in {place.checkIn} <br />
                    Check out {place.checkOut}  <br />
                    Max Number of guests: {place.maxGuests}
                    <div className="text-2xl font-semibold mt-4">
                        Perks
                    </div>
                    <div className="grid grid-cols-2 gap-2 my-4">
                           {place.perks && place.perks.map((perk, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <PerkIcon perk={perk} />
                                {perk}
                            </div>
                        ))}
                    </div>

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
