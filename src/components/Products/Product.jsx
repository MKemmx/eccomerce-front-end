import React from "react";
// React Router DOM
import { useNavigate, Link } from "react-router-dom";
// Framer Motion
import { motion } from "framer-motion";

const Product = ({ item }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, transition: { duration: 1.2 } }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
      onClick={() => {
        navigate(`/product/${item.id}`);
      }}
      key={item.id}
      className="product-box"
    >
      <img className="product-image" src={item.image} alt={item.name} />
      <div className="product-name">
        <h3 className="product-category">{item.category}</h3>
        <p className="product-title"> {item.title} </p>
        <Link to={`/product/${item.id}`}>
          <p className="view-btn">View More!</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Product;
