import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../App.css'

class GuessForm extends Component {

    state = {
        value: ""
    }

    handleChange = (event) => {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.makeGuess(this.state.value)
        this.setState({ value: "" })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="guess-form"
                       type="text" value={this.state.value}
                       onChange={this.handleChange}
                       maxLength={1}>
                </input>
            </form>
        )
    }
}

GuessForm.propTypes = {
    makeGuess: PropTypes.func.isRequired
}

export default GuessForm