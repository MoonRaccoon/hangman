import React, { Component } from 'react';
import Game from './components/Game'
import * as HangmanAPI from "./HangmanAPI";
import  { Route, Switch } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu'

class App extends Component {

    state = {
        word: "",
        difficulty: 5,
        loaded: false
    }


    startGame = () => {



        HangmanAPI.getWord(this.state.difficulty)
            .then((words) => {
                this.setState({
                    word: words.split('\n')[0],
                    loaded: true
                })
            })
            .catch(() => {
                const def = [
                    "reach", "inclusion", "superb", "dance",
                    "tree", "mighty", "alphabetical", "polite",
                    "extreme", "happy"
                ]

                const rand =  Math.floor(Math.random() * 10)

                this.setState({ word: def[rand], loaded: true})
            }) // Set default if request fails due to CORS
    }

    handleChange = (event) => {
        this.setState({difficulty: event.target.value})

    }

    clearState= () => {
        this.setState({
            word: "",
            difficulty: 5,
            loaded: false
        })
    }

    replay = () => {
        this.setState({
            word: "",
            loaded: false
        })
    }


    render() {
        const { word, difficulty } = this.state
        return (
            <div className="App">
                <h1 className={"header"}>Let's play Hangman!</h1>
                <Switch>
                    <Route exact path='/' render={() => {
                        return (
                            <Menu difficulty={difficulty}
                                  handleChange={this.handleChange}
                                  startGame={this.startGame}/>
                        )
                    }}/>
                    <Route path='/game' render={() => (
                        this.state.loaded ?
                            <Game word={word.toUpperCase()}
                                  replay={this.replay}
                                  clearState={this.clearState}
                                  startGame={this.startGame}/>
                            :
                            <div></div>
                    )}/>
                </Switch>
            </div>
        );
    }
}

export default App;
