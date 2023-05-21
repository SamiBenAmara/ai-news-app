import React, { useState } from 'react';
import './FlashCard.css';
import Card from './card/card';
import { CSSTransition } from 'react-transition-group';

const cardList = [
    {
        front: 'Alex Kim',
        back: 'Stinky',
    },
    {
        front: 'Harrison Tseng',
        back: 'Not-stinky',
    },
];

function FlashCard() {
    const [showFront, setShowFront] = useState(true);

    return (
        <div className="Flash-Card-Container">
            {cardList.map((card, index) => (
                <CSSTransition key={index} in={showFront} timeout={300} classNames="flip">
                    <Card onClick={() => setShowFront((v) => !v)} frontText={card.front} backText={card.back} />
                </CSSTransition>
            ))}
        </div>
    );
}

export default FlashCard;