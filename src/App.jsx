import React from "react";
import "./App.css";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route index path="/" element={<BannerSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
