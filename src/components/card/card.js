import React from 'react';
import './card.css';

function Card({ onClick, frontText, backText }) {
    return (
        <div className="card" onClick={onClick}>
            <div className="card-back">{backText}</div>
            <div className="card-front">{frontText}</div>
        </div>
    );
}

export default Card;