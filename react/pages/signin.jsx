import React from "react"
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Checkbox, Row, Grid } from "react-bootstrap"

class SignIn extends React.Component {
  render(){
    return(
      <Grid bsClass="container">
        <Row className="show-grid">
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>

          </Form>
        </Row>
      </Grid>
    );
  }
}

export default SignIn;