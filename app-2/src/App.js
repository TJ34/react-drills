import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      random: ['Spectrasoul','Technimatic','Etherwood','LSB','High Contrast']
    }
  }


  render() {
    const artists = this.state.random.map((artist,i) => {
      return (<h2 key={i}>{artist}</h2>)
    })

    return (
      <div className="App">
        {artists}
      </div>
    );
  }
}

export default App;
