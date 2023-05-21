import React from 'react';

const LandingPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Landing Page</h1>
                    <p className="text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod consequat leo, ut
                        congue justo condimentum et. Fusce eget quam id tellus commodo iaculis. Nulla tempus
                        purus ac dui consequat, id tincidunt elit vehicula.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Get Started
                    </button>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;