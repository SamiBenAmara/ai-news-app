import React, { useState } from 'react';
import './FlashCard.css';
import Card from './card';
import { CSSTransition } from 'react-transition-group';


function FlashCard({ front, back }) {
    const [showFront, setShowFront] = useState(true);

    return (
        <div className="Flash-Card-Container">
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card onClick={() => {
                    setShowFront((v) => !v)

                }} front={front} back={back} />
            </CSSTransition>
        </div>
    )
}

export default FlashCard;