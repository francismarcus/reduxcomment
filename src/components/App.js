import React, { Component } from 'react';
import './App.css';

import Comment from './comment'
import CommentList from './commentList'

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
