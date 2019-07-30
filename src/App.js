import React from 'react';
import Person from './Person';


const id = 1;
  const name = 'Koren Templeton';
  const avatar =
      'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1';
  const inSession = true;
  const onStage = true;





function App() {
  return (
    <main className='App'>
      <div className='window'>
        <div className='sidebar'>
          {/*will contain either chat or participants*/}
          <Person id={id} avatar={avatar} inSession={inSession} name={name} onStage={onStage} />
          
        </div>
        <div className='stage'>
          {/*will contain the stage */}
        </div>
      </div>
    </main>
  );
}

export default App;