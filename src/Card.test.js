import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
  const card = '<Card id=1 name="Test name" avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1" />';
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(card)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders the UI as expected with no unreads', () => {
    const tree = renderer
      .create(card)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});