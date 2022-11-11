import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <ul class="menu">
        <li class="logo">
          <Link to="/" className={({ isActive }) => (isActive ? "bg-red" : "")}>
            MARGARITA S.F
          </Link>{" "}
        </li>
        <li class="item">
          <Link to="/categoria/Hamburguesas">Hamburguesas</Link>
        </li>
        <li class="item">
          <Link
            to="/categoria/
          Wraps"
          >
            Wraps
          </Link>
        </li>
        <li class="item">
          <Link to="/categoria/Entrepanes">Entrepanes</Link>
        </li>
        <li class="item">
          <Link to="CartWidget">
            {" "}
            <CartWidget />{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
