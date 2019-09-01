import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Products from './Products.js';
//let time = new Date().toLocaleString();

class App extends Component {
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  this.state ={
    foo : 'Click Me',
    value:''
  };
  this.handleChange = this.handleChange.bind(this);
}
 handleClick () {

  this.setState ({
      foo : 'bar',
      
  });
   console.log("Clicked");
}

handleChange(event) {
  console.log(event);
}

  render() {
    return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><code>Welcome to React</code></h2>
        </div>
        <p className="App-intro">
        {/* <ColoredBlock /> */}
          Hi {this.props.nameapp}!
        </p>
        {/* <Clock></Clock> */}
        <button onClick={this.handleClick} >
          {this.state.foo}
        </button>   
        
      </div>
      {/* <div><input type="text" value={this.state.value} placeholder="this is placeholder"  onChange={this.handleChange}/></div> */}
      {/* <InputField /> */}
      
      <div>
        <section>
          <Products ></Products>
        </section>
      </div>
      </div>
      
    );
  }
}
export default App;
