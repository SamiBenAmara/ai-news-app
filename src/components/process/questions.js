import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TestQuestions = ({ onNext, data, setData }) => {

    const navigate = useNavigate();

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


    const saveTest = async () => {
        onNext();

        axios.post(`http://localhost:5000/notes/notes`, { email: localStorage.getItem('email'), data: data })
            .then((res) => {
                console.log(res);
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <div className="bg-gray-200 min-h-screen p-5 mx-80">
                <div
                    class="mb-4 rounded-lg bg-yellow-100 px-6 py-5 text-base text-primary-600"
                    role="alert">
                    Let's scroll down and double check the generated questions! If you want to change anything, you can do so here. ✅
                </div>
                <h1 class="text-4xl font-bold mb-4">{data.topic}</h1>
                <h2 class="text-xl font-bold">Multiple Choice Questions</h2>
                {data.multichoices.map((question, index) => (
                    <div key={index}>
                        <h4 class="text-left font-bold">Question {index + 1}</h4>
                        <div>
                            <input
                                type="text"
                                class="bg-opacity-25 w-full rounded-lg bg-teal-200 my-1 "
                                id={`mc-question-${index}`}
                                value={question.question}
                                onChange={(event) => handleJsonChange(event, 'multichoices', index, 'question')}
                            />
                        </div>
                        <h4 class="text-left font-bold">Answers:</h4>
                        <div>
                            <div class="bg-gray-200 rounded-lg bg-opacity-25">
                                {question.possible_answers.map((answer, answerIndex) => (
                                    <div key={answerIndex} className="text-left">
                                        <input
                                            type="text"
                                            id={`mc-possible-answer-${index}-${answerIndex}`}
                                            class="bg-opacity-25 rounded-lg w-full  my-1 "
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
                        </div>
                        <div>
                            <label htmlFor={`mc-correct-answer-${index}`}>Correct Answer: </label>
                            <input
                                type="number"
                                class="rounded-lg"
                                id={`mc-correct-answer-${index}`}
                                value={question.correct_answer}
                                onChange={(event) => handleJsonChange(event, 'multichoices', index, 'correct_answer')}
                            />
                        </div>
                    </div>
                ))}

                <h2 class="text-xl font-bold">True/False Questions</h2>
                {data.truefalse.map((question, index) => (
                    <div key={index}>
                        <h4 className = "text-left font-bold">Question {index + 1}</h4>
                        <div>
                            
                            <input
                                type="text"
                                class="bg-opacity-25 w-full rounded-lg bg-teal-200 my-1"
                                id={`tf-question-${index}`}
                                value={question.question}
                                onChange={(event) => handleJsonChange(event, 'truefalse', index, 'question')}
                            />
                        </div>
                        <div>
                            <label htmlFor={`tf-correct-answer-${index}`}>Correct Answer: </label>
                            <select
                                id={`tf-correct-answer-${index}`}
                                class="w-full rounded-lg"
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

                <h2 class="text-xl font-bold">Flashcards</h2>
                {data.flashcards.map((flashcard, index) => (
                    <div>
                        <div key={index}>
                            <h4 className="text-left font-bold">Flashcard {index + 1}</h4>
                            <div>
                                <label htmlFor={`flashcard-front-${index}`}className="font-bold">Front: </label>
                                <input
                                    type="text"
                                    class="bg-opacity-25 w-full rounded-lg bg-teal-200 my-1"
                                    id={`flashcard-front-${index}`}
                                    value={flashcard.front}
                                    onChange={(event) => handleJsonChange(event, 'flashcards', index, 'front')}
                                />
                            </div>
                            <div>
                                <label htmlFor={`flashcard-back-${index}`}className="font-bold">Back: </label>
                                <input
                                    type="text"
                                    class="bg-opacity-25 w-full rounded-lg my-1"
                                    id={`flashcard-back-${index}`}
                                    value={flashcard.back}
                                    onChange={(event) => handleJsonChange(event, 'flashcards', index, 'back')}
                                />
                            </div>
                        </div>
                    </div>
                ))}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={saveTest}
                >
                    Save and continue
                </button>
            </div>
        </>
    );
};

export default TestQuestions;