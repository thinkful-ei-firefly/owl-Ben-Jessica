import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import renderer from 'react-test-renderer';

import Person from './Person';

describe('<Stage />', () => {
    const part = store.participants;
    const person = part[0];
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Person
            key={person.id}
            avatar={person.avatar}
            name={person.name}
            inSession={person.inSession}
            onStage={person.onStage}
          />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Person
            key={person.id}
            avatar={person.avatar}
            name={person.name}
            inSession={person.inSession}
            onStage={person.onStage}
          />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});