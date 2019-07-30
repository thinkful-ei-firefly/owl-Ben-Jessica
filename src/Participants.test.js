import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import renderer from 'react-test-renderer';

import Participants from './Participants';

describe('<Stage />', () => {
    const part = store.participants;
    
    it('renders without crashing', () => {
        // Create a DOM element to render the component into
        const div = document.createElement('div');

        // Render the component
        // If something is wrong it will fail here
        ReactDOM.render(<Participants participants={part} />, div);

        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as expected', () => {
        // Render the component, as JSON
        const tree = renderer.create(<Participants participants={part} />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot(); 
    });
});