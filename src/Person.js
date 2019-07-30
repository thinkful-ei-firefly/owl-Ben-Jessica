import React from 'react';

function Person(props) {
    let status = 'left session'
    if (props.inSession) {status = 'in session'}
    if (props.onStage) {status = 'on stage'}

    return (
      
        <div id={props.id}>
            <img src={props.avatar} alt='icon'/>
            <span className='personName'>{props.name}</span>
            <span className={props.inSession ? 'green' : 'gray'}>&#11044;</span>
            <span>{status}</span>
          
        </div>
     
    );
  }
  
  export default Person;