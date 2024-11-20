import React from 'react';

/**
 * Home Page Component
 * 
 * This component serves as the main landing page of the application.
 * It features a modern, responsive design using Tailwind CSS.
 * 
 * @returns {JSX.Element} The rendered Home page component
 */
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our App
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This is the home page of our React Router implementation, beautifully styled with Tailwind CSS.
            Explore our modern and responsive design system.
          </p>
          <div className="mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
