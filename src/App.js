import React from 'react';
import './App.css';

function Helloworld () {
  return <div id="hello">Hello World</div>
}

//3 Formas de declarar le mismo componente constante clase y funct

const App = () => <div>This is my component: <Helloworld/></div>

/*
class App extends React.Component {
  render() {
    return <div>This is my component: <Helloworld/></div>
  }
}
*/

/*
function App() {
  return (
    <div>this is my component: <Helloworld/></div>
  );
}
*/

export default App;
