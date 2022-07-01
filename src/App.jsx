import React, { useState } from "react";
import "./App.css";

// React Router DOM
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import BannerSection from "./components/BannerSection/BannerSection";
import ProductItem from "./components/ProductItem/ProductItem";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<BannerSection />} />
        <Route
          path="/product/:id"
          element={
            <ProductItem cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
