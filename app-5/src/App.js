import React, { Component } from 'react';
import Image from './Image';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image img={"https://images.unsplash.com/photo-1536367340461-06b49ffdf5b3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=363680b137af427e7d80adf34b7c38cc&auto=format&fit=crop&w=800&q=80"}/>
      </div>
    );
  }
}

export default App;
