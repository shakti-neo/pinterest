import React from "react";
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Checkbox, Row, Grid } from "react-bootstrap";
import LoginActions from "../actions/LoginActions.jsx"
import LoginStore from "../stores/LoginStores.jsx"

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event){
    event.preventDefault();
    const state = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    this.setState(state);
    LoginActions.sendRequest(state);
  }

  render(){
    return(
      <Grid bsClass="container">
        <Row className="show-grid">
          <Form horizontal onSubmit = { this.handleLogin }>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" name="email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" name="password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>

            { this.state }

          </Form>
        </Row>
      </Grid>
    );
  }
}

export default SignIn;