import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-yea.png">
            <main className="container mx-auto px-4 py-12 my-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold text-gray-800 mb-30">Welcome to AIQ</h1>
                    <p className="text-gray-600 my-20">
                    Unleash the power of your notes. Transform your learning journey with intelligent flashcards and practice tests, 
                    powered by ChatGPT. Take your knowledge to new heights, one note at a time.
                    </p>
                    <button className="bg-[#00adb5] hover:bg-[#00565a] text-white font-bold py-8 px-16 rounded-lg">
                        Get Started
                    </button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;