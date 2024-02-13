"use client";

import { getCartTotal } from "@/lib/getCartTotal";
import { useCartStore } from "@/store";
import React from "react";

function Basket() {
  const cart = useCartStore((state) => state.cart);
  const basketTotal = getCartTotal(cart);

  return <div>Basket</div>;
}

export default Basket;
