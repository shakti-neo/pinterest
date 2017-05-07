import React from "react";
import { Grid } from "react-bootstrap";
import { FormGroup, ControlLabel, FormControl, FieldGroup } from "react-bootstrap";
import axios from "axios";
import LoginActions from "../actions/LoginActions.jsx";
import Dropzone from 'react-dropzone';

class UploadPin extends React.Component {
  constructor(props){
    super(props);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event){
    event.preventDefault();
    let file = event.target.picture.files[0];
    let reader = new FileReader();
    reader.onload = (event) => {
      // send base 64 format to server
    } 
    reader.readAsText(file);
  }

  render(){
    return(
      <Grid style={{ "marginTop" : "75px" }}>
        <form onSubmit = { this.formSubmit }>
          <input type="file" name="picture" accept="image/*" />
          <input type="submit" />
        </form>
      </Grid>
    );
  }
}

export default UploadPin;