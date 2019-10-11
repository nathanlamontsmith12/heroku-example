import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            user: null 
        };
    }
    async makeFetch(urlSubStr, method="GET", body) {
        try { 
            const urlString = process.env.REACT_APP_BACKEND_URL + urlSubStr; 
            const fetchObj = {
                method: method,
                credentials: "include",
                headers: {
                "Content-Type": "application/json"
                }
            }

            if (body) {
                fetchObj.body = JSON.stringify(body); 
            } 

            const response = await fetch(urlString, fetchObj); 
            
            return response.json(); 
        } catch (err) {
            console.error(err);
            console.log("ERROR: makeFetch (APP)");
            return err;
        }
    }
    makeUserNate = async () => {
        const response = await this.makeFetch("/user", "POST", {username: "Nate"});
        this.setState({
            user: response.data
        })
    }
    render(){ 
        return (
            <div className="App">
                <h1>HEY THERE</h1>
                <button onClick={this.makeUserNate}>MAKE USER NATE</button>
                <p> { this.state.user ? this.state.user.username : null } </p> 
            </div>
        );
    }
}

export default App;