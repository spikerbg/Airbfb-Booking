import axios from "axios";
import { useState } from "react";

export default function PhotosUploader({addedPhotos,onChange}) {
    const [photoLink, setPhotoLink] = useState("")

    const addPhotoByLink = async (e) => {
        e.preventDefault();
        const { data: filename } = await axios.post('/upload-bt-link', { link: photoLink })
        onChange(prev => {
            console.log("Previous addedPhotos:", prev);
            return [...prev, filename]
        })
        setPhotoLink('')
    }

    const uploadPhoto = (e) => {
        const files = e.target.files;
        const data = new FormData()
        if (e.target.files && e.target.files.length > 0) {
            data.append('photos', files[0])
        }

        axios.post('/upload', data, {
            headers: { 'Content-type': 'multipart/form-data' }
        }).then(response => {
            const { data: filenames } = response;
            onChange(prev => {
                return [...prev, ...filenames];
            })
            console.log("addedPhotos after uploading photo:", addedPhotos);
        })
    }

    return (
        <div>
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
                {addedPhotos.length > 0 && addedPhotos.map(link => (
                    <div key={link} className='h-32 flex'>
                        <img className="rounded-2xl w-full object-cover" src={'http://localhost:3000' + link} alt="" />
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
        </div>
    )
}
