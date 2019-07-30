import React from 'react';
import Card from './Card'
import './stage.css';

function Stage(props) {

    const list = props.participants.filter(person =>  person.onStage );
    const htmlList=list.map(person => <Card key={person.id} name={person.name} avatar={person.avatar} /> )
    
    return (
      
        <div className='stage'>
            {htmlList}
          
        </div>
     
    );
  }
  
  export default Stage;