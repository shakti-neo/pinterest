import React from "react"
import ReactDOM from "react-dom"
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap"
import { Link } from "react-router"
import LoginStore from "../stores/LoginStores.jsx"
import LoginActions from "../actions/LoginActions.jsx"
import localCache from "../localstorage.jsx"

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = LoginStore.getState();
    this.logout = this.logout.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  shouldComponentUpdate(){
    return true;
  }

  componentWillMount(){
  }

  componentDidMount(){
    LoginStore.listen(() => {
      this.onChange();
    });
  }

  onChange(){
    if(LoginStore.getState().authenticated){
      this.setState(LoginStore.getState());
    }
  }

  logout(){
    this.setState({
      isLogged: false
    });
  }

  render(){
    if(this.state.authenticated){
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
              <NavItem ><Link to="/dashboard">Dashboard</Link></NavItem>
              <NavItem onClick={this.logout}><Link to="/signin">Logout</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    else{
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
}

export default Header;