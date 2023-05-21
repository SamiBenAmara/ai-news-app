import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const temptest = {
    "multichoices": [
        {
            "question": "What is the function of the integumentary system?",
            "possible_answers": [
                "Physical and mechanical protection",
                "UV light protection",
                "Antimicrobial defense",
                "All of the above"
            ],
            "correct_answer": 3
        },
        {
            "question": "Which type of receptor in the skin is responsible for sensing temperature?",
            "possible_answers": [
                "Mechanoreceptor",
                "Thermoreceptor",
                "Nociceptor",
                "Lamellated corpuscle"
            ],
            "correct_answer": 1
        },
        {
            "question": "Which layer of the skin is responsible for synthesis of vitamin D?",
            "possible_answers": [
                "Stratum Basale",
                "Stratum Spinosum",
                "Stratum Granulosum",
                "Epidermis"
            ],
            "correct_answer": 3
        },
        {
            "question": "What is the main function of sebaceous glands?",
            "possible_answers": [
                "Produce hypotonic sweat for thermoregulation",
                "Produce oil to lubricate and waterproof skin and hair",
                "Modified sweat glands in ear canals",
                "Produce cerumen to protect the eardrum"
            ],
            "correct_answer": 1
        },
        {
            "question": "Which type of sweat gland is associated with hair follicles and produces sweat that is thicker and subject to bacterial decomposition?",
            "possible_answers": [
                "Eccrine sweat",
                "Apocrine sweat",
                "Ceruminous",
                "Sebaceous"
            ],
            "correct_answer": 2
        },
        {
            "question": "What is the purpose of melanin?",
            "possible_answers": [
                "To absorb UV radiation",
                "To help with mechanical protection",
                "To produce vitamin D",
                "To make sweat thicker"
            ],
            "correct_answer": 1
        },
        {
            "question": "Which layer of the skin is primarily composed of keratinocytes?",
            "possible_answers": [
                "Stratum Basale",
                "Stratum Spinosum",
                "Stratum Granulosum",
                "Epidermis"
            ],
            "correct_answer": 3
        },
        {
            "question": "What is the main function of the papillary layer of the dermis?",
            "possible_answers": [
                "Provides strength, extensibility, and elasticity to the skin",
                "Functions as an anchor for the epidermis to the dermis",
                "Produces sweat to cool us down",
                "Connects the skin to the underlying fascia"
            ],
            "correct_answer": 1
        },
        {
            "question": "Which type of receptor in the skin is responsible for sensing touch?",
            "possible_answers": [
                "Mechanoreceptor",
                "Thermoreceptor",
                "Nociceptor",
                "Lamellated corpuscle"
            ],
            "correct_answer": 0
        },
        {
            "question": "What is the structure responsible for producing earwax?",
            "possible_answers": [
                "Melanocyte",
                "Sebaceous gland",
                "Ceruminous gland",
                "Sweat gland"
            ],
            "correct_answer": 2
        }
    ],
    "truefalse": [
        {
            "question": "The skin is one of the largest and heaviest organs, making up approximately 7% of body weight.",
            "correct_answer": true
        },
        {
            "question": "Langerhans cells play an important role in the immune response by eating foreign substances.",
            "correct_answer": true
        },
        {
            "question": "The hypodermis is composed mainly of dense irregular connective tissue containing collagen and elastic fibers.",
            "correct_answer": false
        },
        {
            "question": "Hair is composed of dead keratinocytes and functions in protection, sensation, thermoregulation, and communication.",
            "correct_answer": true
        },
        {
            "question": "Sweat glands produce sweat to cool us down and are found all over the body, including in the palms, feet, and forehead.",
            "correct_answer": true
        }
    ],
    "flashcards": [
        {
            "front": "What is the function of sebaceous glands?",
            "back": "Produce oil to lubricate and waterproof skin and hair."
        },
        {
            "front": "What type of sweat gland produces hypotonic sweat for thermoregulation?",
            "back": "Eccrine sweat."
        },
        {
            "front": "What is the function of the papillary layer of the dermis?",
            "back": "Functions as an anchor for the epidermis to the dermis and provides strength, extensibility, and elasticity to the skin."
        },
        {
            "front": "What type of receptor in the skin is responsible for sensing touch?",
            "back": "Mechanoreceptor."
        },
        {
            "front": "What is the purpose of melanin?",
            "back": "To absorb UV radiation."
        },
        {
            "front": "What layer of the skin is primarily composed of active cells in the epidermis, such as keratinocytes, melanocytes, and Merkel cells?",
            "back": "Stratum Basale."
        },
        {
            "front": "What is the function of ceruminous glands?",
            "back": "Produces cerumen to protect the eardrum."
        },
        {
            "front": "What layer of the skin is responsible for keratinization?",
            "back": "Stratum Granulosum."
        },
        {
            "front": "What is the function of hair?",
            "back": "Functions in protection, sensation, thermoregulation, and communication."
        },
        {
            "front": "What type of receptor in the skin is responsible for sensing temperature?",
            "back": "Thermoreceptor."
        }
    ],
    "topic": "Integumentary System"
}

const NotesInput = ({ onNext, data, setData }) => {
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    function isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    const handleButtonClick = async () => {
        setIsLoading(true);

        setData(temptest);
        onNext();
        return

        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system", content: `
                You are going to write a JSON full of possible exam questions / flash cards with the following notes.
                Do 10 each.

                Consider the following TypeScript Interface for the JSON schema:

                interface MultiChoiceQuestion {
                    question: string;
                    possible_answers: string[];
                    correct_answer: int;
                }

                interface TrueFalseQuestion {
                    question: string;
                    correct_answer: boolean;
                }

                interface Flashcard {
                    front: string;
                    back: string;
                }


                interface Questions {
                   multichoices: MultiChoiceQuestion[];
                   truefalse: TrueFalseQuestion[];
                   flashcards: Flashcard[];
                   topic: string;
                }

                Write the basics section according to the JSON schema.
                On the response, include only the JSON.
                `},
                { role: "user", content: `Notes: ${text}` },

            ],
        });
        console.log(completion.data);
        console.log(completion.data.choices[0].message.content);
        if (!isJsonString(completion.data.choices[0].message.content)) {
            alert("Not a json sadge, try again")
        }
        else {
            setData(JSON.parse(completion.data.choices[0].message.content));
        }
        setIsLoading(false);
        onNext();
    };

    return (
        <div className="bg-gray-700 min-h-screen">
            <><div className="col-span-full">
                <label htmlFor="Notes" className="block text-4xl font-bold leading-6 text-gray-200 pt-20 pb-10">
                    Copy your notes
                </label>
                <div className="my-2">
                    <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="rounded-md border-0 py-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-80"
                        defaultValue={''}
                        value={text}
                        onChange={handleChange} />
                </div>
                <p className="mb-8 leading-6 text-gray-300 py-10">Insert your notes to generate practice questions.<br /> Please keep it of medium length! 🔥</p>
            </div>
                <Transition
                    show={!isLoading}
                    enter="transition-opacity duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <button
                        className="bg-[#00adb5] hover:bg-[#00565a] text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={handleButtonClick}
                    >
                        Generate Questions
                    </button>
                </Transition>
                {isLoading && <p className='text-white font-bold'>Thinking 🤔...</p>}
            </>
        </div>
    );
};

export default NotesInput;