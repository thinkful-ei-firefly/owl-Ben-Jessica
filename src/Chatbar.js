import React from 'react';
import ChatMessage from './ChatMessage';
import ChatAction from './ChatAction';

function ChatBar(props) {
  const part = props.participants;
  const list = props.chatEvents.map(person => {
    if (props.type === 'message') {
      return (
        <ChatMessage
          key={person.participantId}
          avatar={part.find(item => item.id === person.participantId).avatar}
          name={part.find(item => item.id === person.participantId).name}
          message={person.message}
          time={props.timestamp}
        />
      );
    } else {
      return (
        <ChatAction
          key={Math.random()}
          name={part.find(item => item.id === person.participantId).name}
          type={person.type}
        />
      );
    }
  });

  return <div className="chatBar">{list}</div>;
}

export default ChatBar;
