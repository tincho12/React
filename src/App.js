import React from 'react';
import './App.css';

function Helloworld (objProps) {
  return <div id="hello">
            <h3>{objProps.subtitle}</h3>
            {objProps.mytext}
          </div>
}

function App() {
  return (
    <div>this is my component: 
      <Helloworld mytext="Hello Fast" subtitle="loremp ispum"/>
      <Helloworld mytext="Hello Martin" />
      <Helloworld mytext="Hello ?" subtitle="Hola !!!" />
    </div>
  );
}


export default App;
