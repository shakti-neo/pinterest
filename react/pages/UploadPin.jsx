import React from "react";
import { Grid } from "react-bootstrap";
import { FormGroup, ControlLabel, FormControl, FieldGroup, Button } from "react-bootstrap";
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
    reader.onload = function(event){
      LoginActions.uploadPin({
        picture: event.target.result,
      });
    }
    reader.readAsDataURL(file);
  }

  render(){
    return(
      <Grid style={{ "marginTop" : "75px" }}>
        <form onSubmit = { this.formSubmit }>
          <input bsStyle="primary" type="file" name="picture" accept="image/*" />
          <Button type="submit" bsStyle="primary" bsSize="large" active>Upload Pin</Button>
        </form>
      </Grid>
    );
  }
}

export default UploadPin;