import React from 'react';

/**
 * Header Component
 * 
 * Renders the application header with customizable title
 * Uses Tailwind CSS for styling
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The header title to display
 */
interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-primary-600">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
