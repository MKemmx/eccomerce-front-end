import React from "react";
import "./ShoppingCartCSS.css";

// React Icons
import { BsTrash } from "react-icons/bs";

// Cart State
import { useCartState } from "../../store/CartStore";

const ShoppingCart = () => {
  const {
    cart,
    subtractItemQTY,
    addItemQTY,
    changeItemQTY,
    removeToCart,
    sendOrder,
  } = useCartState((state) => state);
  const itemsPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const taxPrice = !isNaN(itemsPrice) ? itemsPrice * 0.14 : 0;
  const shippingPrice =
    parseInt(itemsPrice) === 0 || isNaN(itemsPrice)
      ? 0
      : parseInt(itemsPrice) > 1000
      ? 0
      : 120;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <>
      {/*  */}
      <div className="fshopping-cart">
        <div className="fshopping-cart-container">
          <div className="fshopping-cart-box1">
            <div className="fshopping-cart-header">
              <h2>Your bag ({cart.length} items) </h2>
            </div>
            {/* Cart Items */}
            <div className="card-container">
              {cart.map((cartItem) => (
                <div className="card">
                  <div className="card-image">
                    <img src={cartItem.image} alt={cart.title} />
                  </div>
                  <div className="card-details">
                    <div className="card-context">
                      <p className="card-category">{cartItem.category}</p>
                      <p className="card-name"> {cartItem.title}</p>
                    </div>
                    <div
                      onClick={() => {
                        removeToCart(cartItem.id);
                      }}
                      className="card-button"
                    >
                      <div className="card-icon-container">
                        <BsTrash className="card-icon" size={23} />
                        <p>Remove</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-quantity">
                    <input
                      onChange={(event) => {
                        changeItemQTY(
                          cartItem.id,
                          parseInt(event.target.value)
                        );
                      }}
                      min="1"
                      className="card-input"
                      type="number"
                      value={cartItem.qty}
                    />
                    <p className="card-price"> $ {cartItem.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Total Container */}
          <div className="fshopping-cart-box2">
            <div className="fshopping-cart-box2-container">
              <div className="fshopping-cart-box2-container-header">
                <h3> Total </h3>
              </div>
              {/*  */}
              <div className="subtotal-container">
                <p className="subtotal">Subtotal</p>
                <p className="subtotal-price">
                  {isNaN(itemsPrice) ? `0 $` : `${itemsPrice.toFixed(2)}`}
                </p>
              </div>

              <div className="delivery-container">
                <p className="delivery">Delivery</p>
                <p className="subtotal-price">
                  {itemsPrice > 1000 ? "Free Delivery" : shippingPrice}
                </p>
              </div>

              <div className="delivery-container">
                <p className="delivery">Tax</p>
                <p className="subtotal-price">{taxPrice.toFixed(2)}</p>
              </div>

              <div className="total-container">
                <p className="total">Total (VAT included) </p>
                <p className="subtotal-price">
                  {isNaN(totalPrice) ? `0$` : `${totalPrice.toFixed(2)} $`}
                </p>
              </div>

              <div className="shoppingcart-button-container">
                <button onClick={sendOrder} className="shoppingcart-button">
                  Go To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
