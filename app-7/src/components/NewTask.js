import React, {Component} from 'react';

export default class NewTask extends Component {
    constructor() {
        super();

        this.state = {
            input: ''
        }
    

    this.addToList = this.addToList.bind(this)
    }

inputChange = (val) => {
    this.setState({input: val})
    }

addToList = () => {
    this.props.add(this.state.input);
    this.setState({input: ''})
    }


render() {
    return (
        <div>
            <input value={this.state.input}
                   placeholder="Enter new task" 
                   onChange={(e) => this.inputChange(e.target.value)}/>
            <button onClick={this.addToList}>Add</button>
        </div>
    )
  }
}
