import React from 'react'
import '../App.css'

const GuessList = (props) => {

    const showGuesses = (guessed) => {
        return (
            guessed.map((char, index) => (
                <li key={index}>
                    <s className="bad-guess">{char}</s>
                </li>
            ))
        )
    }

    return (
        <ol className={"char-list"}>
            {showGuesses(props.badGuess)}
        </ol>
    )
}

export default GuessList