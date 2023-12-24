import { Routes, Route } from "react-router-dom";
import Home from "../Page/Home"


export default function Routers() {
  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
   </Routes>
  )
}
