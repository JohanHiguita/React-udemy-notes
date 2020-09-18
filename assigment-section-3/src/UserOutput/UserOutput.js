import React from 'react';
import './UserOutput.css';


const userOutput = props => {
    const userStyle = {
        border: "2px solid #555",
        backgroundColor: "#ffa",
        padding: "10px",
        borderRadius: "15px"
    }
    return (
        <div class = "UserOutput">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id obcaecati necessitatibus dolorum facilis labore vero reiciendis? Facere, laboriosam corporis neque quam quos quo modi facilis eaque dolore quisquam commodi dicta.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem tempore totam laboriosam voluptatum numquam aspernatur, hic recusandae neque nemo, velit sunt quibusdam voluptate ex quae animi. Voluptatibus, dicta ea.</p>
            <small style={userStyle}>user: {props.userName}</small>
        </div>
    );
};



export default userOutput;