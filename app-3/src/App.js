import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      random: ['Spectrasoul','Technimatic','Etherwood','LSB','High Contrast'],
      userInput: ''
    }
  }

  handleChange = (val) => {
    this.setState({userInput: val})
  }


  render() {
    const artists = this.state.random.filter((artist) => {
      return artist.includes(this.state.userInput);
    }).map((artist,i) => {
      return (<h2 key={i}>{artist}</h2>)
    })

    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)}/>
        {artists}
      </div>
    );
  }
}

export default App;
