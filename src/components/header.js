import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

const Header = props => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/">
        <Navbar.Brand>
          {" "}
          {props.usuario.name} {props.contador}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to="/about" as={Link}>
            About
          </Nav.Link>
          <Nav.Link to="/profile" as={Link}>
            Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const mapStateToProps = state => ({
  contador: state.contador,
  usuario: state.usuario
});
export default connect(mapStateToProps)(Header);
