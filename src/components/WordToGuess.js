import React from 'react';
import Character from './Character'
import PropTypes from 'prop-types'
import '../App.css';

const WordToGuess = (props) => {

    const displayWord = (word, guessed) => {
        return (
            [...word].map((char, index) => {
                if (guessed.includes(char)) {
                    return (
                        <li key={index}>
                            <Character text={char}/>
                        </li>
                    )
                }
                else {
                    return (
                        <li key={index}>
                            <Character text={" "}/>
                        </li>
                    )
                }
            })
        )
    }

    return (
        <ol className={"char-list"}>
            {displayWord(props.word, props.goodGuess)}
        </ol>
    )
}

WordToGuess.propTypes = {
    word: PropTypes.string.isRequired,
    goodGuess: PropTypes.array.isRequired
}

export default WordToGuess