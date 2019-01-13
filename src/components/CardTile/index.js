import React from 'react';
import "./style.css"

function SanrioCard(props) {
    return (
        <div className="card">
        <div className="img-container">
        <img alt="sanrio" src={props.image} id="img-tile" />
        </div>
        </div>
    );
}

export default SanrioCard;