import React from "react";
import Comment from 'react-uikit-comment';

class Comments extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = {
      comments: this.props.comments
    }
  }

  render(){
    return(
        <div>
          { this.props.comments.map((comment) => {
            return(
                    <Comment title='Author'
                      avatar={{src:'http://otissv.github.io/react-uikit-components/docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>
                      <p>
                        { comment.body }
                      </p>
                    </Comment>
              )
          })}
        </div>
    )
  }
}

export default Comments;