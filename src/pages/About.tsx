import React from 'react';

/**
 * About Page Component
 * 
 * This component displays information about the application or organization.
 * It features a clean, modern design using Tailwind CSS.
 * 
 * @returns {JSX.Element} The rendered About page component
 */
const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              This is the about page demonstrating React Router navigation with a beautiful Tailwind CSS design.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to create beautiful and functional web applications that provide great user experiences.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Our Technology Stack
              </h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>React with TypeScript</li>
                <li>React Router for navigation</li>
                <li>Tailwind CSS for styling</li>
                <li>Modern development practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
