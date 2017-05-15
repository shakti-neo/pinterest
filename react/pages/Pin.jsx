import React from "react";
import { Grid, Row, Image, Col } from 'react-bootstrap';
import LoginActions from "../actions/LoginActions.jsx";
import LoginStore from "../stores/LoginStores.jsx";
import Comments from "../components/Comments.jsx";

class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getPinContent = this.getPinContent.bind(this);
    this.getUploaderContent = this.getUploaderContent.bind(this);
  }

  componentWillMount() {
    this.state = {
      pin: {},
      uploader: {},
      comments: []
    }
    LoginActions.showPin(this.props.params.id);
  }

  componentDidMount() {
    LoginStore.listen(() => {
      this.onChange();
    });
  }

  onChange(){
    this.setState({
      pin: LoginStore.getState().pin_data.pin || {},
      uploader: LoginStore.getState().pin_data.uploader || {},
      comments: LoginStore.getState().pin_data.comments || []
    });
  }

  getPinContent(pin){
    return ( ( pin.pin_content ) ? ("http://localhost:3000" + pin.pin_content.url) : "" )
  }

  getUploaderContent(uploader){
    return ( ( uploader.avatar ) ? ( "http://localhost:3000" + uploader.avatar.url ) : "" )
  }

  render(){
    return(
        <Grid style={{ "marginTop" : "70px" }}>
          <Row>
            <Col sm="12" md="6" sm="6">
              <Image src = { this.getPinContent(this.state.pin) } responsive />
            </Col>
            <Col sm="12" md="6" sm="6">
              <Image src = { this.getUploaderContent(this.state.uploader) } style = {{ "width" : "45px" }} circle />
              <b> { this.state.uploader.email || "" } </b>
              <h2>Comments:- </h2>
              <Comments comments = { this.state.comments } />
            </Col>
          </Row>
        </Grid>
      );
  }
}

export default Pin;