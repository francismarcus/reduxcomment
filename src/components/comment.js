import React from 'react';

class Comment extends React.Component {

  state = { comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    //TODO: Save the comment

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4> Comments </h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button> Add a comment </button>
        </div>
      </form>
    )
  }
}

export default Comment;
