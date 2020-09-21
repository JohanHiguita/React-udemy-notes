import React from 'react';

const ValidationComponent = (props) => {

    const validationText = props.textLength <= 5 ? "Text too short" : "Text long enough";
    return (
        <div>
            <p>{validationText}</p>        
        </div>
    );
};

export default ValidationComponent;