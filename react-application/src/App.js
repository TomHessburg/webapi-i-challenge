import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Card from './Card';
import AddItemForm from './AddItemForm';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      characters: []
    }
  }

  updateList = id => {
    axios.delete(`http://localhost:4000/api/users/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
  }
  addItem = newUser => {
    console.log(newUser)

    axios.post('http://localhost:4000/api/users', newUser)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  componentDidMount(){
    axios.get('http://localhost:4000/api/users')
      .then(res => {
        console.log(res.data);
        this.setState({characters: res.data})
      })
      .catch(err => console.log(err)) 
  }

  componentDidUpdate(){
    axios.get('http://localhost:4000/api/users')
      .then(res => {
        this.setState({characters: res.data})
      })
      .catch(err => console.log(err)) 
  }

  render() {
    return (
      <div className="App">
        <h1>list</h1>
        <hr />

        {this.state.characters.map(char => {
          return <Card updateList={this.updateList} key={char.id} char={char} />
        })}
        <AddItemForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
