import React, { useState } from 'react';
const temptest = {
    "multichoices": [
        {
            "question": "What percentage of body weight is the skin?",
            "possible_answers": [
                "3%",
                "5%",
                "7%",
                "10%"
            ],
            "correct_answer": 2
        },
        {
            "question": "What is the name of the outermost layer of the skin?",
            "possible_answers": [
                "Dermis",
                "Hypodermis",
                "Epidermis",
                "Subcutaneous"
            ],
            "correct_answer": 2
        },
        {
            "question": "What is the function of sebaceous glands?",
            "possible_answers": [
                "Producing sweat to cool us down",
                "Secreting cerumen in the ear canals",
                "Lubricating and waterproofing skin and hair",
                "Producing vitamin D"
            ],
            "correct_answer": 3
        },
        {
            "question": "What is the name of the sensory receptors in the skin that sense pressure?",
            "possible_answers": [
                "Meissner's Corpuscle",
                "Ruffini Corpuscle",
                "Lamellated Corpuscle",
                "Merkel Cell"
            ],
            "correct_answer": 0
        },
        {
            "question": "Which layer of the skin is composed mostly of connective tissue, but also contains some muscle and nerve tissues?",
            "possible_answers": [
                "Epidermis",
                "Dermis",
                "Hypodermis",
                "Stratum Corneum"
            ],
            "correct_answer": 1
        },
        {
            "question": "What is the name of the vitamin that is synthesized in the skin when exposed to UV light?",
            "possible_answers": [
                "Vitamin C",
                "Vitamin B12",
                "Vitamin D",
                "Vitamin E"
            ],
            "correct_answer": 2
        },
        {
            "question": "What type of sweat gland produces hypotonic sweat for thermoregulation?",
            "possible_answers": [
                "Eccrine Sweat Gland",
                "Apocrine Sweat Gland",
                "Ceruminous Gland",
                "Sebaceous Gland"
            ],
            "correct_answer": 0
        },
        {
            "question": "What is the name of the hard keratinized mass of cells found on the tips of fingers and toes?",
            "possible_answers": [
                "Hair",
                "Sweat gland",
                "Nail",
                "Sebaceous gland"
            ],
            "correct_answer": 2
        },
        {
            "question": "What is the function of melanin in the skin?",
            "possible_answers": [
                "To produce sweat for cooling",
                "To lubricate and waterproof skin and hair",
                "To absorb UV radiation",
                "To produce vitamin D"
            ],
            "correct_answer": 2
        },
        {
            "question": "What is the name of the layer in the dermis that is composed of loose areolar connective tissue with elastic fibers and functions as an anchor for the epidermis?",
            "possible_answers": [
                "Reticular Layer",
                "Eccrine Layer",
                "Papillary Layer",
                "Hypodermis"
            ],
            "correct_answer": 2
        }
    ],
    "truefalse": [
        {
            "question": "The skin is one of the smallest organs in the body.",
            "correct_answer": false
        },
        {
            "question": "The epidermis is composed mainly of connective tissue.",
            "correct_answer": false
        },
        {
            "question": "Langerhans cells alter the immune system of pathogens.",
            "correct_answer": true
        },
        {
            "question": "The dermis is composed of two layers, the papillary layer and the reticular layer.",
            "correct_answer": true
        },
        {
            "question": "There are five distinct layers of cells in the epidermis.",
            "correct_answer": false
        },
        {
            "question": "The main function of the hypodermis is to connect the skin to the underlying fascia.",
            "correct_answer": true
        },
        {
            "question": "Apocrine sweat glands are found all over the skin surface but especially in our palms, feet, and forehead.",
            "correct_answer": false
        },
        {
            "question": "The hair functions in protection, sensation, thermoregulation, and communication.",
            "correct_answer": true
        },
        {
            "question": "UV light triggers a reaction in the skin for the production of Vitamin C.",
            "correct_answer": false
        },
        {
            "question": "Sebaceous glands produce cerumen in the ear canals.",
            "correct_answer": false
        }
    ],
    "flashcards": [
        {
            "front": "What is the name of the outermost layer of the skin?",
            "back": "Epidermis"
        },
        {
            "front": "What is the primary function of sebaceous glands?",
            "back": "To lubricate and waterproof skin and hair"
        },
        {
            "front": "What is the name of the pigmented molecule produced by melanocytes in the skin?",
            "back": "Melanin"
        },
        {
            "front": "What structure functions as an anchor for the epidermis to the dermis?",
            "back": "Papillary layer of the dermis"
        },
        {
            "front": "What is the function of sweat glands?",
            "back": "To cool the body through evaporation of sweat"
        },
        {
            "front": "What is the name of the hard keratinized mass of cells found on the tips of fingers and toes?",
            "back": "Nail"
        },
        {
            "front": "What is the name of the modified sweat glands found in the ear canals?",
            "back": "Ceruminous glands"
        },
        {
            "front": "What is the purpose of hair in the skin?",
            "back": "Protection, sensation, thermoregulation, and communication"
        },
        {
            "front": "What is the name of the sensory receptors in the skin that are involved in touch sensation?",
            "back": "Merkel Cell"
        },
        {
            "front": "What is the function of the hypodermis?",
            "back": "To connect the skin to the underlying fascia"
        }
    ]
}
const NotesInput = ({ onNext, data, setData }) => {
    const [text, setText] = useState('');

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

        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

        // const completion = await openai.createChatCompletion({
        //     model: "gpt-3.5-turbo",
        //     messages: [
        //         {
        //             role: "system", content: `
        //         You are going to write a JSON full of possible exam questions / flash cards with the following notes.
        //         Do 10 each.

        //         Consider the following TypeScript Interface for the JSON schema:

        //         interface MultiChoiceQuestion {
        //             question: string;
        //             possible_answers: string[];
        //             correct_answer: int;
        //         }

        //         interface TrueFalseQuestion {
        //             question: string;
        //             correct_answer: boolean;
        //         }

        //         interface Flashcard {
        //             front: string;
        //             back: string;
        //         }


        //         interface Questions {
        //            multichoices: MultiChoiceQuestion[];
        //            truefalse: TrueFalseQuestion[];
        //            flashcards: Flashcard[];
        //         }

        //         Write the basics section according to the JSON schema.
        //         On the response, include only the JSON.
        //         `},
        //         { role: "user", content: `Notes: ${text}` },

        //     ],
        // });

        // if (!isJsonString(completion.data.choices[0].message.content)) {
        //     alert("Not a json sadge, try again")
        // }
        // else {
        //     setData(completion.data.choices[0].message.content);
        //     onNext();
        // }

        // console.log(completion.data.choices[0].message.content);

        setData(temptest);
        onNext();
    };

    return (

        <><div className="col-span-full">
            <label htmlFor="Notes" className="block text-sm font-medium leading-6 text-gray-900">
                Copy your notes
            </label>
            <div className="mt-2">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    value={text}
                    onChange={handleChange} />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Insert your notes to generate practice questions.</p>
        </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleButtonClick}
            >
                Generate Questions
            </button></>
    );
};

export default NotesInput;