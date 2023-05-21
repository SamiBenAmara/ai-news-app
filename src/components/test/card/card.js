import React from 'react';
import './card.css';
import './flip-animation.css';

function Card({ onClick, front, back }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-back">{back}</div>
            <div className="card-front">{front}</div>
        </div>
    );
}

export default Card;