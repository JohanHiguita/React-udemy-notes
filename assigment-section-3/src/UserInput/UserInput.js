import React from 'react';
import './UserInput.css';

const userInput = props => {

    const changeInputHandler = event => {
        props.changeUser(event.target.value)
    }

    return (
        <input type="text" class="UserInput" onChange={changeInputHandler} value={props.appState.username} />
    );
};


export default userInput;