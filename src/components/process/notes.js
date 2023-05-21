import React, { useState } from 'react';

const NotesInput = ({ onNext }) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleButtonClick = () => {
        // Perform API call using the 'text' variable
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ notes: text }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the API response data here
                console.log(data);
            })
            .catch((error) => {
                // Handle any errors that occur during the API call
                console.error(error);
            });
            onNext();
    };

    return (

        <><div className="col-span-full">
            <label htmlFor="Notes" className="block text-sm font-medium leading-6 text-gray-900">
                Copy your notes
            </label>
            <div className="mt-2">
                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-80"
                    defaultValue={''}
                    value={text}
                    onChange={handleChange} />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Insert your notes to generate practice questions.</p>
        </div><p>{text}</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={handleButtonClick}
            >
                Generate Questions
            </button></>
    );
};

export default NotesInput;