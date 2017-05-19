import React from "react";
import { Grid, Row, Col, Modal, Button, FormGroup, FormControl, ControlLabel, Checkbox, Form } from "react-bootstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = {
      user: {}
    }
  }


  render(){
    return(
      <Grid>
        <Row>
          <Modal.Dialog style = {{ "marginTop" : "70px" }}>
            <Modal.Header>
              <Modal.Title>SignUp</Modal.Title>
            </Modal.Header>

            <Modal.Body style = {{ "height" : "280px" }}>
              <form>
                <FormGroup controlId="formHorizontalEmail" style = {{ "paddingBottom" : "35px" }}>
                  <Col componentClass={ControlLabel} sm={2}>
                    Email
                  </Col>
                  <Col sm={10}>
                    <FormControl type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword" style = {{ "paddingBottom" : "35px" }}>
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword" style = {{ "paddingBottom" : "35px" }}>
                  <Col componentClass={ControlLabel} sm={2}>
                    Confirm Password
                  </Col>
                  <Col sm={10}>
                    <FormControl type="confirmed_password" placeholder="Confirm Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">
                      Sign in
                    </Button>
                  </Col>
                </FormGroup>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Row>
      </Grid>
    );
  }
}

export default SignUp;