import create from "zustand";
import { devtools, persist } from "zustand/middleware";

// SWEET ALERT
import Swal from "sweetalert2";

const cartStore = (set, get) => ({
  cart: [],
});

export const useCartState = create(
  devtools(
    persist(cartStore, {
      name: "cartState",
    })
  )
);
