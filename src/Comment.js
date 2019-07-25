// add Comment component here
import React, {component} from 'react';

class Comment extends Component {
  render() {
    return (
    <div>
    {this.props.commentText}
    </div>
    )
  }
}

export default Comment;