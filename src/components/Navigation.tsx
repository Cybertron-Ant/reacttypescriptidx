import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation Component
 * 
 * This component provides the main navigation structure for the application.
 * It uses React Router's Link components for client-side navigation and
 * Tailwind CSS for styling.
 * 
 * @returns {JSX.Element} The rendered navigation component
 */
const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
