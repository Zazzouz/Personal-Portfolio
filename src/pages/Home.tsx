import React from 'react';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/IMG_0745 (1).jpg")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#f3f4f6',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto p-4">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to My Portfolio</h1>
          <p className="mb-4 text-xl text-gray-700">Hi, I'm Zakaria Azzouz. I'm a UCF student majoring in Digital Media. I aspire to become a commercial airline pilot and to also work as a web developer as a side job</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 