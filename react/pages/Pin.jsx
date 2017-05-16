import React from "react";
import { Grid, Row, Image, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import LoginActions from "../actions/LoginActions.jsx";
import LoginStore from "../stores/LoginStores.jsx";
import CommentList from "../components/CommentList.jsx";

class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getPinContent = this.getPinContent.bind(this);
    this.getUploaderContent = this.getUploaderContent.bind(this);
    this.createComment = this.createComment.bind(this);
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

  createComment(event){
    event.preventDefault();
    LoginActions.createComment({
      comment_body: event.target.comment.value,
      comment_pin_id: this.state.pin.id
    });
  }

  render(){
    return(
        <Grid style={{ "marginTop" : "70px" }}>
          <Row style = {{ "marginTop" : "10px" }}>
            <Col sm="12" md="6" sm="6">
              <Image src = { this.getUploaderContent(this.state.uploader) } style = {{ "width" : "45px" }} circle />
              <b> { this.state.uploader.email || "" } </b>
              <Image src = { this.getPinContent(this.state.pin) } responsive />
            </Col>
            <Col sm="12" md="6" sm="6">
              <form onSubmit = { this.createComment }>
                <FormGroup controlId="formHorizontalEmail">
                  <Col>
                    <FormControl type="text" placeholder="Comment" name="comment"/>
                  </Col>
                  <br/>
                  <Button type="submit" bsStyle="primary">Submit</Button>
                </FormGroup>
              </form>
              <CommentList comments = { this.state.comments }/>
            </Col>
          </Row>
        </Grid>
      );
  }
}

export default Pin;