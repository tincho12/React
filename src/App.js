import React from 'react';
import './App.css';


class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {

    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Cambiar Estado</button>
        </div>)
    } else {
      return <h1>
        <button onClick={this.toggleShow}>Cambiar Estado</button>
        No hay elementos</h1>
      
    }
  }
}

function App() {
  return (
    <div>this is my component: 
      <Helloworld mytext="Hello Fast" subtitle="loremp ispum"/>
      <Helloworld mytext="Hello Martin" subtitle="loremp" />
      <Helloworld mytext="Hello ?" subtitle="Hola !!!" />
    </div>
  );
}


export default App;
