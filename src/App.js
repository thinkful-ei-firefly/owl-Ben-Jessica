import React from 'react';
// import Participants from './Participants';
import store from './store';
import Stage from './Stage';
import ChatBar from './Chatbar';

function App() {
  const part = store.participants;
  const chat = store.chatEvents;
  return (
    <main className="App">
      <div className="window">
        <div className="sidebar">
          {/* <Participants participants={part} /> */}
          <ChatBar participants={part} chatEvents={chat} />
        </div>
        <div className="stage">
        <Stage participants={part} />
        </div>
      </div>
    </main>
  );
}

export default App;
