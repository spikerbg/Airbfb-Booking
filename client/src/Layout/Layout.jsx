import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Routers from "../Routes/Routers"
import axios from "axios"
import {AuthProvider} from "../Context/authContext"

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

export default function Layout(){
    return(
<>
<AuthProvider>
<Header />
<main>
    <Routers />
</main>
<Footer/>
</AuthProvider>


</>

    )
}