import React, { useState } from 'react';

const TestQuestions = ({ onNext, data, setData }) => {

    const handleJsonChange = (event, index, prop) => {
        const { value } = event.target;

        setData((prevJson) => {
            const updatedQuestions = [...prevJson.questions];
            updatedQuestions[index] = {
                ...updatedQuestions[index],
                [prop]: value,
            };

            return {
                questions: updatedQuestions,
            };
        });
    };

    const handleClick = () => {
        onNext();
    };

    return (
        <>
            {data.questions.map((question, index) => (
                <div key={index}>
                    <h4>Question {index + 1}</h4>
                    <div>
                        <label htmlFor={`question-${index}`}>Question: </label>
                        <input
                            type="text"
                            class="w-full"
                            id={`question-${index}`}
                            value={question.question}
                            onChange={(event) => handleJsonChange(event, index, 'question')}
                        />
                    </div>
                    <div>
                        <label htmlFor={`possible-answers-${index}`}>Possible Answers: </label>
                        {question.possible_answers.map((answer, answerIndex) => (
                            <div key={answerIndex}>
                                <input
                                    type="text"
                                    id={`possible-answer-${index}-${answerIndex}`}
                                    class="w-full"
                                    value={answer}
                                    onChange={(event) => {
                                        const updatedAnswers = [...question.possible_answers];
                                        updatedAnswers[answerIndex] = event.target.value;
                                        handleJsonChange(
                                            { target: { value: updatedAnswers } },
                                            index,
                                            'possible_answers'
                                        );
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <label htmlFor={`correct-answer-${index}`}>Correct Answer: </label>
                        <input
                            type="number"
                            id={`correct-answer-${index}`}
                            class="w-full"
                            value={question.correct_answer}
                            onChange={(event) => handleJsonChange(event, index, 'correct_answer')}
                        />
                    </div>
                </div>
            ))}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleClick}
            >
                Finished?
            </button>
        </>
    );
};

export default TestQuestions;