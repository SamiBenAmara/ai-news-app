import React from 'react';
import FlashCard from './card/FlashCard'

function FlashCardList(cardList) {
    cardList = cardList.cardList;
    return (
        <>
            <div className="h-screen">
                {cardList.map((card, index) => (
                    <FlashCard
                        key={index}
                        front={card.front}
                        back={card.back}
                    />
                ))}
            </div>
        </>
    );
}

export default FlashCardList;