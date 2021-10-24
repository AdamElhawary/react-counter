import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
const CustomNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="px-5" color="dark" dark expand="md">
        <Link to={"/"} className={"navbar-brand"}>
          ElHawary Portfolio
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/login">
                Log In
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Counter">
                Counter
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/Shop">
                Shop
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
