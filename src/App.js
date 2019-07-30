import React from 'react';
import Participants from './Participants';
import store from './store';
import Stage from './Stage';

function App() {
  const part = store.participants;
  return (
    <main className="App">
      <div className="window">
        <div className="sidebar">
          <Participants participants={part} />
        </div>
        <div className="stage">
        <Stage participants={part} />
        </div>
      </div>
    </main>
  );
}

export default App;
