import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Header = props => {
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
        <li className="nav-link text-white">{props.contador}</li>
      </ul>
    </nav>
  );
};
const mapStateToProps = state => ({
  contador: state.contador
});
export default connect(mapStateToProps)(Header);
