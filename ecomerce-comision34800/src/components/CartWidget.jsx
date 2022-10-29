import React from "react";
import cart from "./carrito.png";

const CartWidget = () => {
  return (
    <div>
      <a href="#">
        <img src={cart} alt="" />
      </a>
    </div>
  );
};

export default CartWidget;
