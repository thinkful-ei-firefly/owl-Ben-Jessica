import React from 'react';

function Card(props) {
    return (
      
        <div id={props.id} className='card'>
            <p>{props.name}</p>
            <img src={props.avatar} alt='icon' />
          
        </div>
     
    );
  }
  
  export default Card;