import React from 'react';

function ChatAction(props) {
  let action;
  let icon;
  const type = props.type;
  switch (type) {
    case 'thumbs-up':
      action = 'gave a thumbs up';
      icon = '[thumbs up icon]';
      break;
    case 'thumbs-down':
      action = 'gave a thumbs down';
      icon = '[thumbs down icon]';
      break;
    case 'raise-hand':
      action = 'raised their hand';
      icon = '[hand icon]';
      break;
    case 'clap':
      action = 'clapped';
      icon = '[clap icon]';
      break;
    case 'join':
      action = 'joined';
      break;
    case 'leave':
      action = 'left';
      break;
    case 'join-stage':
      action = 'joined the stage';
      break;
    case 'leave-stage':
      action = 'left the stage';
      break;
    default:
      action = "didn't do anything";
      break;
  }

  return (
    <div id={props.id} className="chatBar">
      <span className="personName">{props.name}</span>
      <span className="action">{action}</span>
      <span>{icon}</span>
    </div>
  );
}

export default ChatAction;
