import React, { useState } from 'react';

const TestQuestions = ({ onNext, data, setData }) => {
    return (
        <>
            <p> Insert questions here</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={onNext}
            >
                Finished?
            </button>
        </>
    );
};

export default TestQuestions;