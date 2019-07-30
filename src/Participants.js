import React from 'react';
import Person from './Person';

function Participants(props) {
  const list = props.participants.map(person => {
    return (
      <Person
        key={person.id}
        avatar={person.avatar}
        name={person.name}
        inSession={person.inSession}
        onStage={person.onStage}
      />
    );
  });
  return <div className="participants">{list}</div>;
}

export default Participants;
