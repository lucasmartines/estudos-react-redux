import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Badge, Navbar, Nav } from "react-bootstrap";

const Header = props => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/">
        <Navbar.Brand>
          <span>Contagem de items</span>
          <Badge variant="light" className="mx-2">
            {" "}
            {props.contador}{" "}
          </Badge>
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
          <Nav.Link to="/data" as={Link}>
            Data
          </Nav.Link>
        </Nav>
        {/* End Nav of mr-auto */}
        <Nav>
          <Nav.Link>{props.usuario.name}</Nav.Link>
          <Nav.Link to="/profile" as={Link}>
            <img alt="profile" src={props.usuario.photo} width={28} />
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
