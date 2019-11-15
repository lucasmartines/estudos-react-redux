import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let contador = 0;
  window.store.subscribe(store => {
    contador = store.contador;
  });
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <ul className="nav">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            about
          </Link>
        </li>
        <li className="nav-link text-white">{contador}</li>
      </ul>
    </nav>
  );
};

export default Header;
