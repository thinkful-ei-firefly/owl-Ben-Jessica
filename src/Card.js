import React from 'react';
import './card.css';

function Card(props) {
    return (
      
        <div id={props.id} className='card'>
            <p className='stageName'>{props.name}</p>
            <img src={props.avatar} className='stageIcon' alt='stage icon' />
          
        </div>
     
    );
  }
  
  export default Card;