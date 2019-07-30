import React from 'react';
import './chatItem.css';

function ChatMessage(props) {
  
  const time = new Date(props.time);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return (
    <div id={props.id} className="chatItem">
      <img src={props.avatar} className="chatIcon" alt="icon" />
      <span className="personName">{props.name} </span>
      <span className="time">{hours}:{minutes}</span>
      <p>{props.message}</p>
    </div>
  );
}

export default ChatMessage;
