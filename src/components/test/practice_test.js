import React, { useState } from 'react';
import WrongAnswerExplanation from './practice_test/wrong';

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
    ]
}

function PracticeTest() {
    const [multichoiceAnswers, setMultichoiceAnswers] = useState([]);
    const [truefalseAnswers, setTruefalseAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const handleMultichoiceAnswerChange = (questionIndex, answerIndex) => {
        setMultichoiceAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[questionIndex] = answerIndex;
            return updatedAnswers;
        });
    };

    const handleTruefalseAnswerChange = (questionIndex, answer) => {
        setTruefalseAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[questionIndex] = answer;
            return updatedAnswers;
        });
    };

    const calculateScore = () => {
        let score = 0;

        temptest.multichoices.forEach((question, index) => {
            const userAnswer = multichoiceAnswers[index];
            if (userAnswer === question.correct_answer) {
                score++;
            }
        });

        temptest.truefalse.forEach((question, index) => {
            const userAnswer = truefalseAnswers[index];
            if (userAnswer === question.correct_answer) {
                score++;
            }
        });

        return score;
    };

    const totalQuestions = temptest.multichoices.length + temptest.truefalse.length;
    const score = calculateScore();

    const handleGradeButtonClick = () => {
        setShowScore(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Practice Test</h1>

            {temptest.multichoices.map((question, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold">{question.question}</h3>
                    <ul className="list-disc pl-6">
                        {question.possible_answers.map((answer, answerIndex) => (
                            <li key={answerIndex} className="mb-2">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name={`multichoice-${index}`}
                                        checked={multichoiceAnswers[index] === answerIndex}
                                        onChange={() => handleMultichoiceAnswerChange(index, answerIndex)}
                                        className="mr-2"
                                    />
                                    {answer}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            {temptest.truefalse.map((question, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold">{question.question}</h3>
                    <div className="flex items-center mb-2">
                        <label className="flex items-center mr-4">
                            <input
                                type="radio"
                                name={`truefalse-${index}`}
                                checked={truefalseAnswers[index] === true}
                                onChange={() => handleTruefalseAnswerChange(index, true)}
                                className="mr-2"
                            />
                            True
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name={`truefalse-${index}`}
                                checked={truefalseAnswers[index] === false}
                                onChange={() => handleTruefalseAnswerChange(index, false)}
                                className="mr-2"
                            />
                            False
                        </label>
                    </div>
                </div>
            ))}

            <button
                onClick={handleGradeButtonClick}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
                Grade
            </button>

            {showScore && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Score: {score}/{totalQuestions}</h2>

                    <h3 className="text-lg font-semibold">Changed Answers:</h3>

                    {temptest.multichoices.map((question, index) => {
                        const userAnswer = multichoiceAnswers[index];
                        if (userAnswer !== undefined && userAnswer !== question.correct_answer) {
                            return (
                                <div key={index} className="mb-4">
                                    <WrongAnswerExplanation
                                        question={question.question}
                                        userAnswer={question.possible_answers[userAnswer]}
                                        correctAnswer={question.possible_answers[question.correct_answer]}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}


                    {temptest.truefalse.map((question, index) => {
                        const userAnswer = truefalseAnswers[index];
                        if (userAnswer !== undefined && userAnswer !== question.correct_answer) {
                            return (
                                <div key={index} className="mb-4">
                                    <WrongAnswerExplanation
                                        question={question.question}
                                        userAnswer={userAnswer.toString()}
                                        correctAnswer={question.correct_answer.toString()}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            )}
        </div>
    );
}

export default PracticeTest;