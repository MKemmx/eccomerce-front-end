import React from "react";
import "./NavbarCSS.css";

// React Router DOM
import { Link } from "react-router-dom";
// Icons
import { FaLaptop } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

// MENU lists
import { menulists } from "../../utls/menulist";

import { useCartState } from "../../store/CartStore";

const Navbar = () => {
  const { cart } = useCartState((state) => state);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to={`/`}>
            <FaLaptop size={40} color="#222" />
          </Link>
        </div>
        <ul className="menu-container">
          {menulists.map((list) => (
            <Link to={`${list.to}`}>
              <li className="list-item" key={list.name}>
                {list.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="navbar-settings">
          <Link className="cart-icon" to={`/cart`}>
            <AiOutlineShoppingCart color="#222" size={28} />
            {!cart.length <= 0 && <div className="badge"> {cart.length} </div>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
