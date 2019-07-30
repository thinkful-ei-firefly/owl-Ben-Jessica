import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import renderer from 'react-test-renderer';

import ChatMessage from './ChatMessage';

describe('<Stage />', () => {
    const part = store.participants;
    const list = store.chatEvents;
    const person = list[0];
    
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<ChatMessage
            key={person.participantId}
            avatar={part.find(item => item.id === person.participantId).avatar}
            name={part.find(item => item.id === person.participantId).name}
            message={person.message}
            time={person.timestamp}
          />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<ChatMessage
            key={person.participantId}
            avatar={part.find(item => item.id === person.participantId).avatar}
            name={part.find(item => item.id === person.participantId).name}
            message={person.message}
            time={person.timestamp}
          />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});