import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Routers from "../Routes/Routers"

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