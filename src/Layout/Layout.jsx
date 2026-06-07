import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import '../App.css'

function Layout() {
    return (
        <>
            <NavBar />

            <main>
                <Outlet />
            </main>
            
            <Footer></Footer>
           
        </>
    );
}

export default Layout;