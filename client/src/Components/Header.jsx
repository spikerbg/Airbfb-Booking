import { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from '../Context/UserContext';
import axios from "axios"
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file




export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [searchInpute, setSearchInpute] = useState("")
  const [startDate, setStartDay] = useState(new Date())
  const [endDate, setEndDay] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)

  const handleSelect = (ranges) => {
    setStartDay(ranges.selection.startDate)
    setEndDay(ranges.selection.endDate)
  }

  const resetInpute = () =>{
    setSearchInpute("")
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
  }


  const navigate = useNavigate()
  const logout = async () => {
    await axios.post('/logout')
    setTimeout(() => { navigate("/"); }, 0)
    setUser(null)

  }

  const location = useLocation();


  // List of routes where the header should be hidden
  // const routesWithoutHeader = ['/login', '/signup'];

  // // Check if the current route is in the list
  // const isHeaderHidden = routesWithoutHeader.includes(location.pathname);

  // if (isHeaderHidden) {
  //   // Return null or an empty div if the header should be hidden
  //   return null;
  // }
  return (
    <div>
      <header className='p-4 align-middle flex justify-between border-b shadow-sm bg-white'>
        <Link to="/" className='flex item-center gap-1 text-center align-middle'>
          <svg id="logo-14" width="73" height="49" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" className="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" className="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" className="ccompli2" fill="#5D2C02"></path> </svg>
          <span className='font-bold text-xl'>Airbfb</span>
        </Link>
        <div className='flex gap-4 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300'>
          <div>
            <input
              type="search"
              placeholder="Place"
              value={searchInpute}
              onChange={e => setSearchInpute(e.target.value)}
              className=" bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"

            />
          </div>
          <div className='border-l border-gray-300'></div>
          <div>Any week</div>
          <div className='border-l border-gray-300'></div>
          <div>Add guests</div>
          <button className='bg-primary text-white p-2 rounded-full'>
            <FaSearch />
          </button>
        </div>
        <div className='flex gap-2 align-middle'>
          <Link to={user ? '/account' : '/login'} className='flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-sm shadow-gray-300 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>

            </div>
            {!!user && (<div>{user.name}
            </div>

            )}
          </Link>
          {user && user.name && (
            <button onClick={logout} className='max-w-sm mt-2 text-white bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
              Logout
            </button>
          )}

        </div>
      </header>
      {searchInpute &&
        (
          <div className='flex flex-col mx-auto items-center z-1 shadow-lg'>
            <DateRangePicker ranges={[selectionRange]}
              minDay={new Date()}
              rangeColors={["#f27a8a"]}
              onChange={handleSelect}
            />
            <div className='flex items-center mb-4 justify-between w-1/4'>
              <div>
              <h2 className='text-xl font-semibold'>Number of guests</h2>
              </div>
              <div className='flex g-4 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>
              <input type="number" 
              value={noOfGuests}
              min={1}
              onChange={e => setNoOfGuests(e.target.value)}
              className='w-12 pl-2 text-lg outline-none text-red-400' />
              </div>

            </div>
            <div className='flex justify-between g-4 w-1/4 mb-4'>
              <button onClick={resetInpute} className='text-white bg-[#f27a8a] hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center'>Cancel</button>
              <button className='text-white bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center'>Search</button>
              </div>
          </div>
        )}
    </div>
  )
}
