import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../App.css'

const Character = (props) => {

    return (
        <div className={"char"}>{props.text}</div>
    )

}

Character.propTypes = {
    text: PropTypes.string.isRequired
}

export default Character