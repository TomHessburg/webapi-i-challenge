import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Card from './Card'

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      characters: []
    }
  }

  updateList = id => {
    console.log(id);
    axios.delete(`http://localhost:4000/api/users/${id}`)
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
        console.log(res.data);
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
        

      </div>
    );
  }
}

export default App;
