import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-yea.png">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to AIQ</h1>
                    <p className="text-gray-600 mb-6">
                    "Unleash the power of your notes. Transform your learning journey with intelligent flashcards and practice tests, powered by ChatGPT. Take your knowledge to new heights, one note at a time."
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 rounded-lg">
                        Get Started
                    </button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;