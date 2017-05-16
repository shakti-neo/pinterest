import React from "react";
import UiComment from "react-uikit-comment";
import { ListGroupItem, Image } from "react-bootstrap";

class Comment extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <ListGroupItem>
        <Image src = { "http://localhost:3000" + this.props.comment.user.avatar.thumb.url } circle />
        <b>  { this.props.comment.comment }</b>
      </ListGroupItem>
    )
  }

}

export default Comment;