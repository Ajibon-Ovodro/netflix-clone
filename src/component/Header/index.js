import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "../../assets/images/logo.png";
import { useHistory, Link } from "react-router-dom";
import { api } from "../../service/api";
import { checkAuth, logout } from "../../utils/auth";

const Header = (props) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [search, setSearch] = useState("");

  const submit = () => {
    if (search.length > 2) {
      history.push({
        pathname: `/search/${search}`,
      });
    }
  };

  const logoutHandler = () => {
    logout();
    history.replace("/login");
  };

  return (
    <div className="header">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
            <Link to="/tv" className="nav-link">
              Tv Shows
            </Link>
            <Link to="/wishlist" className="nav-link">
              Favourites
            </Link>
          </Nav>
          <div className="search__pane d-flex align-items-center justify-content-end">
            <Form onSubmit={submit}>
              <FormGroup className="mb-0">
                <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="search by title"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </FormGroup>
            </Form>
            <span onClick={logoutHandler} className="logout">
              <i className="fas fa-sign-out-alt"></i>
            </span>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
