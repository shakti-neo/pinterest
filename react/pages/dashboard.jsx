import React from "react";
import { Grid } from "react-bootstrap";
import LoginActions from "../actions/LoginActions.jsx";
import LoginStore from "../stores/LoginStores.jsx";
import {Waterfall} from 'thousanday-react';


class Dashboard extends React.Component {

  constructor(props){
    super(props);
    LoginActions.getPins();
    this.onChange = this.onChange.bind(this);
    this.state = {
      images: []
    }
  }

  componentDidMount(){
    LoginStore.listen(() => {
      this.onChange();
    });
  }

  componentWillMount(){
    this.state = {
      images: LoginStore.getState().images
    }
  }

  onChange(){
    this.setState({
      images: LoginStore.getState().images
    });
  }

  render(){
    return(
      <div>
        <Grid bsClass="container" style={{ "marginTop" : "70px" }}>
          <Waterfall column="3" image={this.state.images} height="400px"/>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;