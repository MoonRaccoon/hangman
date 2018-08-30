import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Status = (props) => {
    switch(props.type){
        case "start":
            return (
                <div>Type an alphabetical character and then press the enter/return key to make a guess.</div>
            )
        case "goodGuess":
            return (
                <div>Good guess! You still have {props.remaining} guesses remaining.</div>
            )
        case "badGuess":
            return (
                <div>Whoops, you guessed wrong! You now have {props.remaining} guesses remaining.</div>
            )
        case "won":
            return (
                <div>Congratulations, you guessed correctly and won! Want to play another game?</div>
            )
        case "lost":
            return (
                <div>Oh no, you ran out of guesses! Want to try playing again?</div>
            )
    }
}

Status.propTypes = {
    type: PropTypes.string.isRequired,
    remaining: PropTypes.number.isRequired

}

export default Status