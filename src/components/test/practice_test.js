import React, { useState } from 'react';

function PracticeTest(test) {

    test = test.test;
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

        test.multichoices.forEach((question, index) => {
            const userAnswer = multichoiceAnswers[index];
            if (userAnswer === question.correct_answer) {
                score++;
            }
        });

        test.truefalse.forEach((question, index) => {
            const userAnswer = truefalseAnswers[index];
            if (userAnswer === question.correct_answer) {
                score++;
            }
        });

        return score;
    };

    const totalQuestions = test.multichoices.length + test.truefalse.length;
    const score = calculateScore();

    const handleGradeButtonClick = () => {
        setShowScore(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Practice Test</h1>

            {test.multichoices.map((question, index) => (
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

            {test.truefalse.map((question, index) => (
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

                    {test.multichoices.map((question, index) => {
                        const userAnswer = multichoiceAnswers[index];
                        if (userAnswer !== undefined && userAnswer !== question.correct_answer) {
                            return (
                                <div key={index} className="mb-4">
                                    <p>{question.question}</p>
                                    <p>Selected Answer: {question.possible_answers[userAnswer]}</p>
                                    <p>Correct Answer: {question.possible_answers[question.correct_answer]}</p>
                                </div>
                            );
                        }
                        return null;
                    })}

                    {test.truefalse.map((question, index) => {
                        const userAnswer = truefalseAnswers[index];
                        if (userAnswer !== undefined && userAnswer !== question.correct_answer) {
                            return (
                                <div key={index} className="mb-4">
                                    <p>{question.question}</p>
                                    <p>Selected Answer: {userAnswer.toString()}</p>
                                    <p>Correct Answer: {question.correct_answer.toString()}</p>
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