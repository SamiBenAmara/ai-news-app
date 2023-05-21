import React from 'react';
import FlashCard from './card/FlashCard'

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
    return (
        <div className="h-screen">
            {cardList.map((card, index) => (
                <FlashCard
                    key={index}
                    front={card.front}
                    back={card.back}
                />
            ))}
        </div>
    );
}

export default FlashCardList;