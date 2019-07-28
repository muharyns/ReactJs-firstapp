import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ColoredBlock from './ColoredBlock.js';
import Clock from './Clock';
//let time = new Date().toLocaleString();

class App extends Component {
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  this.state ={
    foo : 'Click Me'
  };
}
 handleClick () {

  this.setState ({
      foo : 'bar'
  });
   console.log("Clicked");
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><code>Welcome to React</code></h2>
        </div>
        <p className="App-intro">
        <ColoredBlock />
          Hi {this.props.name}!
        </p>
        <Clock></Clock>
        <button onClick={this.handleClick} >
          {this.state.foo}
        </button>
      </div>
    );
  }
}
export default App;
