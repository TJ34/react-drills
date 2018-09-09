import React, { Component } from 'react';
import Todo from './Todo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: '',
      list: []
    }

    this.addToList = this.addToList.bind(this)

  }

  taskChange = (val) => {
    this.setState({task: val})
  }

  addToList = () => {
    this.setState({ list: [...this.state.list, this.state.task], task: ''})
  }

  render() {

    let list = this.state.list.map((element, i)=>{
      return (
        <Todo key={i} task={element}/>
      )
    })

    return (
      <div className="App">
        <p className="heading">My to-do list:</p>

        <div>
          <input value={this.state.task} onChange={(e) => this.taskChange(e.target.value)} placeholder="Enter new task"/>
          <button onClick={this.addToList}>Add</button>
        </div>

        {list}
      </div>
    );
  }
}

export default App;
