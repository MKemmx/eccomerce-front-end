import React from "react";
import "./ShoppingCartCSS.css";

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const totalValue = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // Add To Cart Functionality
  const addToCart = (id) => {
    // Check if item already exist in cart
    const exist = cartItems.find((element) => {
      return element.id === id;
    });

    if (!exist) {
      setCartItems([...cartItems, { ...data, qty: 1 }]);
    } else {
      if (exist.qty === 50) {
        return alert("You have reached minimum purchase quantity");
      }

      setCartItems(
        cartItems.map((cartItem) => {
          return cartItem.id === exist.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem;
        })
      );
    }
  };

  const removeToCart = (id) => {
    const exist = cartItems.find((cartItem) => cartItem.id === id);
    if (!exist) return;

    if (exist.qty <= 1)
      return setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));

    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === exist.id
          ? { ...cartItem, qty: cartItem.qty - 1 }
          : cartItem
      )
    );
  };

  // Chahnge cart
  const changeCartQuantity = (id, val) => {
    if (val > 50)
      return alert(
        "You have reached minimum purchase, allowed purches is below 50 only"
      );

    const exist = cartItems.find((element) => {
      return element.id === id;
    });
    if (!exist) return;

    if (exist.qty < 0) {
      return setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
    }

    // if (exist.qty == 0) {
    //   setCartItems(
    //     cartItems.map((cartItem) => {
    //       return cartItem.id === id ? { ...cartItem, qty: 0 } : cartItem;
    //     })
    //   );
    // } else {
    setCartItems(
      cartItems.map((cartItem) => {
        return cartItem.id === id ? { ...cartItem, qty: val } : cartItem;
      })
    );
    // }
  };

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-container">
        <h2>Shopping Cart </h2>
        <h3> Total: {totalValue.toFixed(2)} </h3>
        {/* Cart Items */}
        {cartItems.map((cartItem) => (
          <div className="shopping-cart-item">
            <img className="shopping-cart-image" src={cartItem.image} alt="" />
            <div className="shopping-cart-image">
              <p>{cartItem.title}</p>
              <p>{cartItem.price}</p>
            </div>
            <div className="shopping-cart-qty">
              <button
                onClick={() => {
                  removeToCart(cartItem.id);
                }}
                className="shopping-cart-btn"
              >
                -
              </button>
              <input
                onChange={(event) => {
                  changeCartQuantity(cartItem.id, parseInt(event.target.value));
                }}
                type="number"
                value={cartItem.qty}
              />
              <button
                onClick={() => {
                  addToCart(cartItem.id);
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
