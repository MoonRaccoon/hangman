import React, { Component } from 'react';
import GuessForm from './GuessForm'
import '../App.css';
import WordToGuess from "./WordToGuess";
import GuessList from "./GuessList";
import Status from './Status'
import LinkButton from './LinkButton'

class Game extends Component {


    state = {
        goodGuess: [],
        badGuess: [],
        remaining: 6,
        status: "",
    }


    makeGuess = (char) => {

        if (!char.match(/[A-Z]/)) {
            this.setState({ status: "invalid"})
        }

        else if (this.state.goodGuess.includes(char) || this.state.badGuess.includes(char)) {
            this.setState({ status: "repeat"})
        }

        else if (this.props.word.includes(char)) {

            this.setState((state) => (
                { ...state, goodGuess: [...state.goodGuess, char], status: "goodGuess"}
            ))

            const newGuess = this.state.goodGuess.concat([char])

            if ([...this.props.word].every((elem) => {return newGuess.includes(elem)})) {
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
                this.setState((state) => (
                    { ...state, status: "lost", goodGuess: [...this.props.word]}
                ))
            }
        }

    }

    exitGame = () => {
        this.setState({
            goodGuess: [],
            badGuess: [],
            remaining: 6,
            status: "",
        })
        this.props.clearState()
    }

    replayGame = () => {
        this.props.replay()
        this.setState({
            goodGuess: [],
            badGuess: [],
            remaining: 6,
            status: "",
        })
        this.props.startGame()

    }

    render() {
        const { goodGuess, badGuess, status, remaining } = this.state

        return (
            <div>

                <WordToGuess word={this.props.word} goodGuess={goodGuess}/>

                {status === "won" || status === "lost" ?
                    <div className={"endgame"}>
                        <button className={"button"} onClick={this.replayGame}>Replay Game</button>
                        <LinkButton to={"/"} onClick={this.exitGame}>
                            Main Menu
                        </LinkButton>
                    </div>
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