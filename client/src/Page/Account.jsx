import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { useNavigate,Link, useParams } from 'react-router-dom'
import axios from "axios"

export default function Account() {
    const {user,setUser} = useContext(UserContext)
    const navigate = useNavigate()
    let {subpage} = useParams()
    if (subpage === undefined){
        subpage = 'profile'
    }

    const logout = async () =>{
       await axios.post('/logout')
       setTimeout(() => {navigate("/");}, 0)
       setUser(null)
       
    }

    const linkClasses = (type = null) => {
        let classes = 'py-2 px-6';
        if (type === subpage) {
            classes += ' bg-primary text-white rounded-full';
        }
        return classes;
    };
   

  return (
    <div className='p-6'>
      <h3 className='text-3xl font-bold'>Hello <span className="text-blue-600 dark:text-blue-500">{user.name}</span></h3>
      <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
        <Link className={linkClasses('profile')} to="/account">My Account</Link>
        <Link className={linkClasses('bookings')} to="/account/bookings">My Bookings</Link>
        <Link className={linkClasses('places')} to="/account/places">My Places</Link>
      </nav>
      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto'>
            Login is as {user.name} ({user.email})<br />
            <button onClick={logout} className='max-w-sm mt-2 text-white bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
            Logout
            </button>
        </div>
      )}
    </div>
  )
}
