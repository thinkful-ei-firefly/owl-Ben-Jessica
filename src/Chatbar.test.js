import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatBar from './ChatBar';
import store from './store';

describe('ChatBar component', () => {
  const part = store.participants;
  const chat = store.chatEvents;
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatBar participants={part} chatEvents={chat} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatBar participants={part} chatEvents={chat} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no unreads', () => {
    const tree = renderer
      .create(<ChatBar participants={part} chatEvents={chat} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});