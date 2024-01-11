import { useState } from "react"


export default function ListingGallery({place}) {
    const [showAllPhotos, setShowAllPhotos] = useState(false)
    if (showAllPhotos) {
        return (
            <div className="absolute inset-0 bg-black min-h-screen items-center text-white">
                <div className="bg-black p-32 grid gap-2">
                    <div>
                        <h2 className="text-3xl">Photos of {place.title}</h2>
                        <button onClick={() => setShowAllPhotos(false)} className="fixed right-12 top-4 flex gap-1 py-2 px-4 rounded-2xl bg-white text-black shadow-md ">
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

    
    <div className="relative">
    <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
        <div>
            {place.photos?.[0] && (
                <div>
                    <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover cursor-pointer" src={'http://localhost:3000/uploads/' + place.photos[0]} alt=""></img>
                </div>
            )}
        </div>
        <div className="grid gap-2 overflow-hidden">
            {place.photos?.[1] && (
                <img onClick={() => setShowAllPhotos(true)} className="object-cover cursor-pointer" src={'http://localhost:3000/uploads/' + place.photos[1]} alt=""></img>
            )}
            {place.photos?.[2] && (
                <img onClick={() => setShowAllPhotos(true)} className="object-cover cursor-pointer" src={'http://localhost:3000/uploads/' + place.photos[2]} alt=""></img>
            )}
        </div>
        <button onClick={() => setShowAllPhotos(true)} className="absolute buttom-8 right-0 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-300">Show more photos</button>
    </div>
</div>
  )
}
