import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/commentList';
import Root from 'root';

let wrapped;

beforeEach(() => {
  const initialState = { 
      comments: ['Hello There', 'This is a comment']
  };

  wrapped = mount(
     <Root initialState={initialState}>
         <CommentList />
     </Root>
    )
});

it('shows one LI per comment', () => { 
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Hello There')
    expect(wrapped.render().text()).toContain('This is a comment')
});
