import React, { useState } from "react";
import "./NavbarCSS.css";

// React Router DOM
import { Link } from "react-router-dom";
// Icons
import { FaLaptop, FaSearch, FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";

// MENU lists
import { menulists } from "../../utls/menulist";

// Cart State
import { useCartState } from "../../store/CartStore";

const Navbar = () => {
  const { cart } = useCartState((state) => state);
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to={`/`}>
            <FaLaptop size={40} color="#222" />
          </Link>
        </div>
        <ul
          className={showNavbar ? "menu-container active" : "menu-container"}
          // className={!showNavbar ? "menu-container" : "menu-container active"}
        >
          {menulists.map((list) => (
            <Link to={`${list.to}`}>
              <li className="list-item" key={list.name}>
                {list.name}
              </li>
            </Link>
          ))}
        </ul>
        <div
          className={showNavbar ? "navbar-settings active" : "navbar-settings"}
          // className={!showNavbar ? "navbar-settings" : "navbar-settings active"}
        >
          <div className="icon-div">
            <FaSearch className="icon" color="#222" size={20} />
          </div>
          <div className="icon-div">
            <FaRegUser className="icon" color="#222" size={22} />
          </div>
          <Link className="cart-icon" to={`/cart`}>
            <AiOutlineShoppingCart className="icon" color="#222" size={25} />
            {!cart.length <= 0 && <div className="badge"> {cart.length} </div>}
          </Link>
        </div>
        <div
          onClick={() => {
            setShowNavbar(!showNavbar);
          }}
          className="hamburger-container"
        >
          <AiOutlineMenu size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
