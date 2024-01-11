import React, { useEffect, useState } from 'react'
import Perks from './LessComponent/Perks'
import axios from "axios"
import AccountNav from '../AccountNav'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import PhotosUploader from './LessComponent/PhotosUploader'

export default function PlacesFormPage() {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [address, setAddress] = useState("")
    const [addedPhotos, setAddedPhotos] = useState([])
    const [description, setDescription] = useState("")
    const [perks, setPerks] = useState([])
    const [extraInfo, setExtraInfo] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [maxGuests, setMaxGuests] = useState(1)
    const [price, setPrice] = useState(60)
    const navigate = useNavigate()
    useEffect(() =>{
        if (!id){
            return
        }
        axios.get('/places/'+id).then(response  =>{
            const {data} = response;
            setTitle(data.title)
            setAddress(data.address)
            setAddedPhotos(data.photos)
            setDescription(data.description)
            setPerks(data.perks)
            setExtraInfo(data.extraInfo)
            setCheckIn(data.checkIn)
            setCheckOut(data.checkOut)
            setMaxGuests(data.maxGuests)
            setPrice(data.price)
        })
    },[id])


    // const uploadPhoto = (e) =>{
    //  const files = e.target.files;
    //  const data = new FormData()
    //  for (let i = 0; i < files.length; i++){
    //    data.append('photos', files[i])

    //  }


    const savePlace = async (e) => {
        e.preventDefault()
        const placeData = {
            title, address, addedPhotos,
              description, perks, extraInfo,
                checkIn, checkOut, maxGuests, price,
        }
        if (id) {
            await axios.put('/places/:id', {
                id, ...placeData
            })
            navigate("/account/places");
        } else {
            await axios.post('/places', placeData)
            navigate("/account/places");
        }
   
    }


    return (
        <div className='pb-12'>
            <AccountNav />
            <form className="max-w-2xl mx-auto" onSubmit={savePlace}>
                <div className="mb-5">
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-2xl mt-4"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="base-input"
                        placeholder='Title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-border focus:border-border block w-full p-2.5"
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-2xl mt-4"
                    >
                        Address
                    </label>
                    <input
                        type="text"
                        id="base-input"
                        placeholder='Address of your apartment'
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-border focus:border-border block w-full p-2.5"
                    />
                </div>
                <h2 className='text-2xl mt-4'>Photos</h2>
                <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Add image url
                </label>
                <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
                <div>
                    <label
                        htmlFor="base-input"
                        className="block mb-2 text-2xl mt-4"
                    >
                        Description
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Write more information for your apartment..."
                    ></textarea>
                </div>
                <label
                    htmlFor="base-input"
                    className="block mb-2 text-2xl mt-4"
                >
                    Perks
                </label>
                <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    Select all the perks of your apartment
                </label>
                <Perks selected={perks} onChange={setPerks} />
                <label
                    htmlFor="base-input"
                    className="block mb-2 text-2xl mt-4"
                >
                    Extra info
                </label>
                <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    value={extraInfo}
                    onChange={e => setExtraInfo(e.target.value)}
                    placeholder="House rules, etc."
                ></textarea>
                <label className="block mb-2 text-2xl mt-4">
                    Check in and out times, max guests
                </label>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    add check in and out times, remember to have some window for cleaning the room between guests
                </label>
                <div className='grid gap-2 sm:grid-cols-3'>
                    <div>
                        <h3 className='mt-2 mb-2'>Check in time</h3>
                        <input type="text"
                            className='w-full border mb-2 text-2xl mt-4'
                            placeholder='14:00'
                            value={checkIn}
                            onChange={e => setCheckIn(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='mt-2 mb-2'>Check out time</h3>
                        <input type="text"
                            className='w-full border mb-2 text-2xl mt-4'
                            placeholder='14:00'
                            value={checkOut}
                            onChange={e => setCheckOut(e.target.value)}
                        />
                    </div>
                    <div>
                        <h3 className='mt-2 mb-2'>Max number of guests</h3>
                        <input type="number"
                            className='w-full border mb-2 text-2xl mt-4'
                            value={maxGuests}
                            onChange={e => setMaxGuests(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                        <h3 className='mt-2 mb-2'>Price per Night</h3>
                        <input type="number"
                            className='w-full border mb-2 text-2xl mt-4 bg-gray-100'
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                <div className='my-4'>
                    <button className='w-full text-white bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center'>Save</button>
                </div>
            </form>
        </div>
    )
}
