import React from "react";
import ReactDOM from "react-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router";
import LoginStore from "../stores/LoginStores.jsx";
import LoginActions from "../actions/LoginActions.jsx";
import { Image } from "react-bootstrap";
import { browserHistory } from "react-router";

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
    this.logout = this.logout.bind(this);
    this.onChange = this.onChange.bind(this);
    this.navigateToProfile = this.navigateToProfile.bind(this);
    this.avatarUrl = ( LoginStore.getState().responseData.avatar ) ? "http://localhost:3000" + LoginStore.getState().responseData.avatar.url : ""
  }

  shouldComponentUpdate(){
    return true;
  }

  componentWillMount(){
    this.setState(LoginStore.getState());
  }

  componentDidMount(){
    LoginStore.listen(() => {
      this.onChange();
    });
  }

  navigateToProfile(){
    browserHistory.push('/profile');
  }

  onChange(){
    this.setState(LoginStore.getState());
  }

  logout(){
    this.setState({
      responseHeaders: {}
    });
    LoginActions.logout(true);
  }

  render(){
    if(this.state.responseHeaders.uid){
      return(
        <Navbar collapseOnSelect fixedTop = { true }>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Pinterest</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem onClick={ this.navigateToProfile } ><Image src= { this.avatarUrl } style={{ "width" : "35px", "height" : "35px" }} circle /></NavItem>
              <NavItem ><Link to="/dashboard">Dashboard</Link></NavItem>
              <NavItem onClick = { this.logout }><Link to="/signin">Logout</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    else{
      return(
        <Navbar collapseOnSelect fixedTop = { true }>
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
}

export default Header;