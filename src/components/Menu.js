import React from 'react';
import LinkButton from './LinkButton'
import '../App.css';

const Menu = (props) => {

    const { difficulty, handleChange, startGame } = props

    return (
        <div className={"tutorial"}>
            <p>
                The computer will choose a secret word at random.
                It's your job to guess what the word is, one letter at a time!
                Watch out though - you can only make 6 bad guesses before it's game over.
                Ready to play?
            </p>
            <div>Difficulty: {difficulty}</div>
            <input type="range"
                   min="1"
                   max="10"
                   value={difficulty}
                   className="slider"
                   onChange={handleChange} />
            <LinkButton to={"/game"} onClick={startGame}>Start Game</LinkButton>
        </div>
    )
}

export default Menu