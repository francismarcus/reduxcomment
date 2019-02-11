import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from 'components/App';
import Comment from 'components/comment';
import CommentList from 'components/commentList';


let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders comment component', () => {
  expect(wrapped.find(Comment).length).toEqual(1);
});

it('renders commentList component', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
