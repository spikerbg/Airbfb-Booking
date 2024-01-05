import React, { useEffect, useState } from 'react'
import Perks from './LessComponent/Perks'
import axios from "axios"
import AccountNav from '../AccountNav'
import { Navigate, useParams } from 'react-router-dom'

export default function PlacesFormPage() {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [address, setAddress] = useState("")
    const [addedPhotos, setAddedPhotos] = useState([])
    const [photoLink, setPhotoLink] = useState("")
    const [description, setDescription] = useState("")
    const [perks, setPerks] = useState([])
    const [extraInfo, setExtraInfo] = useState("")
    const [checkIn, setCheckIn] = useState("")
    const [cehckOut, setCheckOut] = useState("")
    const [maxGuests, setMaxGuests] = useState(1)
    const [redirect, setRedirect] = useState(false);
    useEffect(() =>{
        if (!id){
            return
        }
        axios.get('/places/'+id).then(response  =>{
            const {data} = response;
            setTitle(data.title)
            setAddress(data.address)
            // setAddedPhotos(data.addedPhotos)
            setPhotoLink(data.photoLink)
            setDescription(data.description)
            setPerks(data.perks)
            setExtraInfo(data.extraInfo)
            setCheckIn(data.checkIn)
            setCheckOut(data.cehckOut)
            setMaxGuests(data.maxGuests)
        })
    },[id])

    const addPhotoByLink = async (e) => {
        e.preventDefault();
        const { data: filename } = await axios.post('/upload-bt-link', { link: photoLink })
        setAddedPhotos(prev => {
            return [...prev, filename]
        })
        setPhotoLink('')
    }
    // const uploadPhoto = (e) =>{
    //  const files = e.target.files;
    //  const data = new FormData()
    //  for (let i = 0; i < files.length; i++){
    //    data.append('photos', files[i])

    //  }

    const uploadPhoto = (e) => {
        const files = e.target.files;
        const data = new FormData()
        if (e.target.files && e.target.files.length > 0) {
            data.append('photos', files[0])
        }

        axios.post('/upload', data, {
            headers: { 'Content-Type': 'multipart/from' }
        }).then(response => {
            const { data: filenames } = response
            setAddedPhotos(prev => {
                return [...prev, ...filenames]
            })
        })
    }

    const savePlace = async (e) => {
        e.preventDefault()
        const placeData = {
            title, address, addedPhotos,
                photoLink, description, perks, extraInfo,
                checkIn, cehckOut, maxGuests
        }
        if (id) {
            await axios.put('/places/:id', {
                id, ...placeData
            })
            setRedirect(true)
        } else {
            await axios.post('/places', placeData)
            setRedirect(true)
        }
   
    }


    return (
        <div>
            <AccountNav />
            <form className="max-w-lg mx-auto" onSubmit={savePlace}>
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
                <div className="mb-5 flex gap-2">
                    <input
                        type="text"
                        id="base-input"
                        value={photoLink}
                        onChange={e => setPhotoLink(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    <button onClick={addPhotoByLink} className='whitespace-nowrap max-w-sm text-white bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-4 py-1.5 text-center'>Add photo</button>
                </div>
                <div className='mt-2 gap-2 grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4'>
                    {addedPhotos.length > 0 && addedPhotos.map((link, index) => (
                        <div key={index} className='h-32 flex'>
                            <img className="rounded-2xl w-full object-cover" src={'http://localhost:3000/uploads/' + link} alt="" />
                        </div>
                    ))}
                    <label className='h-32 cursor-pointer flex items-center border gap-1 bg-transparent rounded-2xl p-2 text-2xl text-gray-600 mx-auto' htmlFor="fileInput">
                        <input id="fileInput" type="file" multiple className='hidden' onChange={uploadPhoto} />
                        Upload
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                        </svg>
                    </label>

                </div>
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
                            value={cehckOut}
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
                <div className='my-4'>
                    <button className='w-full text-white bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center'>Save</button>
                </div>
            </form>
        </div>
    )
}
