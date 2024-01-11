

export default function ListingGallery({place}) {
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
                <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer" src={'http://localhost:3000/uploads/' + place.photos[1]} alt=""></img>
            )}
            {place.photos?.[2] && (
                <img onClick={() => setShowAllPhotos(true)} className="cursor-pointer" src={'http://localhost:3000/uploads/' + place.photos[2]} alt=""></img>
            )}
        </div>
        <button onClick={() => setShowAllPhotos(true)} className="absolute buttom-8 right-0 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-300">Show more photos</button>
    </div>
</div>
  )
}
