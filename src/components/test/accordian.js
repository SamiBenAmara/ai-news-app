import { useState } from 'react';
import FlashCardList from './flashcards';


function Accordion({ tests }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <ul className="w-96 mx-auto mt-8 border-2">
            <h1 className="text-2xl font-bold text-center">FlashCards</h1>
            {tests.map((test, index) => (
                <li
                    key={index}
                    className={`w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 ${index === activeIndex ? 'active' : ''
                        }`}
                >
                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                        Flashcards {index + 1} - {test.topic}
                    </div>
                    {index === activeIndex && (
                        <div className="accordion-content">
                            <FlashCardList cardList={test.flashcards} />
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Accordion;