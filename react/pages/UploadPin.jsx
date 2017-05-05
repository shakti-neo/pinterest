import React from "react";
import { Grid } from "react-bootstrap";

class UploadPin extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Grid style={{ "marginTop" : "75px" }}>
        Pin Upload Form Page
      </Grid>
    )
  }
}

export default UploadPin;