import React, { useState } from 'react';

const TestQuestions = ({ onNext, data, setData }) => {

    const handleJsonChange = (
        event,
        section,
        index,
        prop,
        newlist = []
    ) => {
        const { value } = event.target;

        setData((data) => {
            const updatedSection = [...data[section]];
            const updatedItem = { ...updatedSection[index] };

            if (prop === 'possible_answers') {
                updatedItem[prop] = newlist;
            } else {
                updatedItem[prop] = value;
            }

            updatedSection[index] = updatedItem;

            return {
                ...data,
                [section]: updatedSection,
            };
        });
    };


    const handleClick = () => {
        onNext();
    };
    return (
        <>
            <h2>Multiple Choice Questions</h2>
            {data.multichoices.map((question, index) => (
                <div key={index}>
                    <h4>Question {index + 1}</h4>
                    <div>
                        <label htmlFor={`mc-question-${index}`}>Question: </label>
                        <input
                            type="text"
                            class="w-full"
                            id={`mc-question-${index}`}
                            value={question.question}
                            onChange={(event) => handleJsonChange(event, 'multichoices', index, 'question')}
                        />
                    </div>
                    <div>
                        <label htmlFor={`mc-possible-answers-${index}`}>Possible Answers: </label>
                        {question.possible_answers.map((answer, answerIndex) => (
                            <div key={answerIndex}>
                                <input
                                    type="text"
                                    id={`mc-possible-answer-${index}-${answerIndex}`}
                                    class="w-full"
                                    value={answer}
                                    onChange={(event) => {
                                        const updatedAnswers = [...question.possible_answers];
                                        updatedAnswers[answerIndex] = event.target.value;
                                        handleJsonChange(
                                            event,
                                            'multichoices',
                                            index,
                                            'possible_answers',
                                            updatedAnswers
                                        );
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <label htmlFor={`mc-correct-answer-${index}`}>Correct Answer: </label>
                        <input
                            type="number"
                            id={`mc-correct-answer-${index}`}
                            value={question.correct_answer}
                            onChange={(event) => handleJsonChange(event, 'multichoices', index, 'correct_answer')}
                        />
                    </div>
                </div>
            ))}

            <h2>True/False Questions</h2>
            {data.truefalse.map((question, index) => (
                <div key={index}>
                    <h4>Question {index + 1}</h4>
                    <div>
                        <label htmlFor={`tf-question-${index}`}>Question: </label>
                        <input
                            type="text"
                            class="w-full"
                            id={`tf-question-${index}`}
                            value={question.question}
                            onChange={(event) => handleJsonChange(event, 'truefalse', index, 'question')}
                        />
                    </div>
                    <div>
                        <label htmlFor={`tf-correct-answer-${index}`}>Correct Answer: </label>
                        <select
                            id={`tf-correct-answer-${index}`}
                            class="w-full"
                            value={question.correct_answer.toString()}
                            onChange={(event) =>
                                handleJsonChange(
                                    event,
                                    'truefalse',
                                    index,
                                    'correct_answer'
                                )
                            }
                        >
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </div>
                </div>
            ))}

            <h2>Flashcards</h2>
            {data.flashcards.map((flashcard, index) => (
                <div key={index}>
                    <h4>Flashcard {index + 1}</h4>
                    <div>
                        <label htmlFor={`flashcard-front-${index}`}>Front: </label>
                        <input
                            type="text"
                            class="w-full"
                            id={`flashcard-front-${index}`}
                            value={flashcard.front}
                            onChange={(event) => handleJsonChange(event, 'flashcards', index, 'front')}
                        />
                    </div>
                    <div>
                        <label htmlFor={`flashcard-back-${index}`}>Back: </label>
                        <input
                            type="text"
                            class="w-full"
                            id={`flashcard-back-${index}`}
                            value={flashcard.back}
                            onChange={(event) => handleJsonChange(event, 'flashcards', index, 'back')}
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