import React, { Component } from 'react';
import Game from './components/Game'
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1 className={"header"}>Let's play Hangman!</h1>
                <Game/>
            </div>
        );
    }
}

export default App;
