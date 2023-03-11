import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {BsHeart} from 'react-icons/bs'
import "./index.css";
import {Outlet} from 'react-router-dom'



export default function ProfileLayout(){
    return(
        <>
     <div className="navBar">
      <div className="left-nav">
        <div className="logo-nav">
          <Link to="/">Logo</Link>
        </div>

        <ul className="products-nav">
          <li className="products-nav-link">
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="right-nav profile-right-nav">
        <div>
            Username
        </div>
        <Button colorScheme="green">
            WishList <BsHeart className="wishlist-btn"/>
        </Button>
        <Button colorScheme="pink">
          <Link to="#">Log Out</Link>
        </Button>
      </div>
    </div>
    <Outlet/>
        </>
    )
}