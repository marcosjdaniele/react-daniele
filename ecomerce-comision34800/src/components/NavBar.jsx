import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul class="menu">
        <li class="logo">
          <a href="#">Margarita.SF</a>
        </li>
        <li class="item">
          <a href="#">Hamburguesas</a>
        </li>
        <li class="item">
          <a href="#">Wraps</a>
        </li>
        <li class="item">
          <a href="#">Entrepanes</a>
        </li>
        <li class="item">
          <a href="#">Fajitas</a>
        </li>
        <li class="item">
          <a href="#">Papas</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
