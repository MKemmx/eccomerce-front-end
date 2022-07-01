import React from "react";
import "./ShoppingCartCSS.css";

// Cart State
import { useCartState } from "../../store/CartStore";

const ShoppingCart = () => {
  const { cart, subtractItemQTY, addItemQTY, changeItemQTY } = useCartState(
    (state) => state
  );
  const totalValue = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-container">
        <h2>Shopping Cart </h2>
        <h3> Total: {isNaN(totalValue) ? 0 : totalValue.toFixed(2)} </h3>
        {cart.map((cartItem) => (
          <div className="shopping-cart-item">
            <img className="shopping-cart-image" src={cartItem.image} alt="" />
            <div className="shopping-cart-image">
              <p>{cartItem.title}</p>
              <p>{cartItem.price}</p>
            </div>
            <div className="shopping-cart-qty">
              <button
                onClick={() => {
                  subtractItemQTY(cartItem.id);
                }}
                className="shopping-cart-btn"
              >
                -
              </button>
              <input
                onChange={(event) => {
                  changeItemQTY(cartItem.id, parseInt(event.target.value));
                }}
                type="number"
                value={cartItem.qty}
              />
              <button
                onClick={() => {
                  addItemQTY(cartItem, cartItem.id);
                }}
                className="shopping-cart-btn"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
