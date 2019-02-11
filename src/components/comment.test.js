import React from 'react';
import { mount } from 'enzyme';
import Comment from './comment';
import Root from '../root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Comment />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('Shows a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
});

describe('the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment'}
    });
    wrapped.update();
  });

  it('has a textarea users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });
  
  it('when the form is submitted, text area should get emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
