import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: null 
    };
  }
  async componentDidMount(){
    try {
      const response = await fetch("http://localhost:3001/user", {
        method: "POST",
        body: JSON.stringify({
          username: "Nate"
        }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (response.success) {
        console.log(response); 
      }
    } catch (err) {
      console.error(err);
    }
  }
  render(){ 
    console.log("USER IN STATE: ")
    console.log(this.state.user);
    return (
      <div className="App">
        <h1>HEY THERE</h1>
      </div>
    );
  }
}

export default App;
