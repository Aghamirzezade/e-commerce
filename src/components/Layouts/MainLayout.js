import NavBar from '../Navbar/Nav'
import {Outlet} from 'react-router-dom'
 
export default function MainLayout(){
    return(
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}