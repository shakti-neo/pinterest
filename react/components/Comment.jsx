import React from "react";
import UiComment from "react-uikit-comment";
import { ListGroupItem, Image, Glyphicon, Button } from "react-bootstrap";

class Comment extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <ListGroupItem>
        <Image src = { "http://localhost:3000" + this.props.comment.user.avatar.thumb.url } circle />
        <b>  { this.props.comment.comment }</b>
        <br/>
        <Glyphicon glyph="thumbs-up" />
        { this.props.comment.cached_votes_up }
        &nbsp;
        <Glyphicon glyph="thumbs-down" />
        { this.props.comment.cached_votes_down }
      </ListGroupItem>
    )
  }

}

export default Comment;