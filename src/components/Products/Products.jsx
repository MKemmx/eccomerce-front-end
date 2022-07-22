import React, { useState, useEffect } from "react";
import "./ProductsCSS.css";

import { motion, AnimatePresence } from "framer-motion";

// React Router DOM
import { useNavigate } from "react-router-dom";

// Import AXIOS
import axios from "axios";
import Loading from "../Loading/Loading";
import Product from "./Product";

const Products = () => {
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="product-section">
      <div className="product-banner-title">
        <div className="title">
          <h2> All Products </h2>
        </div>
        <div className="category-selector-container">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            className="category-selector"
          >
            {categories.map((category) => (
              <option
                key={category}
                lassName="category-option"
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <motion.div layout className="product-container">
        <AnimatePresence>
          {selectedCategory === "all" && (
            <>
              {data.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </>
          )}

          {data
            .filter((product) => product.category === selectedCategory)
            .map((item) => (
              <Product key={item.id} item={item} />
            ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Products;
