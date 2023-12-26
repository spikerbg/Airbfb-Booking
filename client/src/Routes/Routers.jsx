import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home"
import Login from "../Page/Login"
import Signup from "../Page/Signup"
import Account from "../Page/Account";



export default function Routers() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/account/:subpage?" element={<Account />} />
   </Routes>
  )
}
