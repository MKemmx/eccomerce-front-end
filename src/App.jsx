import React from "react";
import "./App.css";

// React Router DOM
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BannerSection from "./components/BannerSection/BannerSection";
import ProductItem from "./components/ProductItem/ProductItem";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Products from "./components/Products/Products";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<BannerSection />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/products" element={<Products />} />{" "}
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductItem />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
