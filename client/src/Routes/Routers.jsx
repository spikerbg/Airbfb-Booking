import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home"
import Login from "../Page/Login"
import Signup from "../Page/Signup"
import Account from "../Page/Account";
import PlacesPage from "../Page/PlacesPage";
import PlacesFormPage from "../Page/PlacesFormPage";
import ListingPage from "../Page/ListingPage";
import UserBookingPage from "../Page/UserBookingPage";
import ListingBooking from "../Page/ListingBooking";
import PrivateRoutes from "./PrivateRoutes";
import Test from "../Page/Test";
import SearchPage from "../Page/SearchPage";




export default function Routers() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/place/:id" element={<ListingPage />} />
    <Route path="/test" element={<Test />} />
    <Route path="/search" element={<SearchPage />} />

    <Route element={<PrivateRoutes />}>
      <Route path="/account" element={<Account />} />
      <Route path="/account/places" element={<PlacesPage />} />
      <Route path="/account/places/new" element={<PlacesFormPage />} />
      <Route path="/account/places/:id" element={<PlacesFormPage />} />
      <Route path="/account/bookings/" element={<UserBookingPage />} />
      <Route path="/account/bookings/:id" element={<ListingBooking />} />
      </Route>
   </Routes>
  )
}
