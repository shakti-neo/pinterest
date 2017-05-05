import React from "react";
import { Grid } from "react-bootstrap";
import { ReactRpg } from 'react-rpg';
import LoginActions from "../actions/LoginActions.jsx";
import LoginStore from "../stores/LoginStores.jsx";


class Dashboard extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    LoginActions.getPins();
    this.state = {
      images: LoginStore.getState().images
    }
  }

  render(){
    return(
      <div>
        <Grid bsClass="container" style={{ "marginTop" : "70px" }}>
          <ReactRpg imagesArray={this.state.images} columns={[ 1, 2, 3 ]} padding={10} />
        </Grid>
      </div>
    );
  }
}

export default Dashboard;