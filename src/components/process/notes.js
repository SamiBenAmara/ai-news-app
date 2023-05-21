import React, { useState } from 'react';
const temptest = {
    "questions": [
        {
            "question": "Which of the following is NOT part of the integumentary system?",
            "possible_answers": [
                "Skin",
                "Hair",
                "Glands",
                "Muscles"
            ],
            "correct_answer": 3
        },
        {
            "question": "What is the function of sebaceous glands in the integumentary system?",
            "possible_answers": [
                "Production of sweat",
                "Protection against UV radiation",
                "Production of oil for skin and hair lubrication",
                "Secretion of cerumen in the ear canals"
            ],
            "correct_answer": 2
        },
        {
            "question": "Which of the following is a function of the epidermis?",
            "possible_answers": [
                "Production of melanin",
                "Synthesis of vitamin D",
                "Temperature regulation",
                "Anchoring the epidermis to the dermis"
            ],
            "correct_answer": 0
        },
        {
            "question": "What is the main component of the dermis?",
            "possible_answers": [
                "Adipose tissue",
                "Connective tissue",
                "Muscle tissue",
                "Nerve tissue"
            ],
            "correct_answer": 1
        },
        {
            "question": "What is the purpose of melanin in the integumentary system?",
            "possible_answers": [
                "Protection against UV radiation",
                "Production of sweat",
                "Enhancement of tactile sensation",
                "Production of keratin"
            ],
            "correct_answer": 0
        },
        {
            "question": "Which layer of the skin contains the hair follicles and sweat glands?",
            "possible_answers": [
                "Epidermis",
                "Dermis",
                "Hypodermis",
                "Stratum corneum"
            ],
            "correct_answer": 1
        },
        {
            "question": "What is the function of eccrine sweat glands?",
            "possible_answers": [
                "Production of cerumen",
                "Secretion of oil for skin lubrication",
                "Production of hypotonic sweat for thermoregulation",
                "Protection against UV radiation"
            ],
            "correct_answer": 2
        },
        {
            "question": "Which type of sensory receptor is responsible for detecting temperature changes?",
            "possible_answers": [
                "Mechanoreceptors",
                "Thermoreceptors",
                "Nociceptors",
                "Chemoreceptors"
            ],
            "correct_answer": 1
        },
        {
            "question": "What is the role of Langerhans cells in the integumentary system?",
            "possible_answers": [
                "Production of melanin",
                "Enhancement of tactile sensation",
                "Protection against pathogens",
                "Synthesis of vitamin D"
            ],
            "correct_answer": 2
        },
        {
            "question": "Which layer of the epidermis contains actively dividing cells?",
            "possible_answers": [
                "Stratum basale",
                "Stratum spinosum",
                "Stratum granulosum",
                "Stratum corneum"
            ],
            "correct_answer": 0
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
        //             role: "system", content: `You are going to write a JSON full of possible exam questions with the following notes.

        //         Now consider the following TypeScript Interface for the JSON schema:

        //         interface MultiChoiceQuestion {
        //             question: string;
        //             possible_answers: string[];
        //             correct_answer: int;
        //         }

        //         interface MultiChoiceQuestions {
        //            questions: MultiChoiceQuestion[];
        //         }

        //         Write the basics section according to the Message schema.
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
        //
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