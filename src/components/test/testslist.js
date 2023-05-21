import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Accordion from './accordian';
import AccordionPracticeTest from './accordionPracticeTest';

function TestsList() {
    const [tests, setTests] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.post(`http://localhost:5000/notes/tests`, { email: localStorage.getItem('email') });
            console.log(response.data);
            setTests(response.data);
        };

        fetchData();
    }, []);

    return (
        <>
            <ul className="mx-auto mt-8 border-2">
                <Accordion tests={tests} />
            </ul>
            <ul className="mx-auto mt-8 border-2">
                <AccordionPracticeTest tests={tests} />
            </ul>
        </>
    );
}

export default TestsList;
