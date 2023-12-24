import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Routers from "../Routes/Routers"
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3000'

export default function Layout(){
    return(
<>
<Header />
<main>
    <Routers />
</main>
<Footer/>


</>

    )
}