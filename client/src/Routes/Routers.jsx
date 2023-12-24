import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home"
import Login from "../Page/Login"
import Signup from "../Page/Signup"


export default function Routers() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
   </Routes>
  )
}
