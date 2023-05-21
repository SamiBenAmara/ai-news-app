import React from 'react';

function TestsList() {
    return (
        <ul class="mt-4">
            <li>
                <a href="/flashcards" class="py-2 px-4 text-blue-500 hover:text-blue-700">Flashcards</a>
                <a href="/practice" class="py-2 px-4 text-blue-500 hover:text-blue-700">Practice test!</a>
            </li>
        </ul>

    );
}

export default TestsList;