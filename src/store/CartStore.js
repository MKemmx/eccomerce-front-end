import create from "zustand";
import { devtools, persist } from "zustand/middleware";

// SWEET ALERT
import Swal from "sweetalert2";

const cartStore = (set, get) => ({
  cart: [],
  addToCart: (quantity = 1, data) => {
    const cartItems = get().cart;
    if (quantity > 50)
      return Swal.fire("Error", "Minimum order is only 50 bellow!", "error");
    // Check if item exist in cart
    const exist = cartItems.find((cartItem) => cartItem.id === data.id);
    if (!exist)
      return set({
        cart: [...cartItems, { ...data, qty: quantity }],
      });
    // Check if order in cart is greater than 50
    if (exist.qty > 50 || exist.qty + quantity > 50)
      return Swal.fire("Error", "Minimum order is only 50 bellow!", "error");

    // Updated Cart Quantity
    const updatedCartQTY = cartItems.map((cartItem) =>
      cartItem.id === exist.id
        ? { ...cartItem, qty: cartItem.qty + quantity }
        : cartItem
    );
    set({
      cart: updatedCartQTY,
    });
  },
  subtractItemQTY: (id) => {
    const cartItems = get().cart;
    const exist = cartItems.find((cartItem) => cartItem.id === id);
    if (!exist) return;

    //! Remove if qty equals 1 or below
    if (exist.qty <= 1 || isNaN(exist.qty))
      return set({
        cart: cartItems.filter((cartItem) => cartItem.id !== id),
      });
    set({
      cart: cartItems.map((cartItem) =>
        cartItem.id === exist.id
          ? { ...cartItem, qty: cartItem.qty - 1 }
          : cartItem
      ),
    });
  },
  addItemQTY: (data, id) => {
    const cartItems = get().cart;
    // Check if item alredy exist in cart
    const exist = cartItems.find((cartItem) => cartItem.id === id);
    // If not add to cart
    if (!exist)
      return set({
        cart: [...cartItems, { ...data, qty: 1 }],
      });
    // Check if exist item is greater than 50
    if (exist.qty >= 50) {
      return Swal.fire("Error", "Minimum order is only 50 or bellow!", "error");
    }
    // Cart exist then add + 1 quantity
    set({
      cart: cartItems.map((cartItem) =>
        cartItem.id === exist.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      ),
    });
  },
  changeItemQTY: (id, val) => {
    const cartItems = get().cart;
    if (val > 50)
      return Swal.fire("Error", "Maximum order is only 50!", "error");

    const exist = cartItems.find((cartItem) => cartItem.id === id);
    if (!exist) return;

    if (exist.qty < 0) {
      return set({
        cart: cartItems.filter((cartItem) => cartItem.id !== id),
      });
    }

    set({
      cart: cartItems.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, qty: val } : cartItem
      ),
    });
  },
  removeToCart: (id) => {
    const cartItems = get().cart;
    const removedItem = cartItems.filter((item) => item.id !== id);
    set({
      cart: removedItem,
    });
  },
  sendOrder: () => {
    const cart = get().cart;

    if (cart.length <= 0) {
      return Swal.fire(
        "Purchase failed",
        "You don't have any order yet!",
        "error"
      );
    }

    set({
      cart: [],
    });
    Swal.fire("Success", "Thank you for ordering!", "success");
  },
});

export const useCartState = create(
  devtools(
    persist(cartStore, {
      name: "cartState",
    })
  )
);
