import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

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

        if (!isJsonString(completion.data.choices[0].message.content)) {
            alert("Not a json sadge, try again")
        }
        else {
            setData(completion.data.choices[0].message.content);
            onNext();
        }
        setIsLoading(false);
        onNext();
    };

    return (
<<<<<<< HEAD
<div className="bg-gray-700 min-h-screen">
  <div className="container mx-auto">
      <div className="col-span-full items-center">
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
            onChange={handleChange}
          />
=======
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
                {isLoading && <p>Thinking 🤔...</p>}
            </>
>>>>>>> d1d92e7155d2e4b06053720572f12dea7954bce2
        </div>
        <p className="mb-8 leading-6 text-gray-300 py-10">
          Insert your notes to generate practice questions.
          <br />
          Please keep it of medium length! 🔥
        </p>
        <button
          className="bg-[#00adb5] hover:bg-[#00565a] text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleButtonClick}
        >
          Generate Questions
        </button>
      </div>
    <div className="right-content flex flex-col items-start ml-10 bordercolor">
      <p className="text-white text-2xl my-10">Example Notes</p>
      <div class="bg-gray-700 border border-gray-800 rounded-lg ">
        <p className="mb-8 leading-6 text-gray-300 py-5 px-5 text-xs">
      U11:Integumentary System
Includes the:
Skin
Hair
Glands
Sebaceous
Sudoriferous (sweat)
ceruminous
Nails
Sensory Receptors
Mechanoreceptors
Thermoreceptors
nociceptors
Skin is 7% of bw and is one of the largest and heaviest organs
Functions:
Physical protection
Mechanical protection
Keratin in outermost layer
Prevents dehydration
Lipid secretions from skin cells via glands
UV light protection
Melanin in melanocytes absorbs UV radiation
Antimicrobial
Sebaceous glands
Langerhans cells
Macrophages
Immunity
Langerhan cells very important, they alter the immune system of a pathogen
Temperature Regulation (evaporation/production of sweat)
Sweat glands secrete sweat when hot
Blood vessels dilate in response to heat and constrict in response to cold
Cutaneous Sensation
Contains free and encapsulated nerve endings
Lamellated corpuscle 
Meissner's Corpuscle
Ruffini Corpuscle
Synthesis of Vitamin D precursor
UV light triggers a reaction for vitamin D production
Vitamin D increases the absorption of Ca and PO in the intestine
Structure of the Skin
There are three layers of the skin:
Epidermis
Composed of epithelial tissue as the name suggests
Dermis
Mostly connective tissue, but also contains some muscle and nerve tissues.
The layer under the skin is called the hypodermis (subcutaneous layer)
Mainly adipose and areolar connective tissue
Epidermis
Key characteristics of this layer are:
Keratinized stratified squamous epithelium
Avascular
4 types of cells found
4 or 5 distinct (strata) layers of cells
Cell Types
Keratinocyte
Produce keratin
Most numerous of the epidermal cells
Melanocyte
Produce melanin pigment
Melanin transferred to keratinocytes through long cellular processes
Melanin protects us from UV and is reason for skin colour
Langerhans
Helps the immune response
Is from the bone marrow
Ingests foreign substances
Merkel
Involved in sensing
Found in the deepest layer
Forms the touch receptor with sensory neuron
Within the epidermis, cells are full of keratin. As the cells progressively die, the cells accumulate keratin to the top of the layer and new cells move upwards. And new cells are subsequently produced in the deepest layer.
Stratum Basale
Is a single layer of cells
Mainly composed of active cells in the epidermis
Mostly keratinocytes, melanocytes and Merkel cells. Keratinocytes are dividing here and replenish layers above

Stratum Spinosum
Composed of 8-10 layers of cells
Mostly keratinocytes
A few langerhan cells are found here as well as cellular projections of melanocytes

Stratum Granulosum
3-5 layers
Flat dying keratinocytes
Undergo nuclear degeneration
Keratinization occurs at this layer

Stratum Lucidum
3-6 layers
This stratum only present in THICK skin
Clear and flat dead keratinocytes
Cells contain a lot of keratin

Stratum Corneum
20-50 layers
Very thin dead keratinocytes
Filled with keratin
The cells are continuously shed
This stratum is barrier for light, heat, water, chemicals, bacteria
Friction stimulates production of new cells

        </p>
        </div>
    </div>
  </div>
</div>



    );
};

export default NotesInput;