import React from 'react'
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";



export default function Header() {
  return (
    <div>
      <header className='p-4 align-middle flex justify-between border-b shadow-sm bg-white'>
        <a href="" className='flex item-center gap-1 text-center align-middle'>
        <svg id="logo-14" width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" className="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" className="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" className="ccompli2" fill="#5D2C02"></path> </svg>
        <span className='font-bold text-xl'>Airbfb</span>
        </a>
        <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
        <div>Anywere</div>
        <div className='border-l border-gray-300'></div>
        <div>Any week</div>
        <div className='border-l border-gray-300'></div>
        <div>Add guests</div>
        <button className='bg-primary text-white p-2 rounded-full'>
        <FaSearch />
        </button>
        </div>
      <Link to="login" className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-sm shadow-gray-300 '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
      <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
        </div>
        </Link>
      </header>
    </div>
  )
}
