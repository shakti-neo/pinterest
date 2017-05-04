import React from "react"
import { Grid } from "react-bootstrap"

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid style = {{ "margin-top" : "70px" }}>
        <h1>Profile page here</h1>
      </Grid>
    );
  }
}

export default Profile;