import React, { useState } from 'react';
import { Transition } from '@headlessui/react';


const WrongAnswerExplanation = ({ question, userAnswer, correctAnswer }) => {
    const [explanation, setExplanation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onClickExplain = async () => {
        setIsLoading(true);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: `You are a tutor. You are helping a student with a question.` },
                { role: "assistant", content: `${question}` },
                { role: "user", content: `${userAnswer}` },
                { role: "system", content: `The correct answer is ${correctAnswer}` },
                { role: "system", content: `Explain step by step why ${userAnswer} is wrong, and why ${correctAnswer} is correct.` },

            ],
        });
        const answer = completion.data.choices[0].message.content;
        setExplanation(answer);
        setIsLoading(false);
    }
    return (
        <div className="mb-4">
            <p>{question}</p>
            <p>Selected Answer: {userAnswer}</p>
            <p>Correct Answer: {correctAnswer}</p>

            <Transition
                show={!isLoading}
                enter="transition-opacity duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <button onClick={onClickExplain} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Explain {explanation && <span>again</span>}</button>
            </Transition>
            {isLoading && <p>Thinking 🤔...</p>}
            {explanation && <p className="border-2 p-2 text-left rounded border-solid">{explanation}</p>}
        </div>
    );
};

export default WrongAnswerExplanation;