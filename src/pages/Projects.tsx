import React from 'react';

const Projects = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <div className="space-y-6">
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-48 overflow-hidden">
            <img 
              src="/images/quiz app ss.JPG" 
              alt="Quiz App" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Quiz App</h2>
            <p className="mb-2">A react app project where i create a working quiz with properly displayed results</p>
            <a 
              href="https://github.com/Zazzouz/Quiz-App.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-48 overflow-hidden">
            <img 
              src="/images/Exercise app ss.JPG" 
              alt="Exercise App" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Exercise App</h2>
            <p className="mb-2">App that tracks physical activity as you do them in real time, users can track durational exercises as well as track repititions.</p>
            <a 
              href="https://github.com/Zazzouz/React-Native-Exercise-App.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
        
        <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">To-Do List Image</p>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">To-Do List</h2>
            <p className="mb-2">Functioning to-do list app that allows users to add, edit, and delete tasks.</p>
            <a 
              href="https://github.com/Zazzouz/Expo-Todo-List.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 