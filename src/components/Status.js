import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Status = (props) => {

    const variant = props.remaining === 1 ? " guess" : " guesses"

    switch(props.type){
        default:
            return (
                <div>Type an alphabetical character and then press the enter/return key to make a guess.</div>
            )
        case "goodGuess":
            return (
                <div>Good guess! You still have {props.remaining} {variant} remaining.</div>
            )
        case "badGuess":
            return (
                <div>Whoops, you guessed wrong! You now have {props.remaining} {variant} remaining.</div>
            )
        case "won":
            return (
                <div>Congratulations, you guessed correctly and won! Want to play another game?</div>
            )
        case "lost":
            return (
                <div>Oh no, you ran out of guesses! Want to try again?</div>
            )
        case "invalid":
            return (
                <div>Sorry, that character is invalid! You can only guess letters from the alphabet.</div>
            )
        case "repeat":
            return (
                <div>
                    You already guessed that letter!
                    Don't worry, you still have {props.remaining} {variant} remaining.
                </div>
            )
    }
}

Status.propTypes = {
    type: PropTypes.string.isRequired,
    remaining: PropTypes.number.isRequired

}

export default Status