import React from 'react';
import FlashCard from './card/FlashCard'
import axios from 'axios';
import { useQuery } from 'react-query';

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

const getTests = async () => {
    axios.post(`http://localhost:5000/notes/tests`, { email: localStorage.getItem('email') })
      .catch((error) => console.log(error));
};

function FlashCardList() {

    const { data, status } = useQuery('tests', getTests);

    return (
        <>
            {/* <label for="tests" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="tests" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a Test</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select> */}

            { status === "success" && 
                <>
                    <label for="tests" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="tests" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a Test</option>
                        {data.map((item) => {
                            <option value="US">{item.topic}</option>
                        })}
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </>
            }

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