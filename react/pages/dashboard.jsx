import React from "react";
import { Grid, Nav, NavItem, Row, Col } from "react-bootstrap";
import LoginActions from "../actions/LoginActions.jsx";
import LoginStore from "../stores/LoginStores.jsx";
import { browserHistory } from 'react-router';
import PinsGallery from "../components/PinsGallery.jsx";

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    LoginActions.getPins();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    LoginStore.listen(() => {
      this.onChange();
    });
  }

  componentWillMount(){
    this.state = {
      pins: LoginStore.getState().pins
    }
  }

  onChange(){
    this.setState({
      pins: LoginStore.getState().pins
    });
  }

  render(){
    return(
      <div>
        <Grid bsClass="container" style={{ "marginTop" : "70px" }}>
          <Row>
            <Nav bsStyle="tabs">
              <NavItem >Pins</NavItem>
              <NavItem >Board</NavItem>
            </Nav>
          </Row>
          <Row style = {{ "marginTop" : "10px" }}>
            <PinsGallery pins = { this.state.pins } />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;