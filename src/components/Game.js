import React, { Component } from 'react';
import Character from './Character'
import GuessForm from './GuessForm'
import '../App.css';
import WordToGuess from "./WordToGuess";
import GuessList from "./GuessList";
import Status from './Status'

class Game extends Component {


    state = {
        word: "ABANDONMENTS",
        goodGuess: [],
        badGuess: [],
        remaining: 6,
        status: "start",
    }


    makeGuess = (char) => {



        if (this.state.word.includes(char)) {

            this.setState((state) => (
                { ...state, goodGuess: [...state.goodGuess, char], status: "goodGuess"}
            ))

            const newGuess = this.state.goodGuess.concat([char])

            if ([...this.state.word].every((elem) => {return newGuess.includes(elem)})) {
                this.setState({ status: "won" })
            }

        }

        else {

            this.setState((state) => (
                { ...state, remaining: state.remaining - 1,
                    badGuess: [...state.badGuess, char],
                    status: "badGuess"}
            ))

            if (this.state.remaining - 1 === 0) {
                this.setState({ status: "lost" })
            }
        }

    }

    render() {
        const {word, goodGuess, badGuess, status, remaining } = this.state

        return (
            <div>

                <WordToGuess word={word} goodGuess={goodGuess}/>

                {status === "won" || status === "lost" ? <div></div>
                    :
                    <GuessForm makeGuess={this.makeGuess}/>
                }


                <div className="bottom-area">
                    <GuessList badGuess={badGuess}/>
                    <Status type={status} remaining={remaining}/>
                </div>

            </div>
        )
    }
}

export default Game