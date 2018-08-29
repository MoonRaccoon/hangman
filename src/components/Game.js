import React, { Component } from 'react';
import Character from './Character'
import GuessForm from './GuessForm'
import '../App.css';
import WordToGuess from "./WordToGuess";
import GuessList from "./GuessList";

class Game extends Component {


    state = {
        word: "ANIMAL",
        goodGuess: [],
        badGuess: [],
        won: false,
        lost: false
    }


    makeGuess = (char) => {



        if (this.state.word.includes(char)) {

            this.setState((state) => (
                { ...state, goodGuess: [...state.goodGuess, char]}
            ))

            const newGuess = this.state.goodGuess.concat([char])

            if ([...this.state.word].every((elem) => {return newGuess.includes(elem)})) {
                this.setState({ won: true })
            }

        }

        else {

            this.setState((state) => (
                { ...state, badGuess: [...state.badGuess, char]}
            ))

            if (this.state.badGuess.length + 1 === 6) {
                this.setState({ lost: true })
            }
        }

    }

    render() {
        const {word, goodGuess, badGuess, won, lost} = this.state

        return (
            <div>

                <WordToGuess word={word} goodGuess={goodGuess}/>

                {won ? <p>Wow, you won the game.</p>
                    :
                    lost ? <p>Wow, you lost the game.</p>
                        :
                        <GuessForm makeGuess={this.makeGuess}/>
                }


                <GuessList badGuess={this.state.badGuess}/>

            </div>
        )
    }
}

export default Game