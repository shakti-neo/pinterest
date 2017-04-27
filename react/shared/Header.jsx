import React from "react"
import ReactDOM from "react-dom"
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap"
import { Link } from "react-router"

class Header extends React.Component {
  render(){
    return(
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Pinterest</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem ><Link to="/signin">SignIn</Link></NavItem>
            <NavItem ><Link to="/signup">SignUp</Link></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;