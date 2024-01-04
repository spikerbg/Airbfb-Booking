import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home"
import Login from "../Page/Login"
import Signup from "../Page/Signup"
import Account from "../Page/Account";
import PlacesPage from "../Page/PlacesPage";
import PlacesFormPage from "../Page/PlacesFormPage";




export default function Routers() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/account" element={<Account />} />
    <Route path="/account/places" element={<PlacesPage />} />
    <Route path="/account/places/new" element={<PlacesFormPage />} />
   </Routes>
  )
}
