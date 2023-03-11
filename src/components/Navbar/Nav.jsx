import React from "react";
import "./index.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
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

      <div className="right-nav">
        <Button colorScheme="pink">
          <Link to="/register">Register</Link>
        </Button>

        <Button colorScheme="green">
          <Link to="/login">Log In</Link>
        </Button>
      </div>
    </div>
  );
};

export default Nav;