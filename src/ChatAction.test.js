import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatAction from './ChatAction';

describe('ChatAction component', () => {
  const chatAction = '<ChatAction id=1 name="Test name" />';
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatAction />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(chatAction)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no unreads', () => {
    const tree = renderer
      .create(chatAction)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});