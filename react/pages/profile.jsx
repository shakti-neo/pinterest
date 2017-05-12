import React from "react";
import { Grid, Col, Well, Row } from "react-bootstrap";
import LoginStore from "../stores/LoginStores.jsx";
import LoginActions from "../actions/LoginActions.jsx";
import { Updateprofile } from 'thousanday-react';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.changeProfilePic = this.changeProfilePic.bind(this);
    this.state = {
      userProfile: {}
    }
  }

  componentWillMount(){
    this.state = {
      userProfile: LoginStore.getState().responseData
    }
  }

  componentDidMount(){
    LoginStore.listen(() => {
      this.setState({
        userProfile: LoginStore.getState().responseData
      });
    });
  }

  changeProfilePic(finalUrl){
    let reader = new FileReader();
    reader.onload = function(event){
      LoginActions.updateUserPicture(event.target.result);
    }
    reader.readAsDataURL(finalUrl);
  }

  render(){
    return(
      <Grid style = {{ "marginTop" : "100px" }}>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Updateprofile src={ "http://localhost:3000" + this.state.userProfile.avatar.url } width="200" saveProfile={ this.changeProfilePic } />
          </Col>
          <Col xs={12} md={6} lg={8}>
            <Well>Email: { this.state.userProfile.email }</Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Profile;