import React, { Component } from 'react';
import 'components/App.css';

import Comment from 'components/comment'
import CommentList from 'components/commentList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Comment />
      <CommentList />
      </div>
    );
  }
}

export default App;
