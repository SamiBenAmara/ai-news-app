import React, { useState } from 'react';
const temptest = {
    "multichoices": [
        {
            "question": "What is the largest organ in the body?",
            "possible_answers": ["Heart", "Liver", "Skin", "Lungs"],
            "correct_answer": 2
        },
        {
            "question": "What is the main function of the skin?",
            "possible_answers": ["To help with thermoregulation", "To produce sweat", "To provide mechanical protection", "All of the above"],
            "correct_answer": 3
        },
        {
            "question": "What is the function of sebaceous glands?",
            "possible_answers": ["To secrete sweat", "To produce earwax", "To lubricate and waterproof skin and hair", "To produce melanin pigment"],
            "correct_answer": 2
        },
        {
            "question": "What is the function of Langerhans cells?",
            "possible_answers": ["To produce keratin", "To help with thermoregulation", "To play a role in the immune response", "To secrete sweat"],
            "correct_answer": 2
        },
        {
            "question": "What is the function of the reticular layer of the dermis?",
            "possible_answers": ["To anchor the epidermis to the dermis", "To increase grip of our hands", "To provide thermoregulation", "All of the above"],
            "correct_answer": 1
        },
        {
            "question": "What is the function of eccrine sweat glands?",
            "possible_answers": ["To produce hair", "To secrete cerumen", "To provide thermoregulation", "To produce oil for the skin"],
            "correct_answer": 2
        },
        {
            "question": "What is the pigment produced by melanocytes called?",
            "possible_answers": ["Keratin", "Sweat", "Sebum", "Melanin"],
            "correct_answer": 3
        },
        {
            "question": "What type of receptor allows us to feel temperature?",
            "possible_answers": ["Mechanoreceptor", "Thermoreceptor", "Nociceptor", "Lamellated corpuscle"],
            "correct_answer": 1
        },
        {
            "question": "What is the function of the stratum corneum?",
            "possible_answers": ["To provide thermoregulation", "To anchor the epidermis to the dermis", "To produce keratin", "To act as a barrier for light, heat, water, and chemicals"],
            "correct_answer": 3
        },
        {
            "question": "What is the function of ceruminous glands?",
            "possible_answers": ["To produce earwax", "To lubricate and waterproof skin and hair", "To provide thermoregulation", "To secrete sweat"],
            "correct_answer": 0
        }
    ],

    "truefalse": [
        {
            "question": "The skin is made up of three layers.",
            "correct_answer": true
        },
        {
            "question": "UV light triggers vitamin D production in the skin.",
            "correct_answer": true
        },
        {
            "question": "Melanin in melanocytes protects us from bacteria.",
            "correct_answer": false
        },
        {
            "question": "The hypodermis is composed of dense irregular connective tissue.",
            "correct_answer": false
        },
        {
            "question": "The keratinocytes in the stratum basale are dividing and replenish layers above.",
            "correct_answer": true
        }
    ],

    "flashcards": [
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
    ],
    "topic": "Integumentary System"
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

        if (!isJsonString(completion.data.choices[0].message.content)) {
            alert("Not a json sadge, try again")
        }
        else {
            setData(completion.data.choices[0].message.content);
            onNext();
        }

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
                <button
                    className="bg-[#00adb5] hover:bg-[#00565a] text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={handleButtonClick}
                >
                    Generate Questions
                </button></>
        </div>
    );
};

export default NotesInput;