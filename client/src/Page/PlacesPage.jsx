import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PlacesPage() {
    const {action} = useParams()
  return (
    <div>
        {action !== 'new' &&(

       
        <div className='text-center'>
            <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>Add new place</Link>
        </div>
         )}
         {action === 'new' &&(
        <div>
        <form className="max-w-lg mx-auto">
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
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  />
  <button className='whitespace-nowrap max-w-sm text-white bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-4 py-1.5 text-center'>Add photo</button>
</div>
  <div className='mt-2 grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4'>
  <button className='flex border gap-1 bg-transparent rounded-2xl p-8 text-2xl text-gray-600 mx-auto'>
    Upload <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg>

  </button>
 
  </div>
  <div>
  <label
              htmlFor="base-input"
              className="block mb-2 text-2xl mt-4"
            >
              Description
            </label>
  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write more information for your apartment..."></textarea>
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
  <div className="grid grid-cols-2 gap-2 mb-4">
    <div className="flex gap-2 items-center">
  <input
    id="checkbox-2"
    type="checkbox"
    defaultValue=""
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
  />
  <label
    htmlFor="checkbox-2"
    className="border p-4 flex rounded-2xl cursor-pointer gap-2 item-center text-gray-900"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
</svg>

    WIFI
  </label>
  </div>
  <div className="flex gap-2 items-center">
  <input
    id="checkbox-2"
    type="checkbox"
    defaultValue=""
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
  />
  <label
    htmlFor="checkbox-2"
    className="border p-4 flex rounded-2xl cursor-pointer gap-2 item-center text-gray-900"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

    Free Parking
  </label>
  </div>
  <div className="flex gap-2 items-center">
  <input
    id="checkbox-2"
    type="checkbox"
    defaultValue=""
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
  />
  <label
    htmlFor="checkbox-2"
    className="border p-4 flex rounded-2xl cursor-pointer gap-2 item-center text-gray-900"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
</svg>

    TV
  </label>
  </div>
  <div className="flex gap-2 items-center">
  <input
    id="checkbox-2"
    type="checkbox"
    defaultValue=""
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
  />
  <label
    htmlFor="checkbox-2"
    className="border p-4 flex rounded-2xl cursor-pointer gap-2 item-center text-gray-900"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>


    Pets
  </label>
  </div>
  <div className="flex gap-2 items-center">
  <input
    id="checkbox-2"
    type="checkbox"
    defaultValue=""
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
  />
  <label
    htmlFor="checkbox-2"
    className="border p-4 flex rounded-2xl cursor-pointer gap-2 item-center text-gray-900"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
</svg>

    Private enterance
  </label>
  </div>
</div>
<label
              htmlFor="base-input"
              className="block mb-2 text-2xl mt-4"
            >
              Extra info
            </label>
            <label
    htmlFor="base-input"
    className="block mb-2 text-sm font-medium text-gray-900"
  >
    House rules,etc
  </label>
        </form>
      </div>
         )}
      Place page
      dsadasdas
    </div>
  )
}
