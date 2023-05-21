import React from 'react';

const LandingPage = () => {
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <div
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/libr.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            filter: 'blur(7px) brightness(70%)',
            zIndex: -1,
          }}
        />
        <main className="container mx-auto px-4 py-20 ">
          <div className="max-w-3xl mx-auto mt-20">
            <h1 className="text-5xl font-bold text-gray-300 mb-30">
              Welcome to AIQ
            </h1>
            <p className="text-[#7a7a7a] my-20">
              Unleash the power of your notes. Transform your learning journey
              with the help of Artifical Intelligence.
              <br />
              Take your knowledge to new heights, one note at a time.
            </p>
            <button className="bg-[#00adb5] hover:bg-[#00565a] text-white font-bold py-6 px-14 rounded-lg text-2xl">
              Get Started
            </button>
          </div>
        </main>
      </div>
    );
  };
  

export default LandingPage;