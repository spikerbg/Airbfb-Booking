import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Routers from "../Routes/Routers"
import axios from "axios"
import { UserContextProvider } from "../Context/UserContext"



axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true


export default function Layout(){

    return(
<>
<UserContextProvider>
<Header />
<main>
    <Routers />
</main>
<Footer/>
</UserContextProvider>



</>

    )
}