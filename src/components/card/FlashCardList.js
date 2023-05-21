import React, { useState } from 'react';
import './FlashCard.css';
import Card from './card';
import { CSSTransition } from 'react-transition-group';

const cardList = [
    {
        "front": "What are the three types of cutaneous receptors?",
        "back": "Mechanoreceptors, Thermoreceptors, Nociceptors"
    },
    {
        "front": "What is the function of sebum?",
        "back": "To lubricate and waterproof skin and hair"
    },
    {
        "front": "What is the function of the hypodermis?",
        "back": "To connect the skin to underlying fascia"
    },
    {
        "front": "What is the function of cerumen?",
        "back": "To help prevent damage to the eardrum"
    },
    {
        "front": "What is the function of eccrine sweat glands?",
        "back": "To produce hypotonic sweat for thermoregulation"
    },
    {
        "front": "What are the two layers of the dermis?",
        "back": "Papillary and Reticular"
    },
    {
        "front": "What is the function of Langerhans cells?",
        "back": "To help with the immune response"
    },
    {
        "front": "What is the function of apocrine sweat glands?",
        "back": "To produce sweat with organic compounds subject to bacterial decomposition and subsequent smell"
    },
    {
        "front": "What is the function of the stratum basale?",
        "back": "To mainly compose active cells in the epidermis and replenish layers above"
    },
    {
        "front": "What is the function of reticular layer of the dermis?",
        "back": "To provide strength, extensibility, and elasticity to the skin"
    }
];

function FlashCardList() {
    const [showFront, setShowFront] = useState(true);

    return (
        <>
            {cardList.map((card, index) => (
                <div className="Flash-Card-Container">
                    <CSSTransition key={index} in={showFront} timeout={300} classNames="flip">
                        <Card onClick={() => setShowFront((v) => !v)} frontText={card.front} backText={card.back} />
                    </CSSTransition>
                </div>
            ))}
        </>
    );
}

export default FlashCardList;