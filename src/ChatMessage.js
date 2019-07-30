import React from 'react';
import './chatItem.css';

function ChatMessage(props) {
  const time = new Date(props.timestamp);
  return (
    <div id={props.id} className="chatItem">
      <img src={props.avatar} alt="icon" />
      <span className="personName">{props.name}</span>
      <span className="time">{time.toLocaleTimeString('en-US')}</span>
      <p>{props.message}</p>
    </div>
  );
}

export default ChatMessage;
