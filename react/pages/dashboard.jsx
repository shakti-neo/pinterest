import React from "react";
import { Grid, Nav, NavItem, Row, Col } from "react-bootstrap";
import ApplicationActions from "../actions/ApplicationActions.jsx";
import ApplicationStore from "../stores/ApplicationStore.jsx";
import { browserHistory } from 'react-router';
import DashboardPinsGallery from "../components/DashboardPinsGallery.jsx";

class Dashboard extends React.Component {

  constructor(props){
    super(props);
    ApplicationActions.getPins();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    ApplicationStore.listen(() => {
      this.onChange();
    });
  }

  componentWillMount(){
    this.state = {
      pins: ApplicationStore.getState().pins
    }
  }

  onChange(){
    this.setState({
      pins: ApplicationStore.getState().pins
    });
  }

  render(){
    return(
      <div>
        <Grid bsClass="container" style={{ "marginTop" : "70px" }}>
          <Row style = {{ "marginTop" : "10px" }}>
            <DashboardPinsGallery pins = { this.state.pins } />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;