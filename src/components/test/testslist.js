import React from 'react';

function TestsList() {
    return (
        <>
            <ul class="w-96 mx-auto mt-8 border-2">
                <li class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                    <a href="/flashcards" class="py-2 px-4 text-blue-500 hover:text-blue-700">Flashcards</a>
                </li>
                <li
                    class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                    <a href="/practice" class="py-2 px-4 text-blue-500 hover:text-blue-700">Practice test</a>
                </li>
                <li
                    class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                    A third item
                </li>
                <li
                    class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                    A fourth item
                </li>
                <li class="w-full py-4">And a fifth one</li>
            </ul>
        </>
    );
}

export default TestsList;